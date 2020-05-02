import React from 'react';
import Forms from './Forms';
import ResturantList from './ResturantList';


class App extends React.Component{
 state={
   restArray:[],
   order:0,
 };
 addRest=(restInfo,order)=>{

   this.setState(({
      restArray:[restInfo],
      order:order
      
   }));
   
 };

  render(){
    return(
      <div>
        <Forms onSubmit={this.addRest}/>
        
        <ResturantList restInfo={this.state.restArray} order={this.state.order}/>
      </div>
    );
  }
}

export default App;
