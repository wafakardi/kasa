import "./Banner.css";

function Banner({ image, title }) {
  return (
    <section className="banner">
      <img src={image} alt="Bannière" />
      <h1>{title}</h1>
    </section>
  );
}

export default Banner;