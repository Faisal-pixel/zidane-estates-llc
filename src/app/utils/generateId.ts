export const generateId = (length = 11): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result
}

export const handleUserId = () => {
    if (typeof window === "undefined") return

    const id = localStorage.getItem('nextgen-user-id')

    if (id) return

    return localStorage.setItem('nextgen-user-id', generateId())
}
