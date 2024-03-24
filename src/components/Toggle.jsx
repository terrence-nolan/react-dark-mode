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
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}