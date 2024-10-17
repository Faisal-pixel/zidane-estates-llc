import { StaticImageData } from "next/image";

export interface Blog {
  id: string;
  title: string;
  image: string | StaticImageData;
  introductory: string;
  content: string;
  likes: number;
  views: number;
  comments: Comment[];
  timestamp: string;
}

export interface Comment {
  id: string;
  userId?: string;
  photoURL?: string;
  userName: string;
  content: string;
  timestamp: string;
}
