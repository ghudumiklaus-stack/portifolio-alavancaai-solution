import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import VideoModal from "@/components/VideoModal";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchVideos();
  }, []);

  // Dados de exemplo caso o banco esteja vazio
  const mockVideos = [
    {
      id: 1,
      title: "Trafego Pago",
      author: "Fernando B Cerqueira",
      category: "featured",
      thumbnail_url: "/api/placeholder/600/400",
      video_url: "#",
      description: "Curso completo de tráfego pago",
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      title: "Marketing Digital",
      author: "Fernando B Cerqueira", 
      category: "featured",
      thumbnail_url: "/api/placeholder/600/400",
      video_url: "#",
      description: "Estratégias de marketing digital",
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      author: "Fernando B Cerqueira",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Sistema de analytics avançado",
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      title: "AI Assistant Bot",
      author: "Fernando B Cerqueira",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Chatbot inteligente",
      created_at: new Date().toISOString()
    },
    {
      id: 5,
      title: "E-commerce Platform",
      author: "Borges Midias",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Plataforma de e-commerce completa",
      created_at: new Date().toISOString()
    },
    {
      id: 6,
      title: "Mobile App Design",
      author: "Fernando B Cerqueira",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Design de aplicativo mobile",
      created_at: new Date().toISOString()
    },
    {
      id: 7,
      title: "Cloud Infrastructure",
      author: "Fernando B Cerqueira",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Infraestrutura em nuvem",
      created_at: new Date().toISOString()
    },
    {
      id: 8,
      title: "Blockchain Solution",
      author: "Fernando B Cerqueira",
      category: "popular",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Solução blockchain",
      created_at: new Date().toISOString()
    },
    {
      id: 9,
      title: "React Performance",
      author: "Marcelo Silva",
      category: "recent",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Otimização de performance React",
      created_at: new Date().toISOString()
    },
    {
      id: 10,
      title: "Node.js Best Practices",
      author: "Marcelo Silva",
      category: "recent",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Melhores práticas Node.js",
      created_at: new Date().toISOString()
    },
    {
      id: 11,
      title: "CSS Grid Mastery",
      author: "Fernando B Cerqueira",
      category: "recent",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Dominando CSS Grid",
      created_at: new Date().toISOString()
    },
    {
      id: 12,
      title: "TypeScript Deep Dive",
      author: "Fernando B Cerqueira",
      category: "recent",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "TypeScript avançado",
      created_at: new Date().toISOString()
    },
    {
      id: 13,
      title: "Influencer Marketing",
      author: "Influencer Pro",
      category: "influencers",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Estratégias de influencer marketing",
      created_at: new Date().toISOString()
    },
    {
      id: 14,
      title: "Content Creation",
      author: "Creator Studio",
      category: "influencers",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Criação de conteúdo profissional",
      created_at: new Date().toISOString()
    },
    {
      id: 15,
      title: "Social Media Strategy",
      author: "Social Expert",
      category: "influencers",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Estratégia para redes sociais",
      created_at: new Date().toISOString()
    },
    {
      id: 16,
      title: "Brand Partnership",
      author: "Brand Manager",
      category: "influencers",
      thumbnail_url: "/api/placeholder/400/300",
      video_url: "#",
      description: "Parcerias de marca",
      created_at: new Date().toISOString()
    }
  ];

  const fetchVideos = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Combina dados do banco com dados de exemplo para preencher as seções
      const dbVideos = data || [];
      const allVideos = [...dbVideos, ...mockVideos];
      
      // Remove duplicatas baseado no título
      const uniqueVideos = allVideos.filter((video, index, self) => 
        index === self.findIndex(v => v.title === video.title)
      );
      
      setVideos(uniqueVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Em caso de erro, usa dados de exemplo
      setVideos(mockVideos);
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedVideos = () => videos.filter(video => video.category === 'featured').slice(0, 3);
  const getPopularVideos = () => videos.filter(video => video.category === 'popular').slice(0, 6);
  const getRecentVideos = () => videos.filter(video => video.category === 'recent').slice(0, 4);
  const getInfluencerVideos = () => videos.filter(video => video.category === 'influencers').slice(0, 4);

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = async (videoId, event) => {
    event.stopPropagation(); // Prevent opening video modal
    
    try {
      const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', videoId);

      if (error) throw error;

      // Update local state
      setVideos(videos.filter(v => v.id !== videoId));
      
      toast({
        title: "Sucesso!",
        description: "Vídeo removido com sucesso!",
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: "Erro",
        description: "Erro ao remover vídeo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-black font-poppins text-white">
      <Header />
      <main className="pt-32">
        {/* Hero Header Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Vídeos de IA que Transformam sua Visão
            </h1>
            <p className="font-poppins text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Explore nosso portfólio e veja como a Inteligência Artificial pode criar vídeos institucionais, 
              de vendas e até mesmo influenciadores digitais para sua empresa.
            </p>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-poppins font-bold text-3xl text-white">
                Tendências
              </h1>
              {/* Botão transparente - só admins sabem que está aqui */}
              <Button 
                className="bg-transparent hover:bg-transparent text-transparent font-poppins font-medium flex items-center gap-2 border-none shadow-none"
                size="lg"
                onClick={() => navigate('/upload')}
              >
                <Upload className="w-5 h-5 opacity-0" />
                Upload de Vídeo
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {getFeaturedVideos().map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handlePlayVideo(video)}
                >
                  {/* Botão de remoção transparente - só admins sabem que está aqui */}
                  {typeof video.id === 'string' && (
                    <button
                      onClick={(e) => handleDeleteVideo(video.id, e)}
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200"
                      title="Remover vídeo"
                    >
                      <X className="w-3 h-3 text-transparent" />
                    </button>
                  )}
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnail_url && !video.thumbnail_url.includes("/api/placeholder/") ? video.thumbnail_url : undefined} 
                      alt={video.title}
                      className={`w-full h-full object-cover ${(!video.thumbnail_url || video.thumbnail_url.includes("/api/placeholder/")) ? 'hidden' : ''}`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className={`w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center ${(video.thumbnail_url && !video.thumbnail_url.includes("/api/placeholder/")) ? 'hidden' : ''}`}>
                      <div className="text-6xl opacity-30">🎬</div>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-purple-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <span className="text-white text-lg ml-1">▶</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="font-poppins font-semibold text-xl text-white mb-1 animate-fade-in">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-sm animate-fade-in">
                        por {video.author}
                      </p>
                      <p className="font-poppins text-gray-400 text-xs mt-1 line-clamp-2 animate-fade-in">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most Liked Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-poppins font-bold text-2xl text-white">
                Populares
              </h2>
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white font-poppins"
              >
                Ver todos
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {getPopularVideos().map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handlePlayVideo(video)}
                >
                  {/* Botão de remoção transparente - só admins sabem que está aqui */}
                  {typeof video.id === 'string' && (
                    <button
                      onClick={(e) => handleDeleteVideo(video.id, e)}
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200"
                      title="Remover vídeo"
                    >
                      <X className="w-3 h-3 text-transparent" />
                    </button>
                  )}
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnail_url && !video.thumbnail_url.includes("/api/placeholder/") ? video.thumbnail_url : undefined} 
                      alt={video.title}
                      className={`w-full h-full object-cover ${(!video.thumbnail_url || video.thumbnail_url.includes("/api/placeholder/")) ? 'hidden' : ''}`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className={`w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center ${(video.thumbnail_url && !video.thumbnail_url.includes("/api/placeholder/")) ? 'hidden' : ''}`}>
                      <div className="text-4xl opacity-30">🎬</div>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-purple-600/90 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm ml-0.5">▶</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="font-poppins font-semibold text-white text-sm mb-1 animate-fade-in">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-xs animate-fade-in">
                        {video.author}
                      </p>
                      <p className="font-poppins text-gray-400 text-xs mt-1 line-clamp-2 animate-fade-in">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Videos Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-poppins font-bold text-2xl text-white">
                Recentes
              </h2>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white"
                  size="sm"
                >
                  ◀
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white"
                  size="sm"
                >
                  ▶
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {getRecentVideos().map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handlePlayVideo(video)}
                >
                  {/* Botão de remoção transparente - só admins sabem que está aqui */}
                  {typeof video.id === 'string' && (
                    <button
                      onClick={(e) => handleDeleteVideo(video.id, e)}
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200"
                      title="Remover vídeo"
                    >
                      <X className="w-3 h-3 text-transparent" />
                    </button>
                  )}
                  <div className="aspect-video relative">
                    {video.thumbnail_url && video.thumbnail_url !== "/api/placeholder/400/300" ? (
                      <img 
                        src={video.thumbnail_url} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                        <div className="text-3xl opacity-30">🎬</div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-purple-600/90 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs ml-0.5">▶</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="font-poppins font-medium text-white text-xs mb-1 animate-fade-in">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-xs animate-fade-in">
                        {video.author}
                      </p>
                      <p className="font-poppins text-gray-400 text-xs mt-1 line-clamp-1 animate-fade-in">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Influencers Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-poppins font-bold text-2xl text-white">
                Influencers - Contrate o Seu
              </h2>
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white font-poppins"
              >
                Ver todos
              </Button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {getInfluencerVideos().map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handlePlayVideo(video)}
                >
                  {/* Botão de remoção transparente - só admins sabem que está aqui */}
                  {typeof video.id === 'string' && (
                    <button
                      onClick={(e) => handleDeleteVideo(video.id, e)}
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200"
                      title="Remover vídeo"
                    >
                      <X className="w-3 h-3 text-transparent" />
                    </button>
                  )}
                  <div className="aspect-video relative">
                    {video.thumbnail_url && video.thumbnail_url !== "/api/placeholder/400/300" ? (
                      <img 
                        src={video.thumbnail_url} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                        <div className="text-3xl opacity-30">🎬</div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-purple-600/90 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs ml-0.5">▶</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="font-poppins font-medium text-white text-xs mb-1 animate-fade-in">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-xs animate-fade-in">
                        {video.author}
                      </p>
                      <p className="font-poppins text-gray-400 text-xs mt-1 line-clamp-1 animate-fade-in">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <VideoModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={selectedVideo}
      />
      
      <Footer />
    </div>
  );
};

export default Portfolio;