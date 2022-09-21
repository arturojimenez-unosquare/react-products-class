import React from 'react';
import Parent from './components/Parent'
import Child from './components/Child'

export default class App extends React.Component {


state = {
  showParent: true,
  showChild : false
}


handlePages = () => {
  this.setState({

      showParent: false, showChild: true
  })

}

handleBack = () => {

  this.setState({showParent: true, showChild: false})
}

productDetail = (product) => {
  this.setState({
      productDetail: product
  })
}


  render() {

    return (

        <div className = 'App'>
            <header className = 'App-Header'>

            {
              this.state.showParent ?
               <Parent handlePages = {this.handlePages} productDetail = {this.productDetail}/>
              :
               <Child  handlePages = {this.handlePages} handleBack = {this.handleBack} productDetail = {this.state.productDetail}/>  
            }
                          
            </header>
        </div>
    )
  }
}