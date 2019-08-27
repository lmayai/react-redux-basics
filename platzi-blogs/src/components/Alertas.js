import React, { Component } from 'react';

class Alertas extends Component {
  
  
  getAlert() {
    console.log(this.props)
    alert('ON CALLED:',this.props.numero)
  }
  
  onCalled = () => {
    alert('LLAMO')
  }

  render() {
    return (
      <input id="" onClick={() => this.getAlert()} className="btn btn-primary" type="button" value="" />
    )
  }
}

export default Alertas;
