export interface SectionProps {
  title: string;
  content: string;
  image: Image;
  textFirst?: boolean;
}

export interface SectionTextProps {
  title: string;
  content: string;
}

export interface SectionImageProps {
  image: Image
}

export interface Image {
  src: string;
  alt: string;
}
