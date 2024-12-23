import '../Components/Cards.css';
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Redux/cartSlice";

function Card(props) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="cards">
      <img
        className="card-img"
        src={props.picture}
        alt={props.name}
      />
      <p className="card-title">{props.name}</p>
      <p className="description">{props.description}</p>
      <p className="dimensions">{props.dimensions}</p>
      <p className="price">{props.price}</p>
      <button onClick={() => addToCart(props)}>Add to Cart</button>
    </div>
  );
}

export default Card;
