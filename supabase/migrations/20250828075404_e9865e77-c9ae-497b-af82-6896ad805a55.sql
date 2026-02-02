-- Create policy to allow public video uploads
CREATE POLICY "Allow public video uploads" 
ON public.videos 
FOR INSERT 
WITH CHECK (user_id IS NULL);

-- Also update existing policies to be more permissive for public content
DROP POLICY IF EXISTS "Authenticated users can insert videos with user_id" ON public.videos;

-- Create new insert policy that allows both authenticated and public uploads
CREATE POLICY "Allow video uploads for authenticated and public users" 
ON public.videos 
FOR INSERT 
WITH CHECK (
  (auth.uid() = user_id AND user_id IS NOT NULL) OR 
  (user_id IS NULL)
);