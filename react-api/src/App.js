import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;;
const REVIEWNUM = 10;


class PieChart extends Component {
	constructor() {
		super()
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		}
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
			.then(json => {
				this.setState({
					isLoaded: true,
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

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			console.log(data[0]);
			var i;
			var totalReviews = 0;
			for (i = 0; i < REVIEWNUM; ++i) {
				totalReviews += Number(data[i].review_count);
				// console.log(totalReviews);
			}
			// console.log(totalReviews);
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
		// const options = {
		// 	exportEnabled: true,
		// 	animationEnabled: true,
		// 	title: {
		// 		text: "Yelp search"
		// 	},
		// 	data: [{
		// 		type: "pie",
		// 		startAngle: 74,
		// 		toolTipContent: "<b>{label}</b>: {y}%",
		// 		showInLegend: "true",
		// 		legendText: "{label}",
		// 		indexLabelFontSize: 15,
		// 		indexLabel: "{label} - {y}%",
		// 		dataPoints: [
		// 			{ y: 17, label: "Direct" },
		// 			{ y: 48, label: "Organic Search" },
		// 			{ y: 8, label: "Paid Search" },
		// 			{ y: 4, label: "Referral" },
		// 			{ y: 18, label: "Social" }
		// 		]
		// 	}]
		// }

		// return (
		// 	<div>
		// 		<h1>React Pie Chart</h1>
		// 		<CanvasJSChart options={options}
		// 		/* onRef={ref => this.chart = ref} */
		// 		/>
		// 		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		// 	</div >
		// );
	}
}

async function myFetch() {
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

	let response = await fetch(proxyurl + "https://api.yelp.com/v3/businesses/search?" + term + location, requestOptions);

	if (response.ok)
		console.log(response.json());
}

export default PieChart;

function getData() {
	var myHeaders = new Headers();
	var term = "vegan";
	// var i;
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
		.then(data => {
			return data.businesses.map(item => {
				return item;
			});
			// console.log(businesses);
			// return businesses;
		})
		.catch(error => console.log('error', error));
}
// class App extends Component {
//     render() {
//     return (
//       <Contacts contacts={this.state.contacts} />
//     );
//   }
    // var myHeaders = new Headers();
    // var term = "vegan";
    // var i;
    // var location = "&location=portland";
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // myHeaders.append("Authorization", "Bearer nhxHZrgvTKnEAX_4eWO4Ab55MYSuLXqFZy6JGoWb4HVhBlfMn1LY5JXuFYpwAFlxgQ8yQnlSRczTKIUmhLZIhhSVnFPwhk6pcy94SXiD7qJ5AdW18KEHtaIm7OUFX3Yx");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch(proxyurl + "https://api.yelp.com/v3/businesses/search?" + term + location, requestOptions)
    //   .then(response => response.json())
    //   .then(data => {
    //     const businesses = data.businesses.map(item => {
    //       return item;
    //     });
    //     for (i = 0; i < 1; ++i) {
    //       console.log(businesses[i].name);
    //     }
    //   })
    //   .catch(error => console.log('error', error));



// }

// export default App;
