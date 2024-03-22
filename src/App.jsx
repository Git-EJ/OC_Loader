import { useEffect } from "react";
import LsOhMyFood from "./loader/ohMyFood/Ls_ohMyFood";
import LsKasa from "./loader/kasa/Ls_kasa";
import LsSportsee from "./loader/sportsee/Ls_sportsee";
import LsHrnet from "./loader/hrnet/Ls_hrnet";
import Header from "./components/Header";
import Cards from "./components/Cards";
import LsGameOn from "./loader/gameOn/Ls_gameon";


function App() {

  /**
   * hook for horizontal scroll when the user scroll up/down => left/right(scroll X)
   */
  useEffect(() => {
    const handleWheel = (e) => {
      const deltaX = e.deltaY * 0.8; 
      e.preventDefault();
      e.stopPropagation();
      window.scrollBy({ left: deltaX, behavior: 'auto' });
      return null;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  /**
   * Data for the header
   */
  const arrayOfText = ['W', 'E', 'B', ' ', 'L', 'O', 'A', 'D', 'E', 'R']
  const flickerLetters = ['W', 'B','A']


  /**
   * Data for the main section (cards)
   */
  const cardsData = [
    { id: "#04", name: "GameOn", component: <LsGameOn /> },
    { id: "#03", name: "ohMyFood", component: <LsOhMyFood /> },
    { id: "#12", name: "Sportsee", component: <LsSportsee /> },
    { id: "#14", name: "HrNet", component: <LsHrnet /> },
    { id: "#11", name: "Kasa", component: <LsKasa /> },
  ];


  return (
    <>
      <header className="header">
        <Header arrayOfText={arrayOfText} flickerLetters={flickerLetters}  />
        <div className="scroll-down-arrow"></div>
      </header>
      
      <main className="main_wrapper">
        {/* <div className="cards_container"> TODO scroll auto X */}
          <Cards cardsData={cardsData} />
        {/* </div> */}
      </main>
    </>
  )
}

export default App

