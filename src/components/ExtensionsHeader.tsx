import '../pages/ExtensionsPage.css'

interface ExtensionsHeaderProps {
  currentTheme: string;
  toggleTheme: () => void;
}



export default function({currentTheme, toggleTheme}:ExtensionsHeaderProps) {
  const iconSun = "./assets/images/icon-sun.svg"
  const iconMoon = "./assets/images/icon-moon.svg"

  return (
    <div className="extensionsHeader-container">
        <div className="flex-row-between extensionsHeader-content">            
          <img src="./assets/images/logo.svg" alt="Extensions Icon"/>      
          <button
            className="theme-toggle-button center-content"
            onClick={toggleTheme}>
            <img src={currentTheme === "light" ? iconMoon : iconSun}/>
          </button>
        </div>
    </div>
  )
}