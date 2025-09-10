import ExtensionsHeader from "../components/ExtensionsHeader"
import ExtensionsList from "../components/ExtensionsList"
import './ExtensionsPage.css'
import data from '../data/extensions.json'
import type { Extension } from "../data/types"
import { useTheme } from "../hooks/useTheme"

const ExtensionsPage = () => {
    const dataTyped: Extension[] = data;
    const { theme, toggleTheme } = useTheme();

    return (
    <div className="extensions-page" data-theme={theme}>
        <div className="extensions-page-content">
            <ExtensionsHeader currentTheme={theme} toggleTheme={toggleTheme} />
            <ExtensionsList data={dataTyped}/>
        </div>
    </div>
    )
}

export default ExtensionsPage