import PropTypes from "prop-types";

const stylesText = "bg-white text-black-semi text-base block border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

const TextArea = ({ labelName, name, value, handleChange, placeHolder, style }) => {
  return(
    <div className="my-2">
      <label htmlFor={name} className="block text-lg font-medium text-primary">
        {labelName}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        required
        className={`${stylesText} ${style}`}
      />
    </div>
  )
}
TextArea.propTypes = {
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
export default TextArea;