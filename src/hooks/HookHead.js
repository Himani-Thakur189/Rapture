import React, { Component } from 'react';
import Person from './Person';
class HookHead  extends Component {
    state={
        show:true,
        data:'himani',
        text:'this is a state'
    }
    change=()=>{
        this.setState({show:!this.state.show})
    }
    handleChange=(e)=>
    {
       this.setState({data:e.target.value})
     }
    componentDidMount(){
        console.log('component is mounted for the first time')
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponent')
     if(nextState!=this.state)
     return true;
     return false;
    }
    render() {
        console.log('renderrrrrr');
        return [
          
                 <button key="i1" onClick={this.change}>Unmount</button>,
                 <input key="i2" type="text" onChange={this.handleChange}></input>,
                // {this.state.show?
                // <Person data={this.state.data}/>  :null}
            
                ]
    }
}

export default HookHead;