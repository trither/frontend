import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./styles/Charts.css";

class TheMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title:
            "1) " +
            this.props.data[0].name +
            "\n" +
            this.props.data[0].location.display_address[0] +
            "\n" +
            this.props.data[0].location.display_address[1],
          name: this.props.data[0].name,
          position: {
            lat: this.props.data[0].coordinates.latitude,
            lng: this.props.data[0].coordinates.longitude
          }
        },
        {
          title:
            "2) " +
            this.props.data[1].name +
            "\n" +
            this.props.data[1].location.display_address[0] +
            "\n" +
            this.props.data[1].location.display_address[1],
          name: this.props.data[1].name,
          position: {
            lat: this.props.data[1].coordinates.latitude,
            lng: this.props.data[1].coordinates.longitude
          }
        },
        {
          title:
            "3) " +
            this.props.data[2].name +
            "\n" +
            this.props.data[2].location.display_address[0] +
            "\n" +
            this.props.data[2].location.display_address[1],
          name: this.props.data[2].name,
          position: {
            lat: this.props.data[2].coordinates.latitude,
            lng: this.props.data[2].coordinates.longitude
          }
        },
        {
          title:
            "4) " +
            this.props.data[3].name +
            "\n" +
            this.props.data[3].location.display_address[0] +
            "\n" +
            this.props.data[3].location.display_address[1],
          name: this.props.data[3].name,
          position: {
            lat: this.props.data[3].coordinates.latitude,
            lng: this.props.data[3].coordinates.longitude
          }
        },
        {
          title:
            "5) " +
            this.props.data[4].name +
            "\n" +
            this.props.data[4].location.display_address[0] +
            "\n" +
            this.props.data[4].location.display_address[1],
          name: this.props.data[4].name,
          position: {
            lat: this.props.data[4].coordinates.latitude,
            lng: this.props.data[4].coordinates.longitude
          }
        },
        {
          title:
            "6) " +
            this.props.data[5].name +
            "\n" +
            this.props.data[5].location.display_address[0] +
            "\n" +
            this.props.data[5].location.display_address[1],
          name: this.props.data[5].name,
          position: {
            lat: this.props.data[5].coordinates.latitude,
            lng: this.props.data[5].coordinates.longitude
          }
        },
        {
          title:
            "7) " +
            this.props.data[6].name +
            "\n" +
            this.props.data[6].location.display_address[0] +
            "\n" +
            this.props.data[6].location.display_address[1],
          name: this.props.data[6].name,
          position: {
            lat: this.props.data[6].coordinates.latitude,
            lng: this.props.data[6].coordinates.longitude
          }
        },
        {
          title:
            "8) " +
            this.props.data[7].name +
            "\n" +
            this.props.data[7].location.display_address[0] +
            "\n" +
            this.props.data[7].location.display_address[1],
          name: this.props.data[7].name,
          position: {
            lat: this.props.data[7].coordinates.latitude,
            lng: this.props.data[7].coordinates.longitude
          }
        },
        {
          title:
            "9) " +
            this.props.data[8].name +
            "\n" +
            this.props.data[8].location.display_address[0] +
            "\n" +
            this.props.data[8].location.display_address[1],
          name: this.props.data[8].name,
          position: {
            lat: this.props.data[8].coordinates.latitude,
            lng: this.props.data[8].coordinates.longitude
          }
        },
        {
          title:
            "10) " +
            this.props.data[9].name +
            "\n" +
            this.props.data[9].location.display_address[0] +
            "\n" +
            this.props.data[9].location.display_address[1],
          name: this.props.data[9].name,
          position: {
            lat: this.props.data[9].coordinates.latitude,
            lng: this.props.data[9].coordinates.longitude
          }
        }
      ]
    };
  }

  render() {
    const containerStyle = {
      width: "400px",
      height: "400px"
    };

    const center = {
      lat: 45.6075,
      lng: -122.7236
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEAPIKEY}>
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
              <></>
            </GoogleMap>
          </LoadScript>
    );
  }
}

export default TheMap;
