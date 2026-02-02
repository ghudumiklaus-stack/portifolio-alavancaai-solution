import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload as UploadIcon, Video, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { extractVideoThumbnail } from "@/lib/videoUtils";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("general");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleVideoUpload = async () => {
    if (!videoFile || !title || !author) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios e selecione um vídeo.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      // Sanitize video file name to remove special characters
      const sanitizedVideoName = videoFile.name
        .replace(/[^a-zA-Z0-9.-]/g, '_')  // Replace special chars with underscore
        .replace(/_+/g, '_')              // Replace multiple underscores with single
        .replace(/^_|_$/g, '');           // Remove leading/trailing underscores
      
      // Upload video file
      const videoPath = `${Date.now()}-${sanitizedVideoName}`;
      const { error: videoError } = await supabase.storage
        .from('videos')
        .upload(videoPath, videoFile);

      if (videoError) throw videoError;

      // Extract thumbnail from video automatically
      let thumbnailUrl = null;
      try {
        console.log('Starting thumbnail extraction for:', videoFile.name);
        const thumbnailBlob = await extractVideoThumbnail(videoFile);
        console.log('Thumbnail extracted successfully, blob URL:', thumbnailBlob);
        
        // Convert blob URL to actual blob
        const response = await fetch(thumbnailBlob);
        const blob = await response.blob();
        console.log('Blob converted, size:', blob.size, 'type:', blob.type);
        
        // Upload auto-generated thumbnail
        const thumbnailPath = `${Date.now()}-thumbnail.jpg`;
        console.log('Uploading thumbnail to path:', thumbnailPath);
        const { error: thumbnailError } = await supabase.storage
          .from('thumbnails')
          .upload(thumbnailPath, blob);

        if (!thumbnailError) {
          const { data: thumbnailData } = supabase.storage
            .from('thumbnails')
            .getPublicUrl(thumbnailPath);
          thumbnailUrl = thumbnailData.publicUrl;
          console.log('Thumbnail uploaded successfully:', thumbnailUrl);
        } else {
          console.error('Thumbnail upload error:', thumbnailError);
        }
        
        // Clean up blob URL
        URL.revokeObjectURL(thumbnailBlob);
      } catch (thumbnailError) {
        console.error('Failed to extract thumbnail:', thumbnailError);
        // Use default placeholder if thumbnail extraction fails
        thumbnailUrl = null;
      }

      // If user uploaded custom thumbnail, use that instead
      if (thumbnailFile) {
        const customThumbnailPath = `${Date.now()}-custom-${thumbnailFile.name}`;
        const { error: customThumbnailError } = await supabase.storage
          .from('thumbnails')
          .upload(customThumbnailPath, thumbnailFile);

        if (!customThumbnailError) {
          const { data: customThumbnailData } = supabase.storage
            .from('thumbnails')
            .getPublicUrl(customThumbnailPath);
          thumbnailUrl = customThumbnailData.publicUrl;
        }
      }

      // Get video URL
      const { data: videoData } = supabase.storage
        .from('videos')
        .getPublicUrl(videoPath);

      // Save to database
      console.log('Saving video to database with thumbnail URL:', thumbnailUrl);
      const { error: dbError } = await supabase
        .from('videos')
        .insert({
          title,
          description,
          author,
          category,
          video_url: videoData.publicUrl,
          thumbnail_url: thumbnailUrl,
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      console.log('Video saved successfully to database');

      toast({
        title: "Sucesso!",
        description: "Vídeo enviado com sucesso!",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setAuthor("");
      setCategory("general");
      setVideoFile(null);
      setThumbnailFile(null);

      // Navigate back to portfolio
      navigate("/portfolio");

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Erro",
        description: "Erro ao enviar vídeo. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Portfolio
            </Button>
          </div>

          <Card className="border-border/50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <UploadIcon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-primary">Upload de Vídeo</CardTitle>
              <p className="text-muted-foreground">
                Compartilhe seu conteúdo com o mundo
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Título do Vídeo *
                </label>
                <Input
                  placeholder="Digite o título do vídeo"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Descrição
                </label>
                <textarea
                  className="w-full p-3 rounded-md border border-input bg-background text-sm"
                  rows={4}
                  placeholder="Descreva seu vídeo..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Autor/Canal *
                </label>
                <Input
                  placeholder="Nome do autor ou canal"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Categoria
                </label>
                <select
                  className="w-full p-3 rounded-md border border-input bg-background text-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="general">Geral</option>
                  <option value="featured">Em Destaque</option>
                  <option value="popular">Populares</option>
                  <option value="recent">Recentes</option>
                  <option value="influencers">Influencers</option>
                  <option value="showcase">Showcase Home</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Arquivo de Vídeo *
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <Button variant="outline" asChild>
                      <span>Selecionar Vídeo</span>
                    </Button>
                  </label>
                  {videoFile && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {videoFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Thumbnail (Opcional)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <UploadIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label htmlFor="thumbnail-upload" className="cursor-pointer">
                    <Button variant="outline" asChild>
                      <span>Selecionar Imagem</span>
                    </Button>
                  </label>
                  {thumbnailFile && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {thumbnailFile.name}
                    </p>
                  )}
                </div>
              </div>

              <Button 
                onClick={handleVideoUpload}
                disabled={uploading}
                className="w-full"
                size="lg"
              >
                {uploading ? "Enviando..." : "Enviar Vídeo"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;