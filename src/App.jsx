import { useEffect } from "react";
import LsOhMyFood from "./loader/ohMyFood/Ls_ohMyFood";
import LsKasa from "./loader/kasa/Ls_kasa";
import LsSportsee from "./loader/sportsee/Ls_sportsee";
import LsHrnet from "./loader/hrnet/Ls_hrnet";
import Header from "./components/Header";
import MainCards from "./components/Main";


function App() {

  /**
   * hook for horizontal scroll when the user scroll up/down => left/right(scroll X)
   */
  useEffect(() => {
    const handleWheel = (e) => {
      const deltaX = e.deltaY * 0.8; 
      e.preventDefault();
      window.scrollBy({ left: deltaX, behavior: 'auto' });
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
    { id: "#03", name: "ohMyFood", component: <LsOhMyFood /> },
    { id: "#14", name: "HrNet", component: <LsHrnet /> },
    { id: "#12", name: "Sportsee", component: <LsSportsee /> },
    { id: "#11", name: "Kasa", component: <LsKasa /> },
  ];


  return (
    <>
      <header className="header">
        <Header arrayOfText={arrayOfText} flickerLetters={flickerLetters}  /> 
      </header>
      
      <main className="main_wrapper">
        <MainCards cardsData={cardsData} />
      </main>
    </>
  )
}

export default App

