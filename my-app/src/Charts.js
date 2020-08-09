import React, { Component } from "react";
import CanvasJSReact from "./assets/canvasjs.react";
import "./styles/Charts.css";
import CardFlip from "./cardFlip.js";
import TheMap from "./TheMap";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const REVIEWNUM = 10;

class PieChart extends Component {
  /**
   * Constructor that creates the state that will hold the fetch data
   */
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      center: [],
      area: "empty",
      type: "empty"
    };
  }
  /**
   * Fetches the data from the yelp fusion API
   */
  componentDidMount() {
    // console.log("Food category: " + this.props.foodCategory)
    // console.log("Location: " + this.props.location)
    var myHeaders = new Headers();
    var area;
    var latitude;
    var longitude;
    // Sets the proper lat/lng/area based on the props passed in
    if (this.props.location === "&latitude=43.6415&longitude=-70.2409") {
      area = "South Portland";
      latitude = 43.6415;
      longitude = -70.2409;
    } else if (
      this.props.location === "&latitude=45.4475&longitude=-122.7221"
    ) {
      area = "West Portland";
      latitude = 45.4475;
      longitude = -122.7221;
    } else if (
      this.props.location === "&latitude=45.5154&longitude=-122.6604"
    ) {
      area = "East Portland";
      latitude = 45.5154;
      longitude = -122.6604;
    } else {
      area = "North Portland";
      latitude = 45.6075;
      longitude = -122.7236;
    }
    var type = this.props.foodCategory;
    var radius = "&radius=5000";
    // var sort = "&sort_by=review_count";
    // Proxy URL to get around the CORS preflight issue
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    // Create the header for the API call
    myHeaders.append("Authorization", process.env.REACT_APP_APIKEY);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    // fetches the data and will only return the proper data after it has
    // succeeded. isLoaded and error work in conjunction with render()
    // to ensure that the API call went through
    fetch(
      proxyurl +
        "https://api.yelp.com/v3/businesses/search?" +
        type +
        this.props.location +
        radius,
      // radius +
      // sort,
      requestOptions
    )
      .then(response => response.json())
      .then(
        json => {
          // Puts the data into the state
          this.setState({
            isLoaded: true,
            // Maps just the important data and enters it into the state data
            data: json.businesses.map(item => {
              return item;
            }),
            center: {
              lat: latitude,
              lng: longitude
            },
            area: area,
            type: type
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  /**
   * Renders the components: chart, top 10 list
   * Calls the functions to create the details and the map
   */
  render() {
    const { error, isLoaded, data } = this.state;
    // Will continue to load until the data has finally been fully aquired
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var i;
      var totalReviews = 0;
      // Calculate the total reviews
      for (i = 0; i < REVIEWNUM; ++i) {
        totalReviews += Number(data[i].review_count);
      }

      // creating the chart
      const options = {
        height: "300",
        width: "400",
        // backgroundColor: "#d32323",
        backgroundColor: null,
        animationEnabled: true,
        title: {
          text: "Yelp Top 10 Most Reviewed"
        },
        data: [
          {
            type: "pie",
            startAngle: 74,
            percentFormatString: "#0.##",
            toolTipContent:
              "<b>{label}</b>: #percent%  <br/> {location} <br/> {rating}/5 Stars {review} Reviews {price}",
            legendText: "{label}",
            indexLabelFontSize: 15,
            indexLabel: "{label} - #percent%",
            dataPoints: [
              {
                y: (100 * Number(data[0].review_count)) / totalReviews,
                label: data[0].name,
                rating: data[0].rating,
                price: data[0].price,
                location: data[0].location.display_address,
                review: data[0].review_count
              },
              {
                y: (100 * Number(data[1].review_count)) / totalReviews,
                label: data[1].name,
                rating: data[1].rating,
                price: data[1].price,
                location: data[1].location.display_address,
                review: data[1].review_count
              },
              {
                y: (100 * Number(data[2].review_count)) / totalReviews,
                label: data[2].name,
                rating: data[2].rating,
                price: data[2].price,
                location: data[2].location.display_address,
                review: data[2].review_count
              },
              {
                y: (100 * Number(data[3].review_count)) / totalReviews,
                label: data[3].name,
                rating: data[3].rating,
                price: data[3].price,
                location: data[3].location.display_address,
                review: data[3].review_count
              },
              {
                y: (100 * Number(data[4].review_count)) / totalReviews,
                label: data[4].name,
                rating: data[4].rating,
                price: data[4].price,
                location: data[4].location.display_address,
                review: data[4].review_count
              },
              {
                y: (100 * Number(data[5].review_count)) / totalReviews,
                label: data[5].name,
                rating: data[5].rating,
                price: data[5].price,
                location: data[5].location.display_address,
                review: data[5].review_count
              },
              {
                y: (100 * Number(data[6].review_count)) / totalReviews,
                label: data[6].name,
                rating: data[6].rating,
                price: data[6].price,
                location: data[6].location.display_address,
                review: data[6].review_count
              },
              {
                y: (100 * Number(data[7].review_count)) / totalReviews,
                label: data[7].name,
                rating: data[7].rating,
                price: data[7].price,
                location: data[7].location.display_address,
                review: data[7].review_count
              },
              {
                y: (100 * Number(data[8].review_count)) / totalReviews,
                label: data[8].name,
                rating: data[8].rating,
                price: data[8].price,
                location: data[8].location.display_address,
                review: data[8].review_count
              },
              {
                y: (100 * Number(data[9].review_count)) / totalReviews,
                label: data[9].name,
                rating: data[9].rating,
                price: data[9].price,
                location: data[9].location.display_address,
                review: data[9].review_count
              }
            ]
          }
        ]
      };

      /**
       * Creates the top 10 list
       */
      function TopTenList() {
        var parsedData = [];

        var i;
        for (i = 0; i < 10; ++i) {
          parsedData.push(data[i]);
        }
        // loops through the data and will output the number and
        return parsedData.map((item, index) => (
          <ul key={index}>
            {index + 1}) {item.name}
          </ul>
        ));
      }

      /**
       * Creates the list of restaurants
       */
      function ListRestaurants() {
        // style of the images for each restaurant
        var imageStyle = {
          // height: "100%",
          // width: "100%",
          valign: "top"
        };

        // style of the yelp link image
        var yelpImageStyle = {
          height: "30px",
          width: "45px"
        };

        // stores only the top 10 data items
        var parsedData = [];

        var i;
        for (i = 0; i < 10; ++i) {
          parsedData.push(data[i]);
        }
        // iterates through parsedData and will create a CardFlip
        // item then return it to the calling function
        const restaurantList = parsedData.map((item, index) => (
          <CardFlip
            item={item}
            index={index}
            imageStyle={imageStyle}
            yelpImageStyle={yelpImageStyle}
          />
        ));

        return restaurantList;
      }

      return (
        <body>
          <div>
            {/* <div className="title"> */}
            <h1>
              {this.state.type} in {this.state.area}
            </h1>
            {/* </div> */}
            {/* <h1>React Pie Chart</h1> */}
            <div className="grid-container">
              <div className="topTenList">
                <TopTenList />
              </div>
              <div className="reviewChart">
                <CanvasJSChart
                  options={options}
                  onRef={ref => (this.chart = ref)}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
              </div>
              <div className="map">
                <TheMap data={data} center={this.state.center} />
              </div>
            </div>
            <div className="restaurantList">
              <ListRestaurants />
              {/* <Example /> */}
            </div>
          </div>
        </body>
      );
    }
  }
}

export default PieChart;
