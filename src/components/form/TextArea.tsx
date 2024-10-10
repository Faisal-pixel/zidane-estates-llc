import React, { TextareaHTMLAttributes } from 'react'

type TextAreaProps = {
    label: string
    id: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    rows?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: React.FC<TextAreaProps> = ({ label, id, placeholder, value, onChange, rows, ...others }) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="text-lg font-semibold text-gray-200 mb-2">
                {label}
            </label>
            <textarea
                rows={rows ?? 10}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="bg-black text-white border transition-all duration-150 ease-in-out border-gray-500 py-3 px-4 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-transparent"
                {...others}
            />
        </div>
    )
}

export default TextArea
