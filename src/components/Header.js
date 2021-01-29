import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
      return (
            <header className="header">
                  <h1>{title}</h1>
                  {/*since it's a component, it'll not alwayshave the same click */}
                  {/* showAdd means it's showing the form, so when true it has to be red(Close) */}
                  <Button
                        color={showAdd ? "red" : "green"}
                        text={showAdd ? "Close" : "Add"}
                        onClick={onAdd}
                  />
            </header>
      );
};

Header.defaultProps = {
      title: "Task Tracker",
};

Header.propTypes = {
      title: PropTypes.string.isRequired,
};

const headingStyle = {
      color: "red",
      backgroundColor: "black",
};

export default Header;
