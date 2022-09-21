import React from 'react' ;

export default class Child extends React.Component {
 

	render() {

		return(

			<div>
				<div>Description: {this.props.productDetail.description}</div>
				<div>Brand: {this.props.productDetail.brand} </div>
				<div><button onClick ={() => this.props.handleBack()}> Back </button></div>
			</div>
		)
	}
}