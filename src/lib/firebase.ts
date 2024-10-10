// Import the functions you need from the SDKs you need

import { Blog } from "@/app/blog/types";
import { TUser } from "@/types";
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDJ9mdYyIepPnfSUDiZXs6KcAed8ml750g",

  authDomain: "zidane-estates.firebaseapp.com",

  projectId: "zidane-estates",

  storageBucket: "zidane-estates.appspot.com",

  messagingSenderId: "96678935100",

  appId: "1:96678935100:web:b9cfac54dcfd0de74e6139"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// FIRESTORE

const db = getFirestore(app);

// blog collection
// blog: 
// userId, dateCreated, readingTime, blogTopic, blogText, blogImage, blogUrls: {facebook, x, linkedIn, }, noOfViews, noOfComments, 

export const getBlogFromFirestore = async (blogId: string) => {
    if(!blogId) return;
    const blogDocRef = doc(db, "blogs", blogId);
    const blogSnapshot = await getDoc(blogDocRef);
    
    if(blogSnapshot.exists()) {
        return blogSnapshot.data() as Blog;
    } else {
        return null;
    }
}

export const getUserFromFirestore = async (userId: string) => {
    if(!userId) return;

    const userDocRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userDocRef);

    if(userSnapshot.exists()) {
        return userSnapshot.data() as TUser;
    } else return null;
}

export const getAllBlogDocuments = async () => {
    const q = query(collection(db, "blogs"));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as Blog);
}

export const addBlogToFirestore = async (blog: Blog) => {
    if(!blog) return;
    const blogRef = doc(db, "blogs", blog.id);
    await setDoc(blogRef, blog, { merge: true });
}


// STORAGE

const storage = getStorage(app)

export const uploadImage = (imageFile: File): Promise<string | Error> => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imageFile)

        uploadTask.on(
            'state_changed',
            () => {},
            (error) => {
                reject(error)
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(downloadURL)
                } catch (error) {
                    reject(error)
                }
            },
        )
    })
}