import "../App.css"

interface ListContainerProps {
    items: string[],
    remove: (index: number) => void
}

export default function ListContainer({items, remove}:ListContainerProps) {
    return (
        <ul className="items-container">
            {items.map((item, index) => {
                return <li className="card" key={index}>
                    {item}
                    <button onClick={() => remove(index)}>Remove</button>
                    </li>
            })}
        </ul>
    )
}