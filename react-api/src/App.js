import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    var myHeaders = new Headers();
    var term = "vegan";
    var location = "&location=portland";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    myHeaders.append("Authorization", "Bearer nhxHZrgvTKnEAX_4eWO4Ab55MYSuLXqFZy6JGoWb4HVhBlfMn1LY5JXuFYpwAFlxgQ8yQnlSRczTKIUmhLZIhhSVnFPwhk6pcy94SXiD7qJ5AdW18KEHtaIm7OUFX3Yx");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(proxyurl + "https://api.yelp.com/v3/businesses/search?" + term + location, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result['businesses']))
      // result => console.log(result['businesses']))
      .catch(error => console.log('error', error));
    //   fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
    // "method": "GET",
    // "headers": {
    // 	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    // 	"x-rapidapi-key": "46668a7331msh0a4505972740a46p1779c5jsn20e20848e83b"
    // }})
    //     .then(res => res.json())gg=G
    //     .then((data) => {
    //       console.log(data)
    //       // this.setState({ contacts: data })
    //     })
    //     .catch(console.log)
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

}

export default App;

function Charts() {
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  //   var proxyurl = "https://cors-anywhere.herokuapp.com/"
  //   var theRequest = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
  //   fetch(proxyurl + theRequest, {
  // 	"method": "GET",
  // 	"headers": {
  // 		// "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  // 		"Bearer": "nhxHZrgvTKnEAX_4eWO4Ab55MYSuLXqFZy6JGoWb4HVhBlfMn1LY5JXuFYpwAFlxgQ8yQnlSRczTKIUmhLZIhhSVnFPwhk6pcy94SXiD7qJ5AdW18KEHtaIm7OUFX3Yx"
  // 	}
  // })
  // .then(response => {
  // 	console.log(response);
  // })
  // .catch(err => {
  // 	console.log(err);
  // });
}