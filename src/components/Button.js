import PropTypes from "prop-types";
/* onClick will be passed from Header.js as a prop, se we have to catch it here */
const Button = ({ color, text, onClick}) => {
      return (
              // onClick will call arg onClick and it'll get sent up to Header or wherever we embbed the btn
            <button
                  onClick={onClick}
                  style={{ backgroundColor: color }}
                  className="btn"
            >
                  {text}
            </button>
      );
};

Button.defaulProps = {
      color: "steelblue",
};

Button.propTypes = {
      tex: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
};

export default Button;
