import Banner from "../components/Banner";
import bannerImage from "../assets/banner.png";

function APropos() {
  return (
    <>
      <Banner
        image={bannerImage}
        title="Chez vous, partout et ailleurs"
      />

      <h1>À Propos</h1>
    </>
  );
}

export default APropos;