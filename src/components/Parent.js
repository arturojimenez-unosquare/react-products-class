import React from 'react';

export default class Parent extends React.Component {

state = {
	products: []
}


async componentDidMount () {

	const url = 'https://dummyjson.com/products';
	const response = await fetch(url);
	const data = await response.json();
	this.setState({products: data.products})
}

handleClick = (product) => {
	console.log('ID', product.id, ' ', 'description: ', product.description)
	this.props.handlePages();
	this.props.productDetail(product);
}

	render() {

		return (

			<table align = 'center'>

				<thead>
					<th>ID</th>
					<th>Title</th>
					<th>Price</th>
					<th>Action</th>
				</thead>

				{
				this.state.products.map (product => (
				<tbody key={product.id}>
					<tr>
						<td>{product.id}</td>
						<td>{product.title}</td>
						<td>{product.price}</td>
						<td><button onClick ={() => this.handleClick(product)}> Product Detail </button></td>
					</tr>
				</tbody>

				))}
				
			</table>
		)
	}
}