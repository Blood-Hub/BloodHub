import React, { Component } from 'react';
import "../styles/Process.css";
import First from "../img/first.jpeg";
import Groups from "../img/groups.jpeg";
import Life from "../img/life.jpeg";
import Donation from "../img/dination.jpeg";
import Heart from "../img/heart.jpeg";
import Hero from "../img/hero.jpeg";



const images = [
   First,
   Groups,
   Life,
   Donation,
   Hero,
   Heart
];

const imageTexts = [
  "PREPARATION - Stay hydrated. Make sure you eat healthy food. Focus on iron-rich meals and avoid fatty food.",
  "SCREENING - When a donor arrives staff review their health history and conduct a mini physical, including checking blood iron levels.",
  "DONATION - A dination consists od one bad of blood, which measures a pint, and severel small test tubes. The bag and test tubes will be sent to separate facilities and tracked through barcodes.",
  "TESTING & PROCESSING - The tubes are sent to a testing laboratory and screened for a processing center whre whole blood is spun in centrifuges into redcells, platelets and plasma.",
  "STORAGE - After testing is completed, bags suitable for transfusion are labeled and stored in refrigerators at 43°F for up to 42days.",
  "DISTRIBUTION - Hospitals keep some blood bags on hand, but mostly order it from blood centers as it is needed.",
  "TRANSFUSION - While the better blood management programs have reduced the use of blood in elective surgeries, the demand for universal blood, which is preferred in emergency situations, has remained constant.",
  
];

class DonationProcess extends Component {
  constructor() {
    super();

    this.state = {
      images: images,
      currentImg: images[3],
      fade: true
    };
  }

  componentDidMount() {
    this.removeFade();
  }

  goToPhoto(i) {
    this.setState({
      currentImg: this.state.images[i],
      fade: true
    });

    this.removeFade();
  }

  nextPhoto(i) {
    const images = this.state.images.slice();

    if (i + 1 < images.length) {
      this.setState({
        fade: true,
        currentImg: images[i + 1]
      });
    } else {
      this.setState({
        fade: true,
        currentImg: images[0]
      });
    }

    this.removeFade();
  }

  removeFade() {
    setTimeout(() => {
      this.setState({ fade: false });
    }, 1200);
  }

  render() {
    const bgStyle = {
      background: 'url(' + this.state.currentImg + ') no-repeat center center fixed'
    };

    const currentIndex = this.state.images.slice().indexOf(this.state.currentImg);

    return (
      
      <div className="app">
      
        <div
          className={this.state.fade ? 'bg-img fade-bg' : 'bg-img'}
          style={bgStyle}
        />
        <Carousel
          img={this.state.currentImg}
          currentIndex={currentIndex}
          selectorCount={this.state.images.length}
          goToPhoto={this.goToPhoto.bind(this)}
          nextPhoto={this.nextPhoto.bind(this)}
          fade={this.state.fade}
          imageText={imageTexts[currentIndex]} // Pass the current image text
          
        />
      </div>
    );
  }
}

const Carousel = ({
  img,
  selectorCount,
  goToPhoto,
  currentIndex,
  nextPhoto,
  fade,
  imageText
}) => (
  <div className="carousel">
    <Image
      img={img}
      nextPhoto={nextPhoto}
      currentIndex={currentIndex}
      fade={fade}
      imageText={imageText} // Pass the image text to Image component
    
      
    />
    <Controls
      selectorCount={selectorCount}
      goToPhoto={goToPhoto}
      currentIndex={currentIndex}
      fade={fade}
    />
  </div>
);

const Image = ({ img, nextPhoto, currentIndex, fade, imageText }) => (
  <div
    className={fade ? 'image fade' : 'image'}
    onClick={() => {
      nextPhoto(currentIndex);
    }}
  >
    <img src={img} alt="Slideshow" />
    <img className="shadow" src={img} alt="" />
    <p className="image-text">{imageText}</p> 
  
  </div>
);

const Controls = ({
  selectorCount,
  goToPhoto,
  currentIndex,
  fade
}) => {
  const selectors = [];

  for (let i = 0; i < selectorCount; i += 1) {
    selectors.push(
      <Selector
        currentIndex={currentIndex}
        i={i}
        key={i}
        goToPhoto={goToPhoto}
      />
    );
  }

  return (
    <ul className={fade ? 'controls stretch-controls' : 'controls'}>
      {selectors}
    </ul>
  );
};

const Selector = ({
  currentIndex,
  i,
  goToPhoto
}) => (
  <li
    className={i === currentIndex ? 'selected' : ''}
    key={i}
    onClick={() => { goToPhoto(i) }}
  >step {i + 1} </li>  

);

export default DonationProcess