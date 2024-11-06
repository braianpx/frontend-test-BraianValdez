import PropTypes from "prop-types"

const CheckBox = ({checked, callback}) => {
  return(
    <label className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={callback}
      className="h-5 w-5 cursor-pointer "
    />
  </label>
  )
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}
export default CheckBox
