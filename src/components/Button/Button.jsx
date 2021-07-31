import ButtonEl from './Button.styled';
import PropTypes from 'prop-types';

function Button({ btnText, onClick }) {
  return (
    <ButtonEl onClick={onClick} name={btnText}>
      {btnText}
    </ButtonEl>
  );
}

export default Button;

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
