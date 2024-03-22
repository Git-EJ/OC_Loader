import PropTypes from 'prop-types';

const Cards = ({cardsData}) => {

  return (
    <>
      {cardsData.map((card, i) => (
        <div key={i} className="card_container">
          <div className="card_content">
            {card.component}
          </div>
          <div className="card_text">
            <p>{card.id}</p>
            <p>{card.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;

Cards.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};