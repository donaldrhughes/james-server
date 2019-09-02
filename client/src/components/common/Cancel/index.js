import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { MainContext } from '../../../contexts/MainContext';


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
        let message = '';
        this.context.updateMessage(message);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="cancelBtn">
                    <input className="submit btn btn-outline-secondary" type="submit" value="Cancel" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Cancel);
