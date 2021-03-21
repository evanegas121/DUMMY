import React, {Component} from 'react';
import {
    Redirect,
    withRouter
} from "react-router-dom";
import {FormControl, InputGroup, Dropdown, DropdownButton, Button, Form} from 'react-bootstrap';


/*export const QueryParams = (encoded_address) => {
    return (<Link to={{
        pathname: `/search?query=${encoded_address}`,
    }} />);
}*/
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: 'Representatives',
            filters: ['Representatives', 'Polls'],
            redirect: false,
            location: '',
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

      getLocation(){
          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
            }
            else{alert("Location does not work")}
      }
    
      getCoordinates(position){
        this.setState({
            location: [position.coords.latitude, position.coords.longitude]
        })
      }

    handleQuery = (event) => {
        this.setState({query: event.target.value});
    }

    handleFilter = (event) => {
        this.setState({filter: event.target.value});
        console.log(this.state.filter);
    }

    renderRedirect = () => {
        const {filter, query} = this.state;
        let encoded_address = encodeURIComponent(query);
        return( <Redirect to={{
            pathname: `/search/${query}`
        }} />);
    }
    handleLocation= (event) => {
        this.getLocation({location: this.state.location})
        this.setState({query: this.state.location})
        /*event.preventDefault();*/
        const {query} = this.state
        this.props.history.push(`/search/${query}`);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {filter, query} = this.state;
        //let encoded_address = encodeURIComponent(query);
        this.props.history.push(`/search/${query}`);
    }

    render() {
        const {query, filters} = this.state;
        //let encoded_address = encodeURIComponent(query);
            return (
                <>
                    <Form onSubmit={this.handleSubmit}>
                    <InputGroup >
                    <FormControl value={query} onChange={this.handleQuery} 
                        placeholder="Search" 
                        aria-label="Search Bar" 
                        aria-describedby="basic-addon2"
                    />
                
                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Filter"
                        id="input-group-dropdown-2"
                        onSelect={this.handleFilter}
                    >
                        {filters.map(item => {
                            return (<Dropdown.Item onChange={this.handleFilter}>{item}</Dropdown.Item>);
                        })}
                    </DropdownButton>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}> Search </Button>
                    <Button variant="primary" type="submit"  onClick={this.handleLocation}> Location </Button> 
                    </InputGroup>
                    </Form>
                </>
        );
    }
}

export default withRouter(SearchBar);