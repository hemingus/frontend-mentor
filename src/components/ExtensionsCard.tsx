import '../pages/ExtensionsPage.css'

interface ExtensionsCardProps {
  logo: string
  name: string
  description: string
  isActive: boolean
  onRemove: (name: string) => void
}

const ExtensionsCard = ({logo, name, description, isActive, onRemove }: ExtensionsCardProps) => {
  return (
    <div className={`extensions-card ${isActive ? 'active' : ''}`}>
      <div className="flex-row">
        <img src={logo} alt={`${name} logo`} className="extension-logo" />
        <div className="flex-column">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
      </div>
      <div>
        <button 
          className="removeExtension-button"
          onClick={() => onRemove(name)}>
            Remove
        </button>
        
      </div>
    </div>
  )
}

export default ExtensionsCard