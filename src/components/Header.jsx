import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Header = ({arrayOfText, flickerLetters}) => {


  const [flickerEffect, setFlickerEffect] = useState('');
    
  useEffect(() => {

    const flickerInterval = setInterval(() => {
      const randomnLetter = flickerLetters[Math.floor(Math.random() * flickerLetters.length)]
      setFlickerEffect(randomnLetter)
    }, 3000);

    return () => clearInterval(flickerInterval);  
  }, [flickerLetters]);


  const renderText = (textArray, flicker) => textArray.map((letter, i) => {
    const shouldFlicker = flicker && letter === flickerEffect;
    return (
      <p key={i} className={shouldFlicker ? 'flicker' : ''}>
        {letter === ' ' ? '\u00A0' : letter}
      </p>
    );
  });

  return (
    <>
      <div className="header_text header_text_left">
      {renderText(arrayOfText, false)}
      </div>
      <div className="header_text header_text_center">
      {renderText(arrayOfText, true)}
      </div>
      <div className="header_text header_text_right">
      {renderText(arrayOfText, false)}
      </div>
    </>
  );
};

export default Header;

Header.propTypes = {
  arrayOfText: PropTypes.arrayOf(PropTypes.string).isRequired,
  flickerLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};