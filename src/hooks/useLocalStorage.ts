import { useState, useEffect } from "react"

interface useLocalStorageProps {
    key: string
}

export function useLocalStorage({key}:useLocalStorageProps) {
    const [storage, setStorage] = useState(() => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : []
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storage))
    }, [key, storage])

    return [storage, setStorage]
}