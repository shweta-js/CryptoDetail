
import './HeroCard.css';
import fb from "../Assets/FB.png"
function HeroCard({name,value,image}) {
  return (
    <div className="HeroCard">
        <div className="HeroCard1">
            <h4>{name}</h4>
            <img src={image} alt="image"></img>
        </div>
        <div>
            <h2>{value}</h2>
        </div>
    </div>
  );
}

export default HeroCard;
