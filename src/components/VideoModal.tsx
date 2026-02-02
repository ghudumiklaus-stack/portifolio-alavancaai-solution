import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: string | number;
    title: string;
    author: string;
    video_url: string;
    thumbnail_url?: string;
    description?: string;
  } | null;
}

const VideoModal = ({ isOpen, onClose, video }: VideoModalProps) => {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <div className="aspect-video w-full">
            {video.video_url && video.video_url !== "#" ? (
              <video
                controls
                autoPlay
                className="w-full h-full rounded-lg"
                poster={video.thumbnail_url}
              >
                <source src={video.video_url} type="video/mp4" />
                <source src={video.video_url} type="video/webm" />
                <source src={video.video_url} type="video/ogg" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center rounded-lg">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl font-poppins">Vídeo em breve</p>
                  <p className="text-sm text-gray-300">Este é um vídeo de exemplo</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-black text-white">
            <h2 className="font-poppins font-bold text-2xl mb-2">{video.title}</h2>
            <p className="font-poppins text-gray-300 mb-4">por {video.author}</p>
            {video.description && (
              <p className="font-poppins text-gray-200 text-sm leading-relaxed">
                {video.description}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;