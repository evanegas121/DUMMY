import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            representative: true,
            filters: ['By Location', 'By Name']
        }

        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
    }

    handleSwitch(event) {
        this.setState({
            representative: event.target.checked
        });
        this.handleFilters();
    }

    handleFilters() {
        if(this.state.representative === true) {
            this.setState({
                filters: ['By Location', 'By Name']
            });
        } else {
            this.setState({
                filters: ['By Location']
            });
        }
    }

    render() {
        return (
            <div>
                <label className="switch">
                <input type="checkbox" onChange={this.handleSwitch}></input>
                </label>
                <SearchBar value={this.state.representative} filters={this.state.filters}/>
            </div>
        );
    }
}