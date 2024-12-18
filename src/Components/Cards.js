import '../Components/Cards.css';


function Card(props) {
  
    return (
      <div className="cards">
        <img className="card-img" 
        src={props.picture} 
        alt={props.name} />
        <p className="card-title">{props.name}</p>
        <p className="description">{props.description}</p>
        <p className="dimensions">{props.dimensions}</p>
        <p className="price">{props.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default Card;
  