import React from 'react';
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';




const API_KEY = "f5f5b7bd2b67cfdb1f24497aa1291cbe";
class App  extends React.Component {

  state = {
    // Key Value Pairs;
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country){
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:''
    })
  } else  {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:"Please enter the value"
    })
  }
}
  render () {
    
    return (
      <div style={{backgroundColor: "orange"}}>  
        <Titles />
        <Form  getWeather={this.getWeather}/>
        <Weather  
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    )
  }
}
export default App;