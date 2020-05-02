import React from 'react';
import Resturant from './Resturant';
class ResturantList extends React.Component {
  

  render() {
      const p = this.props;
      return (

          <div className="returantlist">
          {this.props.restInfo.map((item, key) =>
       <Resturant resturant={item} key={item.id}{...p.order} />
       
      )}  
     {p.restInfo.map(resutrantInfo=><Resturant key={resutrantInfo.id}{...resutrantInfo}{...p.order}/>)}
         
          
          </div>
      );
    
         
  }
}
export default ResturantList;