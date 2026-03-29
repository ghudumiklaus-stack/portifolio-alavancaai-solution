import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import "./SocialCards.css";

export default function SocialCards() {
  return (
    <div className="social-card-container mt-6">
      <div className="card">
        <span>Redes</span>
        <a
          href="https://www.instagram.com/alavancaai.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/alavancaia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/5511997529072"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@alavancaia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
