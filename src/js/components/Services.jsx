import React from "react"

const Services =(props)=>{
    return(
        <div>

            
      <div className="container-fluid text-center pt-5 pb-5" id="bagw">
          <div className="pt-5">
          <h6 className="text-warning pt-2"> {props.data[0].ser_tit} </h6>
          <h1 className="text-white pb-4" >{props.data[0].ser_pre}</h1>
        <div className="row text-center">
          <div className="col-lg">
              <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"><i class="fa fa-mobile-alt"></i></div>
            </div>
            <h3 className="pt-3 text-white">{props.data[0].sre1}</h3>
            <p className="text-light">{props.data[0].pre}</p>
          </div>
          <div className="col-sm">
          <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"> <i class="fa fa-pencil-alt"></i></div>
            </div>
            <h3 className="pt-3 text-white">{props.data[0].sre2}</h3>
            <p className="text-light">{props.data[0].pre2}</p>
          </div>
          <div className="col-sm">
          <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"> <i class="fa fa-thumbs-up"></i></div>
            </div>
            <h3 className="pt-3 text-white">{props.data[0].sre3}</h3>
            <p className="text-light">{props.data[0].pre3}</p>
          </div>
          <div className="col-lg">
          <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"><i class="fa fa-biohazard"></i></div>
            </div>
            <h3 className="pt-3 text-white">{props.data[0].sre4}</h3>
            <p className="text-light">{props.data[0].pre4}</p>
          </div>
        </div>
      </div>
        </div>

        <div className="container-fluid text-center pt-5 pb-5" id="bge2">
            <div className="pt-5">
            <div className="pt-5">
            <div className="pt-5">
            <h1 className="display-4 font-weight-bold">Welcome to your <br/>  next website!</h1>
            <button className="btn pl-4 pr-4 pt-3 pb-3 mt-5 text-white font-weight-bold" id="bagw">Download Now!</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Services;