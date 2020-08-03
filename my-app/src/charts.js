import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const REVIEWNUM = 10;


class PieChart extends Component {
	/**
	 * Constructor that creates the state that will hold the fetch data
	 */
	constructor() {
		super()
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		}
	}
/**
 * Fetches the data from the yelp fusion API
 */
	componentDidMount() {
		var myHeaders = new Headers();
		var term = "vegan";
		var location = "&location=Southwest+portland";
		var sort = "&sort_by=review_count"
		// var sort ="";
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		myHeaders.append("Authorization", process.env.REACT_APP_APIKEY);

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		/**
		 * To circumvent the CORS issue of No Access-Control-Allow-Origin header, we fetch through a proxy URL
		 * Found through Slack
		 * https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
		 */
		fetch(proxyurl + "https://api.yelp.com/v3/businesses/search?" + term + location + sort, requestOptions)
			.then(response => response.json())
			.then(json => {
				// Puts the data into the state
				this.setState({
					isLoaded: true,
					// Maps just the important data and enters it into the state data
					data: json.businesses.map(item => {
						return item;
					})
				});
			},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

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
			const options = {
				exportEnabled: true,
				animationEnabled: true,
				title: {
					text: "Yelp Most Reviewed "
				},
				data: [{
					type: "pie",
					startAngle: 74,
					percentFormatString: "#0.##",
					toolTipContent: "<b>{label}</b>: #percent%  <br/> {location} <br/> {rating}/5 Stars {review} Reviews {price}",
					// showInLegend: "true",
					legendText: "{label}",
					indexLabelFontSize: 15,
					indexLabel: "{label} - #percent%",
					dataPoints: [
						{ y: 100 * (Number(data[0].review_count)) / totalReviews, label: data[0].name, rating: data[0].rating, price: data[0].price, location: data[0].location.display_address, review: data[0].review_count},
						{ y: 100 * (Number(data[1].review_count)) / totalReviews, label: data[1].name, rating: data[1].rating, price: data[1].price, location: data[1].location.display_address, review: data[1].review_count},
						{ y: 100 * (Number(data[2].review_count)) / totalReviews, label: data[2].name, rating: data[2].rating, price: data[2].price, location: data[2].location.display_address, review: data[2].review_count},
						{ y: 100 * (Number(data[3].review_count)) / totalReviews, label: data[3].name, rating: data[3].rating, price: data[3].price, location: data[3].location.display_address, review: data[3].review_count},
						{ y: 100 * (Number(data[4].review_count)) / totalReviews, label: data[4].name, rating: data[4].rating, price: data[4].price, location: data[4].location.display_address, review: data[4].review_count},
						{ y: 100 * (Number(data[5].review_count)) / totalReviews, label: data[5].name, rating: data[5].rating, price: data[5].price, location: data[5].location.display_address, review: data[5].review_count},
						{ y: 100 * (Number(data[6].review_count)) / totalReviews, label: data[6].name, rating: data[6].rating, price: data[6].price, location: data[6].location.display_address, review: data[6].review_count},
						{ y: 100 * (Number(data[7].review_count)) / totalReviews, label: data[7].name, rating: data[7].rating, price: data[7].price, location: data[7].location.display_address, review: data[7].review_count},
						{ y: 100 * (Number(data[8].review_count)) / totalReviews, label: data[8].name, rating: data[8].rating, price: data[8].price, location: data[8].location.display_address, review: data[8].review_count},
						{ y: 100 * (Number(data[9].review_count)) / totalReviews, label: data[9].name, rating: data[9].rating, price: data[9].price, location: data[9].location.display_address, review: data[9].review_count},
					]
				}]
			}

			return (
				<div>
					<h1>React Pie Chart</h1>
					<CanvasJSChart options={options}
					/* onRef={ref => this.chart = ref} */
					/>
					{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
				</div >
			);
		}
	}
}

export default PieChart;