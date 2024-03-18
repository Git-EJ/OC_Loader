import Logo from './Logo_sportsee'


const LsSportsee = () => {
  return (
    <div className="loading_spinner_sportsee_wrapper">
      <div className="loading_spinner_sportsee_container">
        <div className="loading_spinner_sportsee_logo"><Logo /></div>
      </div>
      <div className="loading_spinner_sportsee_text">
        <p>chargement en cours</p>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  )
};

export default LsSportsee;