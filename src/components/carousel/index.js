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
			<img class="slider-img" src="https://www.slovakia.com/photos/photographer/11/1362411205_strbske-tarn-In-High-Tatras.jpg" />
			<img class="slider-img" src="http://kmturley.github.io/touch-scroll/img/photo.jpg" />
			<img class="slider-img" src="https://www.vt.sk/fileadmin/_processed_/csm_historia_fotogaleria1_tatry_panorama2_051b39b942.jpg" />
			<img class="slider-img" src="https://www.megaubytovanie.sk/images/seoarticlephotos/1b140cee-9871-47bf-b0fb-0733d4955f03.jpg" />
			<img class="slider-img" src="https://www.gotatry.sk/fileadmin/_processed_/csm_vysoke-tatry-foto-03_2106e9376f.jpg" />
			<img class="slider-img" src="https://media-cdn.tripadvisor.com/media/photo-s/01/7c/3b/d1/wysokie-tatry-slowacja.jpg" />
			<img class="slider-img" src="https://img.topky.sk/cestovky/320px/1772549.jpg/slovensko-lanovka-hory-vysoke-tatry-pleso-stit-krivan-lomnocky-stit.jpg" />
		</Carousel>);
	}
}
