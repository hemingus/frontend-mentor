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
      <div className="extensions-card-top-section">
        <img src={logo} alt={`${name} logo`} className="extension-logo" />
        <div className="extensions-card-text-section">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
      </div>
      <div className="extensions-card-button-section">
        <button 
          className="removeExtension-button"
          onClick={() => onRemove(name)}>
            Remove
        </button>
        <label className="switch">
          <input type="checkbox" id="toggle" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default ExtensionsCard