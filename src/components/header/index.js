import { h, Component } from 'preact';
import { route } from 'preact-router';
import Scrollchor from 'preact-scrollchor';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import Button from 'preact-material-components/Button';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/style.css';
// import style from './style';

export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
		this.state = {
			darkThemeEnabled: false
		};
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToForm = this.linkTo('/#form');

	toggleDarkTheme = () => {
		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
				}
			}
		);
	}

	render(props) {
		console.log(props.selectedRoute);
		return (
			<div>
				<TopAppBar className="toolbar toolbar--fixed mdc-toolbar--waterfall">
					<TopAppBar.Row>
						<TopAppBar.Section align-start>
							<TopAppBar.Icon menu onClick={this.openDrawer}>
								menu
							</TopAppBar.Icon>
							<TopAppBar.Title>LyžujVTatrách.sk</TopAppBar.Title>
						</TopAppBar.Section>
						<TopAppBar.Section align-end>
							<Button ripple raised className="mdc-theme--secondary-bg tlacidlo">
								<Scrollchor to="#form">	Rezervácia</Scrollchor>
							</Button>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
				<Drawer modal ref={this.drawerRef}>
					<Drawer.DrawerContent class="tlacidlo2">
						<Scrollchor to="#" >
							<Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
								<List.ItemGraphic>home</List.ItemGraphic>
							Domov
							</Drawer.DrawerItem>
						</Scrollchor>
						<Scrollchor to="#form" >
							<Drawer.DrawerItem selected={props.selectedRoute === '/#form'} onClick={this.goToForm}>
						
								<List.ItemGraphic>form</List.ItemGraphic>
							Formulár
							</Drawer.DrawerItem>
						</Scrollchor >
					</Drawer.DrawerContent>
				</Drawer>
			</div>
		);
	}
}
