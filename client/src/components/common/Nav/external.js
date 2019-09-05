import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, Col, Card
    // , FormGroup, FormControl
 } from "react-bootstrap";
import '../../app.css';
import "./updateuser.css";
// import axios from "axios";

class Nav extends Component {
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
                <Card>
                    <ButtonToolbar>
                        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                            variant => (
                                <DropdownButton
                                    title={variant}
                                    variant={variant.toLowerCase()}
                                    id={`dropdown-variants-${variant}`}
                                    key={variant}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                        Active Item
        </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ),
                        )}
                    </ButtonToolbar>
                </Card>
            </div>
        )
    }
}

export default withRouter(Nav);