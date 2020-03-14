import React,{Component}from 'react';

function Hoc(HoComponent){
    return  class extends Component{
        render(){
            return(
        <div>
       <h1>
       <HoComponent/>
       </h1>
        </div>
    );
}  
}
}

export default Hoc;