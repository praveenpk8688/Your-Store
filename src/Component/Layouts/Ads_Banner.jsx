import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RotatingText from "../../TextAnimations/RotatingText/RotatingText.jsx";
import CircularText from "../../TextAnimations/CircularText/CircularText.jsx";
import BlurText from "../../TextAnimations/BlurText/BlurText.jsx";
import "../../Assets/styles/Ads_Banner.css";
// import ScrollReaveal from '../../TextAnimations/ScrollFloat/ScrollReaveal.jsx';
// import logo from "../../../public/images/main_logo.png";

const taglines = [
  "Style isn’t just worn — it’s lived. Welcome to Your Store, where every stitch tells your story.",
  "Your Store isn't just where you shop — it's where your style begins to speak.",
  "Own the room before you even speak. Your Store does fashion that talks first.",
  "Fashion is more than fabric; it’s a feeling. Your Store brings that feeling to life.",
  "Confidence starts with the right outfit — Your Store’s got you covered.",
  "From subtle to bold — express it all at Your Store.",
  "Curated looks. Unstoppable feels. Only at Your Store.",
];

const LoopingBlurText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 23000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BlurText
      key={index} // triggers re-animation
      text={taglines[index]}
      delay={150}
      animateBy="words"
      direction="top"
      className="text-xl font-bold  mb-8  blur-text"
    />
  );
};

const Ads_Banner = () => {
  return (
    <Container fluid className="my-5 ">
      <Row>
        <Col md={4}>
          <div className="p-5  text-center">
            <h1
              className="text-center text-uppercase  "
              style={{ fontSize: "3rem" }}
            >
              <RotatingText
                texts={["Our", "Your", "Cool!"]}
                mainClassName="d-inline-block px-2  text-white rounded "
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  backgroundColor: "#d50100",
                }}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="d-inline-block overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              &nbsp;Store
            </h1>
          </div>
        </Col>
        <Col md={4}>
          <div
            className=""
            style={{ position: "relative", height: "100%", width: "100%" }}
          >
            <CircularText
              text="YOUR*STORE*DISCOUNTS*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class text-danger"
            />
            <img
              src="../images/main_logo.png"
              alt="Logo"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                objectFit: "contain",
                transform: "translate(-50%, -50%)",
                width: "110px",
                height: "70px",
              }}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className="p-5  text-center">
            <h1
              className="text-center text-uppercase  "
              style={{ fontSize: "3rem" }}
            >
              <RotatingText
                texts={["Your", "Our", "Cool!"]}
                mainClassName="d-inline-block px-2  text-white rounded "
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  backgroundColor: "#d50100",
                }}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="d-inline-block overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              &nbsp;Store
            </h1>
          </div>
          {/* <div className="p-3 text-center">
 <LoopingBlurText />

          </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Ads_Banner;
