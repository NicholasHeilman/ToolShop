import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  constructor(){
    super();
    this.state = {
      quote: [],
    }
  }

componentDidMount(){
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(result => {
    return result.json();
  }).then((result) =>{
    this.setState ({ quote: result })
  });
  
}

  render() {
    return (
      <div>
        <p className="rs">{this.state.quote}</p>
        <p className="rs">~ Ron Swanson</p>
      </div>
    );
  }
}

export default Footer;