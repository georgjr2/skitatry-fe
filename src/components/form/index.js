import { h, Component } from 'preact';
import FormField from 'preact-material-components/FormField';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/style.css';

export default class Form extends Component {
	render(){
		return (
			<div>
				<FormField>
					<LayoutGrid>
						<LayoutGrid.Inner>
							<LayoutGrid.Cell cols="12"><TextField label="Meno" outlined /></LayoutGrid.Cell>
							<LayoutGrid.Cell cols="12"><TextField label="Priezvisko" outlined /></LayoutGrid.Cell>
							<LayoutGrid.Cell cols="12"><TextField label="Telefón" outlined /></LayoutGrid.Cell>
							<LayoutGrid.Cell cols="12"><TextField label="E-mail" outlined /></LayoutGrid.Cell>
							<LayoutGrid.Cell cols="12"><TextField label="Dátum rezervácie" outlined /></LayoutGrid.Cell>
							<LayoutGrid.Cell cols="12"><TextField label="Vek" outlined /></LayoutGrid.Cell>
						</LayoutGrid.Inner>
					</LayoutGrid>
				</FormField>
			</div>
		);
	}
}
