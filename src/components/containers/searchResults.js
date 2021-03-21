import React, {Component} from 'react';
import ResultCard from '../cards/result.jsx';


export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        let key ="AIzaSyDTOATfJi99hz4laDMwB6OTkDvSzsgi6Mc";
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/elections?key=${key}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.elections
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
        const {error, isLoaded, items} = this.state;
        if(error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else if(!isLoaded) {
            return (
                <div>Loading Search Results...</div>
            )
        } else {
            return (
                <div>
                    {items.map(item => (
                        <ResultCard key={item.id} item={item}/>
                    ))}
                </div>
                
            );
        }
    }
}
