import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Lib
import ParallaxComponent from '../';

// Component styles
import styles from './styles';

// Images
import spaceCardImg from './images/space-card.png';

const images = [{
  speed: 0.3,
  top: '50%',
  image: spaceCardImg,
  transforms: { transform: 'scale(0.7) translateZ(-50px)', zIndex: 1, position: 'relative' },
}, {
  speed: 0.2,
  top: '-30%',
  image: spaceCardImg,
  transforms: { transform: 'scale(0.85) translateZ(-25px)', zIndex: 2, position: 'relative' },
}, {
  speed: 0.1,
  top: '0%',
  image: spaceCardImg,
  transforms: { transform: 'scale(1)', zIndex: 3, position: 'relative' },
}, {
  speed: 0.2,
  top: '30%',
  image: spaceCardImg,
  transforms: { transform: 'scale(0.85) translateZ(-25px)', zIndex: 2, position: 'relative' },
}, {
  speed: 0.3,
  top: '-15%',
  image: spaceCardImg,
  transforms: { transform: 'scale(0.7) translateZ(-50px)', zIndex: 1, position: 'relative' },
}];

export default class ExamplePage extends Component {
  render() {
    return (
      <div>
        <div style={{height: '100vh', width: '100vw'}}>hello</div>
        <div
          className={styles}
          style={{
            position: 'relative',
            height: '100vH',
            width: '100vW',
          }}
        >
          { images.map(({top, image, transforms, speed}, i) => {
            console.log(transforms);

            return (
              <ParallaxComponent
                speed={speed}
                top={top}
                left={(i + 1) * 90.5}
                key={i}
              >
                <img style={transforms} src={image} />
              </ParallaxComponent>
            );
          }) }
        </div>
        <div style={{height: '100vh', width: '100vw'}}>bai 👋</div>
      </div>
    );
  }
}

ReactDOM.render(
  <ExamplePage />,
  document.getElementById('react-parallax-component-example')
);
