import "./Toggle.css";

export const Toggle = ({ hangleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={hangleChange}
                checked={isChecked}
            />
            <label htmlFor="check">{isChecked ? "Light Mode" : "Dark Mode"}</label>
        </div>
    )
}