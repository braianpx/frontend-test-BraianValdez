import PropTypes from "prop-types"

const CheckBox = ({labelName, name, checked, callback}) => {
  return(
    <>
    {labelName && (
      <label htmlFor={name} className="block text-lg font-medium text-primary me-2">
        {labelName}
      </label>
    )}
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={callback}
        className="h-5 w-5 bg-white text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary cursor-pointer"
      />
    </>
  )
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}
export default CheckBox
