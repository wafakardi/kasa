import "./Card.css";

function Card({ image, title }) {
  return (
    <article>
      <img src={image} alt="Card" />
      <h2>{title}</h2>
    </article>
  );
}

export default Card;