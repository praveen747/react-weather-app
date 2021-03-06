import React from 'react';

// no states so stateless componen
const Weather = (props) => (

        <div> 
          {props.city && props.country &&  <p>Location: {props.city} {props.country}</p> }
          {props.temperature && <p>Temperature: {props.temperature}</p>} 
          {props.humidity && <p>Humidity: {props.humidity}</p>} 
          {props.description && <p>Conditions:  {props.description}</p>}
          {props.error && <p>Error: {props.error}</p>}
        </div>
    );
export default Weather;

/* class Weather extends React.Component {
    render () {
        return (
            <div> 
              {this.props.city && this.props.country &&  <p>Location: {this.props.city} {this.props.country}</p> }
              {this.props.temperature && <p>Temperature: {this.props.temperature}</p>} 
              {this.props.humidity && <p>Humidity: {this.props.humidity}</p>} 
              {this.props.description && <p>Conditions:  {this.props.description}</p>}
              {this.props.error && <p>Error: {this.props.error}</p>}
            </div>
        )
    }
}

export default Weather; */