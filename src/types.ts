import { StaticImageData } from "next/image";

export type LCard = {
    imageUrl: string | StaticImageData;
    cardTopic: string;
    cardDescription: string;
    numberOfViews: number;
    alt: string;
    
}