import React, { InputHTMLAttributes } from 'react'

type InputProps = {
    label: string
    id: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ label, id, placeholder, value, onChange, ...others }) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="text-lg font-semibold text-gray-200 mb-2">
                {label}
            </label>
            <input
                type="text"
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

export default Input
