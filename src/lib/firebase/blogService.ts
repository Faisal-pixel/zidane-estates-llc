import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { BLOGS_COLLECTION_NAME, db } from '.'

export const blogService = () => {
    const handleLikeBlog = async (blogId: string) => {
        try {
            const blogRef = doc(db, BLOGS_COLLECTION_NAME, blogId)
            const blogDoc = await getDoc(blogRef)

            const currentLikes = blogDoc.data()?.likes || 0

            await updateDoc(blogRef, { likes: currentLikes + 1 })
        } catch (error) {
            console.error('Error liking blog:', error)
        }
    }

    const handleUnLikeBlog = async (blogId: string) => {
        try {
            const blogRef = doc(db, BLOGS_COLLECTION_NAME, blogId)
            const blogDoc = await getDoc(blogRef)

            const currentLikes = blogDoc.data()?.likes || 1

            await updateDoc(blogRef, { likes: currentLikes - 1 })
        } catch (error) {
            console.error('Error liking blog:', error)
        }
    }

    const handleIncreaseView = async (blogId: string) => {
        try {
            const blogRef = doc(db, BLOGS_COLLECTION_NAME, blogId)
            const blogDoc = await getDoc(blogRef)

            const currentViews = blogDoc.data()?.views || 0

            await updateDoc(blogRef, { views: currentViews + 1 })
        } catch (error) {
            console.error('Error Increasing View :', error)
        }
    }

    return {
        handleLikeBlog,
        handleUnLikeBlog,
        handleIncreaseView,
    }
}
