import React from 'react';
import Loader from 'react-loader-spinner'
import './loader.css'

export default class Spinner extends React.Component {
 
   render() {
    return(
     <Loader 
        type="Oval"
        color="#00BFFF"
        height="100"	
        width="100"
     />   
    );
   }
}