-- Add user_id column to videos table for ownership tracking
ALTER TABLE public.videos 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update existing videos to have a system user_id (using a placeholder UUID)
-- In production, you might want to assign these to a specific admin user
UPDATE public.videos 
SET user_id = '00000000-0000-0000-0000-000000000000'
WHERE user_id IS NULL;

-- Make user_id NOT NULL after updating existing records
ALTER TABLE public.videos 
ALTER COLUMN user_id SET NOT NULL;

-- Drop the old overly permissive policies
DROP POLICY IF EXISTS "Only authenticated users can delete videos" ON public.videos;
DROP POLICY IF EXISTS "Only authenticated users can update videos" ON public.videos;
DROP POLICY IF EXISTS "Anyone can upload videos" ON public.videos;

-- Create secure ownership-based policies
CREATE POLICY "Users can only delete their own videos" 
ON public.videos 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can only update their own videos" 
ON public.videos 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert videos" 
ON public.videos 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Keep the public read access
-- (The "Videos are viewable by everyone" policy already exists)