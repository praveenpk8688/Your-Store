// import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import { View, Card, Image } from "reshaped";
import "../../Assets/styles/CardGrid.css";
import "../../Assets/styles/Ads_Banner.css";

import Ads_Banner from "./Ads_Banner";

const tshirtData = [
  {
    title: "T-shirt 1",
    content: "Cool tee",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "T-shirt 2",
    content: "Comfy fit",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "T-shirt 3",
    content: "Stylish",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "T-shirt 4",
    content: "Casual wear",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "T-shirt 5",
    content: "Bold graphic",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
];

const shirtData = [
  {
    title: "Shirt 1",
    content: "Formal pick",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "Shirt 2",
    content: "Classic white",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "Shirt 3",
    content: "Patterned",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "Shirt 4",
    content: "Smart casual",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "Shirt 5",
    content: "Button-down",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
];

const pantData = [
  {
    title: "Shirt 1",
    content: "Formal pick",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "Shirt 2",
    content: "Classic white",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "Shirt 3",
    content: "Patterned",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "Shirt 4",
    content: "Smart casual",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "Shirt 5",
    content: "Button-down",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
];

const comboData = [
  {
    title: "T-shirt 1",
    content: "Cool tee",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "T-shirt 2",
    content: "Comfy fit",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "T-shirt 3",
    content: "Stylish",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
  {
    title: "T-shirt 4",
    content: "Casual wear",
    image: "/images/Home_Card_Images/whitemodel.png",
  },
  {
    title: "T-shirt 5",
    content: "Bold graphic",
    image: "/images/Home_Card_Images/yellowmodel.png",
  },
];

const renderCard = (card, index) => (
  <Card key={index} padding={0}>
    <View
      style={{
        width: "100%",
        height: "180px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Image
        className="card-hero_image"
        src={card.image}
        alt={card.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </View>
    <View style={{ padding: "1rem" }}>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </View>
  </Card>
);

const CardGrid = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        margin: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222",
            borderLeft: "4px solid #f10303",
            paddingLeft: "1rem",
            margin: 0,
          }}
        >
          T-Shirts
        </h2>
      </div>
      {/* T-Shirts */}

     <div className="card-grid">
        {tshirtData.map(renderCard)}
      </div>

      {/* Shirts */}
      <div
      className="card-grid"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222",
            borderLeft: "4px solid #f10303",
            paddingLeft: "1rem",
            margin: 0,
          }}
        >
          Shirts
        </h2>
      </div>
      <div className="card-grid">
        {shirtData.map(renderCard)}
      </div>

      <Ads_Banner />

      {/* Pants */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222",
            borderLeft: "4px solid #f10303",
            paddingLeft: "1rem",
            margin: 0,
          }}
        >
          Pants
        </h2>
      </div>
    <div className="card-grid">
        {pantData.map(renderCard)}
      </div>

      {/* Combos */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222",
            borderLeft: "4px solid #f10303",
            paddingLeft: "1rem",
            margin: 0,
          }}
        >
          Combo's
        </h2>
      </div>

     <div className="card-grid">
        {comboData.map(renderCard)}
      </div>
    </div>
  );
};

export default CardGrid;
