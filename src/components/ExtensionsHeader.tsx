import '../pages/ExtensionsPage.css'

const ExtensionsHeader = () => {
  return (
    <div className="extensionsHeader-container">
        <div className="flex-row-between extensionsHeader-content">            
          <img src="./assets/images/logo.svg" alt="Extensions Icon"/>      
          <button>
            <img src="./assets/images/icon-moon.svg"/>
          </button>
        </div>
    </div>
  )
}

export default ExtensionsHeader