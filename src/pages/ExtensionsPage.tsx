import ExtensionsHeader from "../components/ExtensionsHeader"
import ExtensionsList from "../components/ExtensionsList"
import './ExtensionsPage.css'
import data from '../data/extensions.json'
import type { Extension } from "../data/types"

const ExtensionsPage = () => {
    const dataTyped: Extension[] = data;

    return (
    <div className="extensions-page">
        <ExtensionsHeader/>;
        <ExtensionsList data={dataTyped}/>;
    </div>
    )
}

export default ExtensionsPage