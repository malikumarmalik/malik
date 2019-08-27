import React from "react";
const Portfolio =(props)=>{
    return(
        <div>
             <div className="container-fluid text-center pt-5 pb-5">
             <div className="pt-5">
          <h6 className="text-warning pt-2"> {props.data[0].port}  </h6>
          <h1 className=" pb-4" > {props.data[0].port1} </h1>
          <br/><br/><br/>
          <div className="container">
        <div className="row">
          <div className="col-sm">
          <div className="row">
          <div className="col-sm" id="bgcd">
              <div className="pt-5 mt-5">
                <div className="pt-4 mt-4">
          <h1 className="text-left text-white" >{props.data[0].port2}</h1>
          <p className="text-left text-white">{props.data[0].port3}</p>
          </div>
          </div>
          </div>
          <div className="col-sm" id="bgcd2">
          <div className="pt-5 mt-5">
                <div className="pt-4 mt-4">
          <h1 className="text-left text-white" >{props.data[0].port4}</h1>
          <p className="text-left text-white">{props.data[0].port5}</p>
          </div>
          </div>
          </div>
        </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <div className="row">
          <div className="col-sm" id="bgcd3">
          <div className="pt-5 mt-5">
                <div className="pt-4 mt-4">
          <h1 className="text-left text-white" >{props.data[0].port6}</h1>
          <p className="text-left text-white">{props.data[0].port7}</p>
          </div>
          </div>
          </div>
          <div className="col-sm" id="bgcd4">
          <div className="pt-5 mt-5">
                <div className="pt-4 mt-4">
          <h1 className="text-left text-white" >{props.data[0].port8}</h1>
          <p className="text-left text-white">{props.data[0].port9}</p>
          </div>
          </div>
          </div>
        </div>
          </div>
        </div>
      </div>
             </div>
             </div>

        <div className="container-fluid text-center pt-5 pb-5" id="bagw">
            <h2 className="text-white pt-5 mt-5">{props.data[0].port10}</h2>
            <div className="pt-5">
                <button className="btn btn-light pl-5 pr-5 pt-3 pb-3 font-weight-bold">{props.data[0].port11}</button>
                <button className="btn btn-dark pl-5 pr-5 pt-3 pb-3 ml-3 font-weight-bold">Look at Me!</button>

            </div>

        </div>

       
        </div>
    )
}
export default Portfolio;