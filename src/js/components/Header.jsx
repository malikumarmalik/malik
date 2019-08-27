import React from "react";

const Header =(props)=>{
 
    return(
      <div  >

        {/* fist header section =================================*/}

        <div className="section container-fluid " id="backimg">
        <div className="pt-5">
          <div className ="container pt-5">
          <div className ="container pt-5">

        <h1 className="text-center display-2 font-weight-bold"> {props.data[0].h2} </h1>
        <h4 className="font-weight-bold">{props.data[0].p1}</h4>
        <button className="btn btn-primary pl-4 pr-4 pt-3 pb-3 mt-5" >Find Out More</button>
        </div>
        </div>
        </div>
        </div>

        {/* second header section=================== */}

        <div  className="section container-fluid ">
          <div className="pt-5 text-center mb-5">
            <div className="pt-5">
            <h2>{props.data[0].h3}</h2>
            <p>{props.data[0].p2}</p>
        <button className="btn btn-dark pl-4 pr-4 pt-3 pb-3 mt-5" >What We Offer</button>
        </div>

          </div>


        </div>
        
      </div>
    )

}
export default Header
