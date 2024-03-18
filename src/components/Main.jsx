import PropTypes from 'prop-types';

const MainCards = ({cardsData}) => {

  return (
    <>
      {cardsData.map((card, i) => (
        <div key={i} className="main_card_container">
          <div className="main_card_content">
            {card.component}
          </div>
          <div className="main_card_text">
            <p>{card.id}</p>
            <p>{card.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainCards;

MainCards.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};