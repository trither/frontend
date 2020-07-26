import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// requestAnimationFrame('../env').config();
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
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		myHeaders.append("Authorization", process.env.REACT_APP_API_KEY);

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
					text: "Yelp search"
				},
				data: [{
					type: "pie",
					startAngle: 74,
					toolTipContent: "<b>{label}</b>: {y}%",
					showInLegend: "true",
					legendText: "{label}",
					indexLabelFontSize: 15,
					indexLabel: "{label} - {y}%",
					dataPoints: [
						{ y: 100 * (Number(data[0].review_count)) / totalReviews, label: data[0].name },
						{ y: 100 * (Number(data[1].review_count)) / totalReviews, label: data[1].name },
						{ y: 100 * (Number(data[2].review_count)) / totalReviews, label: data[2].name },
						{ y: 100 * (Number(data[3].review_count)) / totalReviews, label: data[3].name },
						{ y: 100 * (Number(data[4].review_count)) / totalReviews, label: data[4].name },
						{ y: 100 * (Number(data[5].review_count)) / totalReviews, label: data[5].name },
						{ y: 100 * (Number(data[6].review_count)) / totalReviews, label: data[6].name },
						{ y: 100 * (Number(data[7].review_count)) / totalReviews, label: data[7].name },
						{ y: 100 * (Number(data[8].review_count)) / totalReviews, label: data[8].name },
						{ y: 100 * (Number(data[9].review_count)) / totalReviews, label: data[9].name },
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