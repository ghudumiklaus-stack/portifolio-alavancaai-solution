-- Add user_id column to videos table for ownership tracking (nullable initially)
ALTER TABLE public.videos 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop the old overly permissive policies first
DROP POLICY IF EXISTS "Only authenticated users can delete videos" ON public.videos;
DROP POLICY IF EXISTS "Only authenticated users can update videos" ON public.videos;
DROP POLICY IF EXISTS "Anyone can upload videos" ON public.videos;

-- Create secure ownership-based policies
-- For existing videos without user_id, only allow operations if user is authenticated
-- New videos must have user_id set
CREATE POLICY "Users can only delete their own videos" 
ON public.videos 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can only update their own videos" 
ON public.videos 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Authenticated users can insert videos with user_id" 
ON public.videos 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id AND user_id IS NOT NULL);

-- Keep the public read access (existing policy remains)