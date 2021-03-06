import React, { Component } from "react";
import "./styles/App.css";
import CheckBox from "./Checkbox";
import Charts from "./Charts";

class App extends Component {
  /**
   * Constructor that creates the state that will hold the data to be passed to Charts
   * which includes location and food category data
   */
  constructor(props) {
    super(props);
    this.state = {
      foodInputs: [
        {
          groupId: 1,
          id: 1,
          coordinates: false,
          value: "Vegan",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 2,
          coordinates: false,
          value: "Seafood",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 3,
          coordinates: false,
          value: "American",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 4,
          coordinates: false,
          value: "Vegetarian",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 5,
          coordinates: false,
          value: "Italian",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 6,
          coordinates: false,
          value: "Thai",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 7,
          coordinates: false,
          value: "Sushi",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 8,
          coordinates: false,
          value: "Mexican",
          isChecked: false,
        },
        {
          groupId: 1,
          id: 9,
          coordinates: false,
          value: "Noodles",
          isChecked: false,
        },
      ],
      locationInputs: [
        {
          groupId: 2,
          id: 1,
          coordinates: "&latitude=43.6415&longitude=-70.2409",
          value: "South",
          isChecked: false,
        },
        {
          groupId: 2,
          id: 2,
          coordinates: "&latitude=45.4475&longitude=-122.7221",
          value: "West",
          isChecked: false,
        },
        {
          groupId: 2,
          id: 3,
          coordinates: "&latitude=45.5154&longitude=-122.6604",
          value: "East",
          isChecked: false,
        },
        {
          groupId: 2,
          id: 4,
          coordinates: "&latitude=45.6075&longitude=-122.7236",
          value: "North",
          isChecked: false,
        },
      ],
    };
  }
  /**
   * Clear all inputs and reset
   */
  handleReset = (id) => (event) => {
    //handle reset for locations
    let locationInputs = this.state.locationInputs;
    locationInputs
      .filter((f) => f.groupId === id)
      .forEach((searchInput) => {
        searchInput.isChecked = false;
      });
    this.setState({ locationInputs: locationInputs });

    //handle reset for food categories
    let foodInputs = this.state.foodInputs;
    foodInputs
      .filter((f) => f.groupId === id)
      .forEach((searchInput) => {
        searchInput.isChecked = false;
      });
    this.setState({ foodInputs: foodInputs });
  };

  /**
   * Handles if a location was checked or not
   */
  handleLocationCheckfieldElement = (event) => {
    let locationInputs = this.state.locationInputs;
    locationInputs.forEach((searchInput) => {
      if (`${searchInput.groupId}-${searchInput.id}` === event.target.value)
        searchInput.isChecked = event.target.checked;
      //this.renderData(searchInput.coordinates);
    });
    this.setState({ locationInputs: locationInputs });
  };

  /**
   * Handles if food category was checked or not
   */
  handleFoodCheckfieldElement = (event) => {
    let foodInputs = this.state.foodInputs;
    foodInputs.forEach((searchInput) => {
      if (`${searchInput.groupId}-${searchInput.id}` === event.target.value)
        searchInput.isChecked = event.target.checked;
      else {
        searchInput.isChecked = false;
      }
    });
    this.setState({ foodInputs: foodInputs });
  };

  render() {
    //render data here to be passed to charts with correct checked food and location data
    let foodInputs = this.state.foodInputs;
    let locationInputs = this.state.locationInputs;
    let location;
    let foodCategory;
    let charts = [];
    locationInputs.forEach((item1) => {
      if (item1.isChecked) {
        location = item1.coordinates;
        foodInputs.forEach((item) => {
          if (item.isChecked === true) {
            foodCategory = item.value;
            charts.push(
              <Charts foodCategory={foodCategory} location={location} />
            );
          }
        });
      }
    });
    return (
      <body>
        <div className="App">
          <h1>
            {" "}
            Welcome! We're here to help you get your grub on! Please follow the
            directions below to find the top 10 restaurants in the specified
            area of Portland at your choosing.
          </h1>
          <h2> Choose a food category from the options below.</h2>
          {[{ id: 1, name: "Reset" }].map((item) => (
            <div>
              <input
                type="submit"
                onClick={this.handleReset(item.id)}
                //onChange={this.handleReset(item.id)}
                value="Reset"
              />{" "}
              <ul>
                {this.state.foodInputs
                  .filter((food) => food.groupId === item.id)
                  .map((searchInput, index) => {
                    return (
                      <CheckBox
                        key={`${item.id}-${searchInput.id}`}
                        handleCheckfieldElement={
                          this.handleFoodCheckfieldElement
                        }
                        {...searchInput}
                        value={`${item.id}-${searchInput.id}`}
                        label={searchInput.value}
                      />
                    );
                  })}
              </ul>
            </div>
          ))}
          {[{ id: 2, name: "Reset" }].map((item) => (
            <div>
              <h3>
                {" "}
                Choose a location from the list below of the Portland area.{" "}
              </h3>
              <input
                type="submit"
                onClick={this.handleReset(item.id)}
                //onChange={this.handleReset(item.id)}
                value="Reset"
              />{" "}
              <ul>
                {this.state.locationInputs
                  .filter((location) => location.groupId === item.id)
                  .map((searchInput, index) => {
                    return (
                      <CheckBox
                        key={`${item.id}-${searchInput.id}`}
                        handleCheckfieldElement={
                          this.handleLocationCheckfieldElement
                        }
                        {...searchInput}
                        value={`${item.id}-${searchInput.id}`}
                        label={searchInput.value}
                      />
                    );
                  })}
              </ul>
            </div>
          ))}
          {charts}
        </div>
      </body>
    );
  }
}

export default App;
