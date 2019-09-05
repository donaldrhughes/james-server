import React, { createContext, Component } from 'react';

//Components
//Hooks Example
// import TableTalk from '../components/common/TableTalk'

//Context
export const MainContext = createContext();

class MainProvider extends Component {
    state = {
        // message: null,
        username: null,
        email: null,
        loggedIn: null
        // ,tabletalk: null
    }

    // updateMessage = (message) => {
    //     this.setState({ message: message })
    // };

    // updateTableTalk = (initialState) => {
    //     this.setState({ tabletalk: initialState })
    // };

    componentWillMount(){
        // this.setState({ message: null })
    }

    render() {
        return(
            <MainContext.Provider value={{...this.state
            // , updateMessage: this.updateMessage, updateTableTalk: this.updateTableTalk
            }}>

            {this.props.children}
            </MainContext.Provider>
        );
    }
}

export default MainProvider