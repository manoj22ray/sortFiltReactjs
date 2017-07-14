import React, {Component} from 'react';


import {ItemComp} from './components/ItemComp';


import {fetch} from './serv/fetch';

function accessService() {
    return fetch()
        .then(function (response) {
            self.setState({itemDetails: response.pizzas, preload: !(response.pizzas.length)});
        });
}


export class MainComp extends Component {
    constructor() {
        super();
        this.state = {
            itemDetails: [],
            preload: true
        };
    }

    componentDidMount() {
        self = this;
        global.setTimeout(
            function(){
                accessService();
            },
            2000
        );
    }

    render() {
        const preload = this.state.preload;
       
        return (
          <div className="container panel panel-default heightcont">
              <div className="panel-body">
                  {
                      preload ?
                          <h3>Processing...</h3> :
                          <ItemComp fdItem={this.state.itemDetails}/>
                  }
              </div>
              
          </div>
        );
    }
}
