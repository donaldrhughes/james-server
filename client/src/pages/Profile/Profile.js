import React from 'react';
import "./style.css"
import privateHelpers from '../../components/PrivateRoute/helpers/private.helper'
import UpdateUser from "../../components/updateUser/index"


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }

    }

    render() {
        var tokenData = privateHelpers.payload();
        this.props = tokenData;
        
        return (
            <div>
Profile Page
                
                <div class="profilebody">
         
                <UpdateUser tokenData={tokenData} />
          
                <br></br>
                </div>

            </div>
        );
    }
}
