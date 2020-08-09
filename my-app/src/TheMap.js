import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './styles/Charts.css';

class TheMap extends Component {
    constructor(props) {
        super(props)
        this.state= {markers: []};
    }
    componentDidMount(){
        var i;
        var tempArray = []
        for (i = 0; i < 10; ++i){
            tempArray.push({
                title: i+1 + ") " + this.props.data[i].name + "\n" + this.props.data[i].location.display_address[0] + "\n" + this.props.data[i].location.display_address[1],
                name: this.props.data[0].name,
                position: { lat: this.props.data[0].coordinates.latitude, lng: this.props.data[0].coordinates.longitude }
            })
        }
        console.log(tempArray);
        this.setState({markers: tempArray.map(item => {
            return item;
        })});
        
        console.log(this.state.markers);
    }

    
    render() {
        const containerStyle = {
            width: '400px',
            height: '400px'
        };
    
        const center = {
            lat: 45.6075,
            lng: -122.7236
        };
        return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLEAPIKEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        title={marker.title}
                        name={marker.name}
                        position={marker.position}
                    />
                ))}

                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
        )
    }
}

export default TheMap;
