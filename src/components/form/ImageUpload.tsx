import React, { InputHTMLAttributes } from 'react'

type ImageUploadProps = {
    label: string
    value: File | null
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onHandleDelete: () => void
} & InputHTMLAttributes<HTMLInputElement>

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, label, value, onHandleDelete, ...others }) => {
    return (
        <div className="relative">
            <span className="text-lg font-semibold text-gray-200">{label}</span>

            <label className="w-full h-[200px] mb-4 mt-2 flex flex-col items-center border border-gray-500 justify-center cursor-pointer focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-transparent">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    {value && <p className="text-gray-500">{value.name}</p>}

                    {!value && (
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-gray-500 hover:text-gray-700">Click here to upload</p>
                        </div>
                    )}
                </div>

                {!value && <input type="file" name="uploadimage" accept="image/*" className="w-0 h-0" onChange={onChange} {...others} />}
            </label>

            {value && (
                <button
                    type="button"
                    onClick={onHandleDelete}
                    className="border border-red-500 text-red-600 absolute bg-none right-5 bottom-7 outline-none px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-red-500 hover:text-black"
                >
                    Delete
                </button>
            )}
        </div>
    )
}

export default ImageUpload
