import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import axios from 'axios';
import { myJson } from './List.js';
//import data from '../../../features';

export default class Pricenew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableItems: {}, loading: true };
  
    }
    componentDidMount() {
        console.log(myJson);
        console.log('component');
        this.setState({
            tableItems: myJson, loading: false
        })
        
        
    }


    render() {
       
        let values = myJson;


        var w = window.innerWidth;
        let empty =
        {
            width: '25%',
            float: 'left'
        }
       
        let fullwidth = {
            width: '100%',
            float: 'left'
        }
        let subwidth = {
            width: '25%',
            float: 'left',
            textAlign: 'center'
        }
        let platinum = {
            width: '25%',
            float: 'left',
            textAlign: 'center',
            backgroundColor: "#fdd587"
            
        }
        let gold = {
            width: '25%',
            float: 'left',
            textAlign: 'center',
            backgroundColor: "#fdd587"

        }
        let silver = {
            width: '25%',
            float: 'left',
            textAlign: 'center',
            backgroundColor: "#fdd587"

        }
        let mainsubwidth = {
            width: '25%',
            float: 'left',
            textAlign: 'center',
            backgroundColor: '#f7f7f7'
        }
        if (w < 600) {
             fullwidth = {
                width: '100%',
                float: 'left'
            }
             subwidth = {
                width: '33%',
                float: 'left',
                 textAlign: 'center'
            }
             mainsubwidth = {
                width: '100%',
                float: 'left',
                 textAlign: 'center',
                 backgroundColor:'#f7f7f7'
            }
             empty=
            {
                width: '0%'
            }

             platinum = {
                width: '33%',
                float: 'left',
                textAlign: 'center',
                backgroundColor: "#fdd587"

            }
            gold = {
                width: '33%',
                float: 'left',
                textAlign: 'center',
                backgroundColor: "#fdd587"

            }
            silver = {
                width: '33%',
                float: 'left',
                textAlign: 'center',
                backgroundColor: "#fdd587"

            }


        }
        else {
           
        }


      
        return (

            <div>
                <div style={fullwidth}>
                    <div style={empty}>
                        .
                    </div>
                    <div style={platinum }>
                        PLATINUM
                    </div>
                    <div style={gold}>
                        GOLD
                    </div>
                    <div style={silver}>
                        SILVER
                    </div>

                </div>


                
                {values.items.map(values =>

                    <div style={fullwidth}>
                        <div key={values.service} style={mainsubwidth}>
                            {values.service}
                    </div>
                        <div style={subwidth}>
                            {values.p3}
                    </div>
                        <div style={subwidth}>
                            {values.p2}
                    </div>
                        <div style={subwidth}>
                            {values.p1}
                    </div>

                    </div>

                    
                )}



            
            </div>
            
        );
    }
}