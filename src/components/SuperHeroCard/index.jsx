import PropTypes from 'prop-types';

const SuperHeroCard = ({ superHero }) => {
  return (
    <div className='superHero-card'>
      <div>
        <img src={superHero.image.url} alt={superHero.name} />
      </div>
      <div>
        <h2>{superHero.name}</h2>
        <em>{superHero.biography.alignment}</em>
      </div>
    </div>
  );
};

SuperHeroCard.propTypes = {
  superHero: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    biography: PropTypes.shape({
      alignment: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SuperHeroCard;