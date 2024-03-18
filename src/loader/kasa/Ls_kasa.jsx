import Logo from './Logo_kasa'
import PropTypes from 'prop-types'


const LsKasa = ({spinnerText = 'chargement en cours...'}) => {
  return (
    <div className='loading_spinner_container'>
      <div className='loading_spinner_circle'></div>
      <div className="loading_spinner_icon"><Logo /></div>
      <p className='loading_spinner_text'>{spinnerText}</p>
    </div>
  )
};

export default LsKasa;


LsKasa.propTypes = {
  spinnerText: PropTypes.string
}

LsKasa.defaultProps = {
  spinnerText: 'chargement en cours...'
}
