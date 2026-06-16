import Banner from "../components/Banner";
import bannerImage from "../assets/banner.png";
import Card from "../components/Card";"../components/Card";

function Accueil() {
  return (
    <>
      <Banner
        image={bannerImage}
        title="Chez vous, partout et ailleurs"
      />
    </>
  );
}

export default Accueil;