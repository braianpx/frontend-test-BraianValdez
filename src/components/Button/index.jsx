import PropTypes from 'prop-types'; 

const Buttons = {
  primary: 'bg-primary w-auto px-4 py-2 rounded-lg shadow-md hover:bg-black-semi text-white ',
  secondary: '',
  none:''
} 

const Button = ({ classButton, name, callback, style, type }) => {

  return(
    <button 
      type={type && type || 'button'}
      onClick={callback}
      className={`${Buttons[classButton]} ${style} `}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  callback: PropTypes.func,
  classButton: PropTypes.string,
  style: PropTypes.string.isRequired,
}

export default Button;