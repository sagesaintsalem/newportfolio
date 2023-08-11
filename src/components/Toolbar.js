import ThemePicker from "./ThemePicker";
import '../styles/Toolbar.css';

const Toolbar = (props) => {
    const toolbarSetter = props.setter
    const toolbarNewTheme = props.newTheme

    return (
        <div className="toolbar">
            <h1>Rita Toussaint</h1>
            <ThemePicker setter={toolbarSetter} newTheme={toolbarNewTheme} />
        </div>
    )
}

export default Toolbar;