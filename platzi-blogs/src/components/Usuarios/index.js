import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Alertas from '../Alertas'

class Usuarios extends Component {
	constructor() {
		super();
		this.state = {
			usuarios: []
		}
		this.child = React.createRef();
	}

	onClick = () => {
		this.child.current.getAlert();
	}

	async componentDidMount() {
		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
		this.setState({
			usuarios: respuesta.data
		});
	}

	ponerFilas = () => this.state.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

	render() {
		return (
			<div>
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
								
								{[1,2,3].map((index) => (
									<span key={index}>
										<button className="btn" onClick={this.onClick}>
										{index}
										</button>
										<Alertas  ref={this.child} numero={index} />
									</span>
								))
								}
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducers;
};

export default connect(mapStateToProps, /*{actions}*/)(Usuarios);