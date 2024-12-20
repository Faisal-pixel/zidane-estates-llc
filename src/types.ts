import { StaticImageData } from "next/image";

export type LCard = {
    imageUrl: string | StaticImageData;
    cardTopic: string;
    cardDescription: string;
    numberOfViews: number;
    alt: string;
}

export type TUser = {
    id: string;
    name: string;
    email: string;
    blogs: []
}

export type TComment = {
    author: string;
    authorId: string;
    authorImage: string;
    dateAdded: string;
    commentContent: string;
    likes: number;
    replies: TComment[];
}