import PropTypes from "prop-types";

const stylesInput ='bg-white text-black-semi text-base block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

const TextInput = ({ nameLabel, value, name, handleChange, placeholder, style }) => {
  return(          
  <div className="mb-2">
    <label htmlFor="value" className="block text-lg font-medium text-primary">
      {nameLabel}
    </label>
    <input
      id={name}
      name={name}
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      required
      className={`${stylesInput} ${style}`}
    />
  </div>)
}

TextInput.propTypes = {
  style: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TextInput;