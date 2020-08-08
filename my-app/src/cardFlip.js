import React, { Component } from 'react';
import './styles/cardFlip.css';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';

class CardFlip extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className="frontCard" onClick={this.handleClick}>
        {this.props.item.name}
        </div>
        <div className="backCard">
        <Card style={{ width: '18rem' }} className="cards">
						<Card.Img variant="top" src={this.props.item.image_url} style={this.props.imageStyle} alt="Default food pic" onClick={this.handleClick}/>
						<Card.Body>
							<Card.Title>{this.props.index + 1}) {this.props.item.name}</Card.Title>
							<Card.Text>
								{this.props.item.rating}/5 Stars {this.props.item.review} Reviews {this.props.item.price} <br />
								{this.props.item.location.display_address[0]} <br />
								{this.props.item.location.display_address[1]}
								<br />
							</Card.Text>
							<a href={this.props.item.url}>
								<img
									src={
										"https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"
									}
									style={this.props.yelpImageStyle} alt="Yelp logo"
								></img>
							</a>
						</Card.Body>
					</Card>
          {/* <button onClick={this.handleClick}>Flip Card</button> */}
        </div>
      </ReactCardFlip>
    );
  }
}

export default CardFlip;