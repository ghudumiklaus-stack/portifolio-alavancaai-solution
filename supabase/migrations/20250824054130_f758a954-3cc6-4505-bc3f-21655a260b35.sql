-- Temporary fix: Allow anonymous uploads while maintaining some security
-- This restores upload functionality but with a trade-off on security

-- Drop the restrictive authenticated-only policies
DROP POLICY IF EXISTS "Only authenticated users can upload videos" ON public.videos;
DROP POLICY IF EXISTS "Only authenticated users can update videos" ON public.videos;
DROP POLICY IF EXISTS "Only authenticated users can delete videos" ON public.videos;

-- Create new policies that allow uploads but restrict updates/deletes
CREATE POLICY "Anyone can upload videos" 
ON public.videos 
FOR INSERT 
WITH CHECK (true);

-- Only allow updates/deletes for authenticated users (when you implement auth later)
CREATE POLICY "Only authenticated users can update videos" 
ON public.videos 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete videos" 
ON public.videos 
FOR DELETE 
TO authenticated
USING (true);