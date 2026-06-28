import { useState, useEffect } from "react";
import "./Accueil.css";
import Banner from "../components/Banner";
import bannerImage from "../assets/banner.png";
import Card from "../components/Card";

function Accueil() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetch("http://localhost:8080/api/properties");
      const propertiesData = await response.json();

      console.log(propertiesData);
      setProperties(propertiesData);
    }

    fetchProperties();
  }, []);

  return (
    <>
      <Banner
        image={bannerImage}
        title="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
      {properties.map((Logement) => (
        <Card
          key={Logement.id}
          image={Logement.cover}
          title={Logement.title}
        />
      ))}
      </div>
    </>
  );
}

export default Accueil;

// faut t il faire try catch?