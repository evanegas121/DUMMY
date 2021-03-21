import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
//import './geo.css';
import ResultCard from '../cards/result.jsx';


export default class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            location: ''
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
      }
    
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          //navigator.geolocation.getCurrentPosition(console.log,console.log);
        });
      }

      getLocation(){
          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
            }
            else{alert("error")}
      }
    
      getCoordinates(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            location: [position.coords.latitude ,',',position.coords.longitude]
        })
      }
    
      render() {
        return (
          <div>
            
            <Button onClick = {this.getLocation} variant="primary">Primary</Button>
              <p> {this.state.location} </p>
              </div>
        );
      }
   
    
}
