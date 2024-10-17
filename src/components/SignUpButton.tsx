'use client'

import { Auth, getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import Login from './Login'
import Modal from './Modal'

function SignUpButton() {
    const auth = getAuth()

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)

    const [authUser, setAuthUser] = useState<Auth>(auth)

    return (
        <>
            {authUser.currentUser && (
                <button
                    onClick={() => {
                        signOut(auth)
                        setAuthUser({ ...authUser, currentUser: null })
                    }}
                    className="border border-primary text-primary bg-none outline-none px-6 text-sm py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-black"
                >
                    Signout
                </button>
            )}

            {!authUser.currentUser && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="border border-primary cursor-pointer text-primary bg-none outline-none px-6 py-2 text-sm transition-all  duration-300 ease-in-out hover:bg-primary hover:text-white"
                >
                    Log in / Sign up
                </button>
            )}

            <Modal isOpen={isOpen} onClose={closeModal} modalOverlayClassname='!bg-opacity-100' modalClassName='!bg-black'>
                <Login closeModal={closeModal} />
            </Modal>
        </>
    )
}

export default SignUpButton
