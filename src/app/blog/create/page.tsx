"use client";
import InViewWrapper from "@/app/utils/InViewWrapper";
import ImageUpload from "@/components/form/ImageUpload";
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
import { BLOGS_COLLECTION_NAME, db } from "@/lib/firebase";
import { uploadImage } from "@/lib/firebase/uploadImage";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BlogForm {
  title: string;
  image: File | null;
  introductory: string;
  content: string;
}

function Testing() {
  const router = useRouter();

  const [formError, setFormError] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);

  const [blogForm, setBlogForm] = useState<BlogForm>({
    content: "",
    image: null,
    introductory: "",
    title: "",
  });

  /* eslint-disable @typescript-eslint/no-explicit-any  */
  const handleChangeValue = (key: keyof BlogForm, value: any) => {
    setBlogForm({ ...blogForm, [key]: value });
  };

  const handleAddImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || e.target.files?.length <= 0) return;

    const imageFile = e.target.files[0];

    setBlogForm({ ...blogForm, image: imageFile });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!blogForm.image)
      return setFormError("Image not Found, Please Re-Upload");

    setSubmitting(true);

    try {
      const imageUrl = await uploadImage(blogForm.image);

      if (!imageUrl)
        return setFormError("Could not Upload Image, Please Retry!");

      const newBlogPayload = {
        title: blogForm.title,
        image: imageUrl,
        introductory: blogForm.introductory,
        content: blogForm.content,
        likes: 0,
        views: 0,
        comments: [],
        timestamp: new Date().toISOString(),
      };

      await addDoc(collection(db, BLOGS_COLLECTION_NAME), newBlogPayload);

      router.push("/blog");
    } catch (error) {
      console.error("Error adding blog:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <head>
        <title>Create Blog | Zidane Estates LLC.</title>
      </head>

      <div className="px-5 mt-8 mb-16 md:mt-24 md:w-[65%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Create New Blog</h1>

          <button
            onClick={() => router.push("/blog")}
            className="border border-primary text-primary bg-none outline-none px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
          >
            Go Back
          </button>
        </div>
        <div className="border border-gray-500 mt-10 md:p-10 ">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              required
              label="Blog Title"
              id="title"
              placeholder="Enter Blog title"
              value={blogForm.title}
              onChange={(e) => handleChangeValue("title", e.target.value)}
            />
            <TextArea
              rows={8}
              required
              label="Blog Introductory Description"
              id="description"
              placeholder="Enter Blog Description/Introduction"
              value={blogForm.introductory}
              onChange={(e) =>
                handleChangeValue("introductory", e.target.value)
              }
            />
            <TextArea
              required
              label="Blog Content"
              id="content"
              placeholder="Enter Blog Content"
              value={blogForm.content}
              onChange={(e) => handleChangeValue("content", e.target.value)}
            />

            {/* eslint-disable @typescript-eslint/no-explicit-any  */}
            <ImageUpload
              required
              label="Blog Image"
              value={blogForm.image as any}
              onChange={handleAddImage}
              onHandleDelete={() => setBlogForm({ ...blogForm, image: null })}
            />

            {formError && (
              <p className="text-sm italic text-red-400">{formError}</p>
            )}

            <InViewWrapper
              className={`border-animate border-top  mt-7`}
              style={{ "--border-color": "#6B7280" }}
            >
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="border border-primary text-primary bg-none outline-none px-6 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </InViewWrapper>
          </form>
        </div>
      </div>
    </>
  );
}

export default Testing;
