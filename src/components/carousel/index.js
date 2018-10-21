import { h, Component } from 'preact';
import Carousel from 'preact-flickity-component';
import '../../flickity';
 
export default class CarouselContainer extends Component {
	render (props, state) {
		const flickityOptions = {
			pageDots: false,
			wrapAround: true,
			autoPlay: true,
			adaptiveHeight: true,
			imagesLoaded: true
		};
 
		return (<Carousel className="Slider" options={flickityOptions}>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
			<div><img class="slider-img" src="http://kmturley.github.io/touch-scroll/img/photo.jpg" /></div>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
			<div><img class="slider-img" src="http://kmturley.github.io/touch-scroll/img/photo.jpg" /></div>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
			<div><img class="slider-img" src="http://kmturley.github.io/touch-scroll/img/photo.jpg" /></div>
			<div><img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" /></div>
		</Carousel>);
	}
}
