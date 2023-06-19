import React, { Component } from 'react';

class Qpp extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }
  componentWillMount(){
    console.log('First this called');
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 2000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div >
        <h1>Use the
componentDidMount lifecycle method to fetch the list of items from an API
and update the component's state with the results.
</h1>
      <p style={{color:'red',backgroundColor:'black', fontSize:'100px'}}>{this.state.data}</p>
    </div>
    )
  }
}

export default Qpp;