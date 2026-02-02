-- Create videos table for storing uploaded videos
CREATE TABLE public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category TEXT DEFAULT 'general',
  author TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a portfolio site)
CREATE POLICY "Videos are viewable by everyone" 
ON public.videos 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can upload videos" 
ON public.videos 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update videos" 
ON public.videos 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete videos" 
ON public.videos 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_videos_updated_at
BEFORE UPDATE ON public.videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public) VALUES ('videos', 'videos', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('thumbnails', 'thumbnails', true);

-- Create policies for video uploads
CREATE POLICY "Anyone can view videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'videos');

CREATE POLICY "Anyone can upload videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'videos');

CREATE POLICY "Anyone can update videos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'videos');

CREATE POLICY "Anyone can delete videos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'videos');

-- Create policies for thumbnail uploads
CREATE POLICY "Anyone can view thumbnails" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'thumbnails');

CREATE POLICY "Anyone can upload thumbnails" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'thumbnails');

CREATE POLICY "Anyone can update thumbnails" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'thumbnails');

CREATE POLICY "Anyone can delete thumbnails" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'thumbnails');