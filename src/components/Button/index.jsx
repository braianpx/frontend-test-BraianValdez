import PropTypes from 'prop-types'; 

const Buttons = {
  Primary: '',
  secondary: '',
  none:''
} 

const Button = ({ type, name, callback, style }) => {

  return(
    <button 
      onClick={callback}
      className={`${Buttons[type]} ${style} `}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}

export default Button;