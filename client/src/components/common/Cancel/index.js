import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { MainContext } from '../../../contexts/MainContext';
import '../../../app.css'
//Components
import Loader from '../../Loader/Loader';

class Cancel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static contextType = MainContext;

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true })
        // let message = '';
        // this.context.updateMessage(message);
        this.props.history.push('/');
    }

    render() {
        if (this.state.loading) return <Loader />;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="cancelbtn btn" type="submit" value="Cancel" />
                </form>
            </div>
        );
    }
}

export default withRouter(Cancel);
