import { MessageCircle, BookIcon, MessageCircleCheck, Globe, Camera, type LucideIcon } from "lucide-react";

export interface SocialLink {
  id: 'whatsapp' | 'facebook' | 'messenger' | 'website' | 'instagram';
  name: string; // Texto largo para /pagina_facebook
  shortName: string; // Texto corto para la sección de Contacto
  actionText: string; // Texto de acción para la sección de Contacto
  url: string;
  icon: LucideIcon;
  color: string; // Clase de color de texto para Tailwind
  colorHex: string; // Valor hexadecimal para construir otros estilos
  rgbColor: string; // "r, g, b"
}

const socialLinks: Record<SocialLink['id'], SocialLink> = {
  facebook: {
    id: 'facebook',
    name: "Facebook",
    shortName: "FACEBOOK",
    actionText: "Visítanos en",
    url: "https://www.facebook.com/profile.php?id=61576431586635",
    icon: BookIcon,
    color: "text-[#1877F2]",
    colorHex: "#1877F2",
    rgbColor: "24, 119, 242",
  },
  whatsapp: {
    id: 'whatsapp',
    name: "WhatsApp",
    shortName: "WHATSAPP",
    actionText: "Escríbenos por",
    url: "https://wa.me/525584266211",
    icon: MessageCircle,
    color: "text-[#25D366]",
    colorHex: "#25D366",
    rgbColor: "37, 211, 102",
  },
  messenger: {
    id: 'messenger',
    name: "Messenger",
    shortName: "MESSENGER",
    actionText: "Escríbenos por",
    url: "https://m.me/61576431586635",
    icon: MessageCircleCheck,
    color: "text-[#00B2FF]",
    colorHex: "#00B2FF",
    rgbColor: "0, 178, 255",
  },
  website: {
    id: 'website',
    name: "Sitio Web",
    shortName: "SITIO WEB",
    actionText: "Explora nuestro",
    url: "/",
    icon: Globe,
    color: "text-fucsia-lab",
    colorHex: "#e61c8c", // Asumo que fucsia-lab es rgb(230, 28, 140)
    rgbColor: "230, 28, 140",
  },
  instagram: {
    id: 'instagram',
    name: "Instagram",
    shortName: "INSTAGRAM",
    actionText: "Síguenos en",
    url: "https://www.instagram.com/syntaxislab.dev?igsh=MXRrczA1anljdHk5OA%3D%3D",
    icon: Camera,
    color: "text-[#E1306C]",
    colorHex: "#E1306C",
    rgbColor: "225, 48, 108",
  }
};

// Exportamos los enlaces en el orden que necesita cada componente
export const allLinksPageLinks = [
  socialLinks.facebook,
  socialLinks.instagram,
  socialLinks.whatsapp,
  socialLinks.messenger,
  socialLinks.website
];

export const contactPageLinks = [
  socialLinks.whatsapp,
  socialLinks.facebook,
  socialLinks.instagram,
  socialLinks.messenger
];
