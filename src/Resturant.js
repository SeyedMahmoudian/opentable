import React from 'react';

class Resturant extends React.Component {
    render() {
        let list = this.props;
        let i =0;
        list = Object.values(list);
        
        var order = list[0];
        
        if(order===1){
        list.sort((a,b)=>(a.price>b.price)?1:-1);
    }else{
        list.sort((a,b)=>(a.price<b.price)?1:-1);
    }
       list.pop();
       if(list.length>0){
        return (
          
            <div className="row">
                <div className="col-lg-2 col-md-2 hidden-xs hidden-sm"></div>          
            
            <div className="resturant col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
                <h1 className="header">List of places matching above criteria</h1>
                  
                    {list.map(resturans => (
                        
                        <div className="row resutrantInfo" tabindex={i++}>  
                            <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                            <h3 className="name">{resturans.name}</h3>
                            <div className="address">{resturans.address}</div>
                            <div className="city">{resturans.city}, {resturans.area} {resturans.postal_code}</div>
                            <div className="number">Number: {resturans.phone.replace('x','')}</div>
                            <div className="price">Price: {resturans.price}</div>
                            <a className="btn btn-success" title={"Make reservation for "+resturans.name} href={resturans.reserve_url} target="_blank noopener noreferrer">Reserver now</a>
                            <a className="btn btn-info" title={"Display the"+resturans.name+"on google map"} href={'https://www.google.com/maps/place/' + resturans.lat+','+resturans.lng} target="_blank noopener noreferrer">Google map</a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                            <img src={resturans.image_url} alt={resturans.name} />
                            </div>
                        </div>
                    ))}

                
            </div>
            <div className="col-lg-2 col-md-2 hidden-xs hidden-sm"></div>
            </div>

        );
    }else{
        return(
            <div className="row">
            <div className="col-lg-2 col-md-2 hidden-xs hidden-sm"></div>
            
        
            <div className="resturant col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
            <h1 className="header">No resturant is available for this city please try again</h1>
            </div>
            </div>
        );
    }



    }
}
export default Resturant;