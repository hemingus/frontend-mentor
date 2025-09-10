import { useState } from "react"
import ListContainer from "./ListContainer"
import '../App.css'
import { useLocalStorage } from "../hooks/useLocalStorage"

export default function ControlPanel() {
    const [text, setText] = useState("")
    const [items, setItems] = useLocalStorage({key: "items", defaultValue: [] as string[]})

    function handleAddItem() {
        if (text.length > 0) {
            setItems((prevItems:string[]) => [text, ...prevItems])
            setText("")
        }
    }

    function handleRemove(index: number) {
        setItems((prevItems: string[]) => prevItems.filter((_, i) => i !== index))
    }

    return (
        <div className="app-container">
            <h1>Control Panel</h1>
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
            <ListContainer items={items} remove={handleRemove}/>
        </div>
    )
}