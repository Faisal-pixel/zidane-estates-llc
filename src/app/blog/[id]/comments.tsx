"use client";

import { formatBlogDate } from "@/app/utils/formatDate";
import { generateId } from "@/app/utils/generateId";
import InViewWrapper from "@/app/utils/InViewWrapper";
import TextArea from "@/components/form/TextArea";
import Login from "@/components/Login";
import Modal from "@/components/Modal";
import { BLOGS_COLLECTION_NAME, db } from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Blog, Comment } from "../types";

export default function CommentCompononent({ blog }: { blog: Blog }) {
  const { currentUser } = getAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(blog.comments ?? []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const closeModal = () => {
    setOpenAuthModal(false);
  };

  const completedAuthentication = () => {
    setOpenAuthModal(false);

    const redirectUrl = localStorage.getItem("redirect-path");

    if (redirectUrl) {
      router.push(redirectUrl);
      localStorage.removeItem("redirect-path");
    }
  };

  const handleCommentSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!currentUser) {
      localStorage.setItem("redirect-path", pathname);
      return setOpenAuthModal(true);
    }

    setPublishing(true);

    if (comment.trim() === "" || !currentUser) return;

    try {
      const blogRef = doc(db, BLOGS_COLLECTION_NAME, blog.id);

      const blogDoc = await getDoc(blogRef);

      const currentComments = blogDoc.data()?.comments || [];

      const payload: Comment = {
        id: generateId(),
        userId: currentUser?.uid ?? undefined,
        photoURL: currentUser?.photoURL ?? undefined,
        content: comment,
        userName: currentUser.displayName || "Guest",
        timestamp: new Date().toISOString(),
      };

      await updateDoc(blogRef, { comments: [...currentComments, payload] });
      setComment("");

      setComments([...comments, payload]);
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setPublishing(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleDiscard = () => {
    setComment("");
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={openAuthModal}
        onClose={closeModal}
        modalOverlayClassname="!bg-opacity-100 !bg-white"
        modalClassName="!bg-white max-w-sm "
      >
        <Login closeModal={completedAuthentication} />
      </Modal>

      <InViewWrapper
        className={`border-animate border-bottom pb-6`}
        style={{ "--border-color": "#6B7280" }}
      >
        <div className="flex items-center justify-between border-b border-b-gray-300 pb-3">
          <h1 className="font-light text-[#343434] tracking-wide text-base">
            {blog.comments.length} Comments
          </h1>
          {currentUser && currentUser.photoURL && (
            <Image
              src={currentUser.photoURL}
              alt="Profie Photo"
              width={30}
              className="rounded-full"
              height={30}
            />
          )}
        </div>
      </InViewWrapper>

      <div className="mt-5">
        <form className="flex flex-col" onSubmit={handleCommentSubmit}>
          <TextArea
            label=""
            id="comment"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={comment.trim() ? 3 : 1}
            textAreaClassName="border-b-gray-300 hover:border-[#343434] placeholder:text-[#343434]  "
          />

          {currentUser && (
            <div className="text-sm flex items-center justify-between gap-4">
              <div className="flex gap-4 items-center">
                {currentUser.photoURL && (
                  <Image
                    src={currentUser.photoURL}
                    alt="Profie Photo"
                    width={30}
                    className="rounded-full"
                    height={30}
                  />
                )}
                Commenting as {currentUser.displayName}
              </div>

              <div className="flex items-center gap-4">
                <button
                  disabled={!comment.trim() || publishing}
                  onClick={handleCancel}
                  className=" text-primary py-2 px-4 hover:opacity-70 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  disabled={!comment.trim() || publishing}
                  type="submit"
                  className={`bg-primary text-white py-[6px] px-4 hover:bg-opacity-25 disabled:bg-[rgba(217,217,217,0.5)] disabled:pointer-events-none disabled:cursor-default`}
                >
                  {publishing ? "Publishing..." : "Publish"}
                </button>
              </div>
            </div>
          )}

          {!currentUser && (
            <div className="text-sm flex items-center justify-end gap-4">
              <button
                disabled={!comment.trim() || publishing}
                onClick={handleCancel}
                className=" text-primary py-2 px-4 hover:opacity-70 cursor-pointer"
              >
                Cancel
              </button>

              <button
                disabled={!comment.trim() || publishing}
                type="submit"
                className={`bg-primary text-white py-[6px] px-4 hover:bg-opacity-25 disabled:bg-[rgba(217,217,217,0.5)] disabled:pointer-events-none disabled:cursor-default`}
              >
                {publishing ? "Publishing..." : "Publish"}
              </button>
            </div>
          )}
        </form>

        <div className="mt-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 p-2 rounded flex items-start gap-4"
            >
              {comment.photoURL && (
                <Image
                  src={comment.photoURL}
                  alt="Profie Photo"
                  width={30}
                  className="rounded-full"
                  height={30}
                />
              )}

              {!comment.photoURL && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-9 p-2 bg-gray-500 text-gray-300 rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              <div className="text-sm">
                <p className="text-white">{comment.userName}</p>
                <p>{formatBlogDate(comment?.timestamp).formattedDate}</p>

                <p className="text-white mt-4">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to cancel?
            </h2>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleDiscard}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Discard
              </button>
              <button
                onClick={handleModalClose}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
