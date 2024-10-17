import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    // apiKey: 'AIzaSyC6Viyxm1ww8sunEer7_dD0gyw357ojVMw',
    // authDomain: 'blog-ee30d.firebaseapp.com',
    // projectId: 'blog-ee30d',
    // storageBucket: 'blog-ee30d.appspot.com',
    // messagingSenderId: '687710179832',
    // appId: '1:687710179832:web:ad0b4142f25bac94f3860d',

    apiKey: 'AIzaSyAeh9Mt6OIRsWK7UqGXjDhqFOdFD-kuE_A',
    authDomain: 'ahmad-ca641.firebaseapp.com',
    projectId: 'ahmad-ca641',
    storageBucket: 'ahmad-ca641.appspot.com',
    messagingSenderId: '818227343701',
    appId: '1:818227343701:web:10fc8b05727319162bbfdc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth()

const BLOGS_COLLECTION_NAME = 'blogs'

export { app, auth, BLOGS_COLLECTION_NAME, db, storage }
