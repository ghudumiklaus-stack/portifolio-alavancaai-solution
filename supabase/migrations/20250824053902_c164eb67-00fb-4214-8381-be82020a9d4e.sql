-- Fix critical security vulnerability: Remove overly permissive RLS policies
-- and implement proper authentication checks

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can delete videos" ON public.videos;
DROP POLICY IF EXISTS "Anyone can update videos" ON public.videos;
DROP POLICY IF EXISTS "Anyone can upload videos" ON public.videos;

-- Keep public viewing access (this is typically desired for a video gallery)
-- The "Videos are viewable by everyone" policy already exists and is fine

-- Create secure policies that require authentication for destructive operations
CREATE POLICY "Only authenticated users can upload videos" 
ON public.videos 
FOR INSERT 
TO authenticated
WITH CHECK (true);

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