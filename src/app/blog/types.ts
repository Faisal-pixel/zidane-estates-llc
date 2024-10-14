import { TComment } from "@/types"
import { StaticImageData } from "next/image"

export type Blog = {
    id: string
    authorId: string
    author: string
    blogTopic: string
    blogContents1: string
    blogContents2: string
    blogImage: StaticImageData | File | null | string
    blogUrls?: blogUrls
    readingTime?: string
    likes?: number
    views?: number
    comments?: TComment[]
    timestamp?: string
}

type blogUrls = {
    facebook: string
    linkedIn: string
    x: string
}