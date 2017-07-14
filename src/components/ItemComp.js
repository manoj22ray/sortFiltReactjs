import React, {Component} from 'react';


function sortinglist() {debugger;
    const data=this;
    this.inc = !this.inc;
       
     return data.sort(function(a, b) {debugger;
         
          if (a < b ) {
             return (data.inc  ? -1 : 1);
          }
          if (a > b ) {
            return (data.inc  ? 1 : -1);
          }

        return 0;

    });
   
    
}

/*function sortinglist(reversed){
    const data=this;
    return function(){
        reversed = !reversed;
        return function(a,b){
            return (a==b ? 0 : a < b? -1 : 1) * (reversed ? -1 : 1);
        }
    }

}*/


export class ItemComp extends Component {
    constructor(props) {
        super(props);
        this.state={
          rghitemDetails: props.fdItem,
            itemDetails: props.fdItem
            
        }
       
    }

    

    detailShot() {
        this.state.itemDetails.sortinglist = sortinglist;
        this.setState({itemDetails: this.state.itemDetails.sortinglist()});

    }
    
    handleChange(ev) {
        this.state.itemDetails = this.state.rghitemDetails;
        
         function renderChange(itemDetails, ev) {
                return itemDetails.filter(function (data) {
                    return data.includes(ev.target.value);
                });
            }       
        const updateList = renderChange(this.state.itemDetails, ev);
        this.setState({itemDetails: updateList});
    }


    render() {
                    
        return (
            <div>
                <div className="col-md-12 inputcontainer">
                    <div className="col-md-offset-1 col-sm-4">
                        <input
                            type="text"
                            placeholder="Filter List Items"
                            className="form-control"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.detailShot.bind(this)}>
                            sorting order
                        </button>
                    </div>
                </div>
                <div className="panel-body">
                    <ul className="col-md-offset-1 col-md-6 listItem">
                        {
                            this.state.itemDetails.map(function(data, index) {
                                return (<li className="list-group-item" key={index}>{data}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
