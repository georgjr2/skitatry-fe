import { h, Component } from 'preact';
import Scrollchor from 'preact-scrollchor';
import Parallax from 'react-parallax';
import Carousel from '../../components/carousel';
import Form from '../../components/form';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from '../home/style.css';


export default class Home extends Component {
	render() {
		return (
			
			<div class={`${style.home} page`}>
				<Parallax
					strength={300}
				>
					<img class="bg" src="https://www.grousemountain.com/media/W1siZiIsIjIwMTcvMDEvMzAvMjAvMzkvMzcvOGIyMzE4ZDYtMjlmYS00OTliLTkxYjAtNTVmYTZhOWUxODA3L3RpY2tldC1wYXNzZXMuanBnIl0sWyJwIiwidGh1bWIiLCI5NjB4NDcwXHUwMDNlIl1d?sha=de7bef2fadf325bb" alt="fill murray" />
				</Parallax>
			
				<Card>
					
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Bezkonkurenčné ceny</h2>
					</div>
					<div class={style.cardBody}>
					Ak sa neviete lyžovať alebo snowboardovať, zverte sa radšej do rúk inštruktorov, čím môžete predísť možným chybám, zlozvykom a taktiež Vám ušetria veľa času a zbytočnej námahy.
Mimoriadna pozornosť sa venuje najmenším lyžiarom. Používame rôzne pomôcky na spestrenie a spríjemnenie ich výuky. Vyučujeme podľa rakúskej metodiky lyžovania, ktorú prebrala SLOVENSKÁ ASOCIÁCIA PROFESIONÁLNYCH UČITEĽOV LYŽOVANIA A SNOWBOARDINGU (SAPUL) a Únia lyžiarskych a snowboardových škôl slovenska (LASŠ), prispôsobujeme každému klientovi podľa jeho technickej úrovne a schopností.
					</div>
					<Card.Actions class="tlacidlo2">
						<Scrollchor to="#form" ><Card.ActionButton>Chcem vedieť viac !</Card.ActionButton></Scrollchor>
					</Card.Actions>
				</Card>
				<br />
				<Carousel />
				<br />
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Požičovňa lyží</h2>
					</div>
					<div class={style.cardBody}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</div>
				</Card>
				<br />
				<Carousel />
				<br />
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Formulár</h2>
						<h2 class=" mdc-typography--caption">Ak chcete vedieť viac, zašlite nám formulár, a my vám obratom odpovieme na všetky vaše otázky</h2>
					</div>
					<div class={style.cardBody} id="form">
						<Form />
					</div>
					<Card.Actions>
						<Card.ActionButton>Rezervovať</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
