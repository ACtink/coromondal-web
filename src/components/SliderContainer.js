import Slider from "./Slider";
const SliderContainer = () => {
  const slides = [
    { url: "first_winner_1.png", title: "beach" },
    { url: "first_winner_2.png", title: "boat" },
    // { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    // { url: "http://localhost:3000/image-4.jpg", title: "city" },
    // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "90px auto"
  };
  return (
    <div>
    
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default SliderContainer 