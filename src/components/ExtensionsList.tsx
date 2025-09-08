
import '../pages/ExtensionsPage.css'
import ExtensionsCard from './ExtensionsCard'
import { useState } from 'react'
import type { Extension } from '../data/types'

interface ExtensionsListProps {
    data: Extension[];
}

const ExtensionsList = (data: ExtensionsListProps) => {
  const [extensions, setExtensions] = useState<Extension[]>(data.data);

  function filterActive() {
    const activeExtensions = data.data.filter(extension => extension.isActive);
    setExtensions(activeExtensions);
  }

  function filterInactive() {
    const inactiveExtensions = data.data.filter(extension => !extension.isActive);
    setExtensions(inactiveExtensions);
  }

  function showAll() {
    setExtensions(data.data);
  }

  function removeExtension(name: string) {
    setExtensions((prevExtensions) => prevExtensions.filter(extension => extension.name !== name));
  }

  return (
    <>
    <header className="extensionsHeader-container">
        <h2>Extensions</h2>
        <div className="flex-row">
            <button 
              className="extensionsHeader-button"
              onClick={showAll}>
                All
            </button>
            <button 
              className="extensionsHeader-button"
              onClick={filterActive}>
                Active
            </button>
            <button 
              className="extensionsHeader-button"
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