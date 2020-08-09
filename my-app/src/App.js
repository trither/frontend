import React, { Component } from 'react'
import './styles/App.css'
import  CheckBox  from './Checkbox'
import Charts from './Charts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputs: [
        { groupId: 1, id: 1, coordinates: "&latitude=43.6415&longitude=-70.2409", value: "south", isChecked: false },
        { groupId: 1, id: 2, coordinates: "&latitude=45.4475&longitude=-122.7221", value: "west", isChecked: false },
        { groupId: 1, id: 3, coordinates: "&latitude=45.5154&longitude=-122.6604", value: "east", isChecked: false },
        { groupId: 1, id: 4, coordinates: "&latitude=45.6075&longitude=-122.7236", value: "north", isChecked: false },
      ],
      foodInputs: [
        { groupId: 2, id: 1, coordinates: false, value: "vegan", isChecked: false },
        { groupId: 2, id: 2, coordinates: false, value: "seafood", isChecked: false },
        { groupId: 2, id: 3, coordinates: false, value: "burger", isChecked: false },
        { groupId: 2, id: 4, coordinates: false, value: "vegetarian", isChecked: false },
      ]

    };
  }

  handleAllChecked = id => event => {
    let locationInputs = this.state.locationInputs;
    locationInputs
      .filter(f => f.groupId === id)
      .forEach(searchInput => {
        searchInput.isChecked = event.target.checked;
      });
    this.setState({ locationInputs: locationInputs });

    let foodInputs = this.state.foodInputs;
    foodInputs
      .filter(f => f.groupId === id)
      .forEach(searchInput => {
        searchInput.isChecked = event.target.checked;
      });
    this.setState({ foodInputs: foodInputs });
  };

  handleCheckfieldElement = event => {
    let locationInputs = this.state.locationInputs;
    locationInputs.forEach(searchInput => {
      if (`${searchInput.groupId}-${searchInput.id}` === event.target.value)
        searchInput.isChecked = event.target.checked;
    });
    this.setState({ locationInputs: locationInputs });

    let foodInputs = this.state.foodInputs;
    console.log("testing"+this.state.foodInputs[0].isChecked)
    foodInputs.forEach(searchInput => {
      if (`${searchInput.groupId}-${searchInput.id}` === event.target.value)
        searchInput.isChecked = event.target.checked;
    });
    this.setState({ foodInputs: foodInputs });
  };
/*
  function createCharts(){
    const Chartlist = this.state.locationInputs.map((item, index) => (
      if(item.isChecked == true) {
        this.state.foodInputs.map((item2, index2)=>(
          if(item2.isChecked == true)
          <Charts location={item.value} type={item2.value} coordinates={item.coordinates}/>
        ))
      }
    <CardFlip item={item} index={index} imageStyle={imageStyle} yelpImageStyle={yelpImageStyle}/>));									
    return restaurantList;
  }
*/
  render() {
    //console.log(this.state.foodInputs);
    return (
      <div className="App">
        <h1> Homescreen description and welcome message goes here!  </h1>
        <h2> Choose food categories and areas of the portland area for restaurant info </h2>
        {[{ id: 1, name: "Check / Uncheck All" }, { id: 2, name: "Check / Uncheck All" }].map(item => (
          <div>
            <input
              type="checkbox"
              onChange={this.handleAllChecked(item.id)}
              value="checkedall"
            />{" "}
            {item.name}
            <ul>
              {this.state.locationInputs
                .filter(location => location.groupId === item.id)
                .map((searchInput, index) => {
                  return (
                    <CheckBox
                      key={`${item.id}-${searchInput.id}`}
                      handleCheckfieldElement={this.handleCheckfieldElement}
                      {...searchInput}
                      value={`${item.id}-${searchInput.id}`}
                      label={searchInput.value}/>

                  );
                })}
                {this.state.foodInputs
                .filter(food => food.groupId === item.id)
                .map((searchInput, index) => {
                  return (
                    <CheckBox
                      key={`${item.id}-${searchInput.id}`}
                      handleCheckfieldElement={this.handleCheckfieldElement}
                      {...searchInput}
                      value={`${item.id}-${searchInput.id}`}
                      label={searchInput.value}/>
                  );
                })}
            </ul>
          </div>
        ))}
        <Charts values={this.state.locationInputs}/>
      </div>
    );
  
}
}

export default App;
