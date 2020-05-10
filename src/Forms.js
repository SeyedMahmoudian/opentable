import React from 'react';
import axios from 'axios';


class Forms extends React.Component {
    state = { dest: '' };
    constructor(props) {
        super(props);
        this.state = { dest: '', order: 0, error: null, isLoaded: false, cities: [] };
    }
    componentDidMount() {

        fetch("https://opentable.herokuapp.com/api/cities").then(response => response.json()).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    cities: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get('https://opentable.herokuapp.com/api/restaurants?city=' + this.state.dest);

        this.props.onSubmit(resp.data.restaurants, this.state.order);
        this.setState({ dest: '' });

    };

    render() {
        const { error, isLoaded, cities } = this.state;

        if (!isLoaded) {
            return <div className="row"><div className="col-lg-4 col-md-4 hidden-xs hidden-sm"></div><div className="col-lg-4 col-sm-12 col-sm-12 col-xs-12"><img src="./pics/loading.gif" alt="loading.." /></div></div>
        } else if (error) {
            return <div className="row"><div className="col-lg-4 col-md-4 hidden-xs hidden-sm"></div><div className="col-lg-4 col-sm-12 col-sm-12 col-xs-12"><p>Error!</p></div></div>
        } else {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 hidden-xs hidden-sm"></div>
                        <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-hidden-12 col-xs-12">
                                       <h3> <label for="cities">Available list to choose from:</label></h3>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 form-group">

                                        <select id="cities" className="form-control" required value={this.state.dest} onChange={event => this.setState({ dest: event.target.value })}>         
                                          
                                        <option disabled selected></option>
                                            {cities.cities.map(city => (
                                               
                                                    <option value={city}>
                                                      
                                                    {city}
                                                </option>
                                            ))
                                            }
                                        </select>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-hidden-12 col-xs-12">
                                        <h3><label for="order">Display price in order of </label></h3>
                                    </div>
                                    <div className="form-group col-md-8 col-lg-8 col-xs-12- col-sm-12">
                                        <select id="order"className="form-control" required value={this.state.order} onChange={event => this.setState({ order: event.target.value })}>
                                            <option selected></option>
                                            <option value="1">Ascending</option>
                                            <option value="2">Descending</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 hidden-xs hidden-sm"></div>
                                    <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                                         <button name="reset" value="Reset field" type="reset" className = "btn btn-secondary">Reset</button>
                                        <button name="submit" value="Submit search"type="submit" className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </React.Fragment>

            );
        }

    }

}

export default Forms;