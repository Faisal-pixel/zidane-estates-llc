
function WrapperContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-[90%] max-w-[1700px] mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default WrapperContainer