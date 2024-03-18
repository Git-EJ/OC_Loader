import { useEffect, useState } from "react";
import LsOhMyFood from "./loader/ohMyFood/Ls_ohMyFood";
import LsKasa from "./loader/kasa/Ls_kasa";
import LsSportsee from "./loader/sportsee/Ls_sportsee";
import LsHrnet from "./loader/hrnet/Ls_hrnet";



function App() {

  const [flickerEffect, setFlickerEffect] = useState('');
  
  const arrayOfText = ['W', 'E', 'B', ' ', 'L', 'O', 'A', 'D', 'E', 'R']

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      const flickerLetters = ['W', 'B','A']
      const randomnLetter = flickerLetters[Math.floor(Math.random() * flickerLetters.length)]
      setFlickerEffect(randomnLetter)
    }, 3000);

    return () => clearInterval(flickerInterval);  
  }, []);


  const renderText = (textArray, flicker) => textArray.map((letter, i) => {
    const shouldFlicker = flicker && letter === flickerEffect;
    return (
      <p key={i} className={shouldFlicker ? 'flicker' : ''}>
        {letter === ' ' ? '\u00A0' : letter}
      </p>
    );
  });


  /**
   * hook for horizontal scroll when the user scroll up/down => left/right(scroll X)
   */
  useEffect(() => {

    const handleWheel = (e) => {
      const deltaX = e.deltaY * 1.2; 
      e.preventDefault();
      window.scrollBy({ left: deltaX, behavior: 'auto' });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };

  }, []);


  return (
    <>
      <header className="app_header">

        <div className="app_header_text app_header_text_left">
        {renderText(arrayOfText, false)}
        </div>
        <div className="app_header_text app_header_text_center">
        {renderText(arrayOfText, true)}
        </div>
        <div className="app_header_text app_header_text_right">
        {renderText(arrayOfText, false)}
        </div>

      </header>
      
      <main className="app_main_wrapper">

        <div className="app_main_card_container">
          <div className="app_main_card_content">
            <LsOhMyFood />
          </div>
          <div className="app_main_card_text">
            <p>#03</p>
            <p>ohMyFood</p>
          </div>
        </div>
        
        <div className="app_main_card_container">
          <div className="app_main_card_content">
            <LsHrnet />
          </div>
          <div className="app_main_card_text">
            <p>#14</p>
            <p>HrNet</p>
          </div>
        </div>

        <div className="app_main_card_container">
          <div className="app_main_card_content">
            <LsSportsee />
          </div>
          <div className="app_main_card_text">
            <p>#12</p>
            <p>Sportsee</p>
          </div>
        </div>

        <div className="app_main_card_container">
          <div className="app_main_card_content">
            <LsKasa />
          </div>
          <div className="app_main_card_text">
            <p>#11</p>
            <p>Kasa</p>
          </div>
        </div>

      </main>
    </>
  )
}

export default App

