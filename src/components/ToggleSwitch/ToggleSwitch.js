import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const {Germ} = useContext(StyleContext);
  
  const [isChecked, setChecked] = useState(!Germ);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={Germ}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{!isChecked ? emoji("German") : emoji("English")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
