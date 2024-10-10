import { StaticImageData } from "next/image"

export type Blog = {
    id: string
    userId: string
    blogTopic: string
    blogContents1: string
    blogContents2: string
    blogImage: string | StaticImageData
    blogUrls: blogUrls
    readingTime: string
    likes: number
    views: number
    comments: Comment[]
    timestamp: string
}

type blogUrls = {
    facebook: string
    linkedIn: string
    x: string
}