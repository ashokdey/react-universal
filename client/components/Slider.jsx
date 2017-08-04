import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class Slider extends Component {
  render() {
  return(
    <Carousel style={{ marginTop: '50px'}}>
      <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src="/static/images/slider/1.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src="/static/images/slider/2.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src="/static/images/slider/3.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src="/static/images/slider/4.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src="/static/images/slider/5.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  }
} 

export default Slider; 