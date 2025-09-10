
import '../pages/ExtensionsPage.css'
import ExtensionsCard from './ExtensionsCard'
import { useState } from 'react'
import type { Extension } from '../data/types'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ExtensionsListProps {
    data: Extension[];
}

const ExtensionsList = (data: ExtensionsListProps) => {
  const [extensions, setExtensions] = useLocalStorage<Extension[]>({key: "extensions", defaultValue: data.data});
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "inactive">("all");

  function filterActive() {
    const activeExtensions = data.data.filter(extension => extension.isActive);
    setExtensions(activeExtensions);
    setActiveFilter("active");
  }

  function filterInactive() {
    const inactiveExtensions = data.data.filter(extension => !extension.isActive);
    setExtensions(inactiveExtensions);
    setActiveFilter("inactive");
  }

  function showAll() {
    setExtensions(data.data);
    setActiveFilter("all");
  }

  function removeExtension(name: string) {
    setExtensions((prevExtensions) => prevExtensions.filter(extension => extension.name !== name));
  }

  return (
    <>
    <header className="flex-row-between">
        <h1>Extensions List</h1>
        <div className="flex-row">
            <button 
              className={`extensionsHeader-button ${activeFilter === "all" ? "active" : ""}`}
              onClick={showAll}>
                All
            </button>
            <button 
              className={`extensionsHeader-button ${activeFilter === "active" ? "active" : ""}`}
              onClick={filterActive}>
                Active
            </button>
            <button 
              className={`extensionsHeader-button ${activeFilter === "inactive" ? "active" : ""}`}
              onClick={filterInactive}>
                Inactive
            </button>
        </div>
    </header>
    <div className="extensionsList-container">
        {extensions.map((extension, index) => (
            <ExtensionsCard 
                key={index}
                logo={extension.logo}
                name={extension.name}
                description={extension.description}
                isActive={extension.isActive}
                onRemove={removeExtension}
            />
        ))}
    </div>
    </>
  )
}

export default ExtensionsList