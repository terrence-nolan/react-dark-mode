import "./Toggle.css";

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">{isChecked ? "Light Mode" : "Dark Mode"}</label>
        </div>
    )
}