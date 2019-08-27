import React from "react";
const Footer =(props)=>{
    return(
        <div>
            <div>
            <img src="./img/map.png" alt=""/>
        </div>

        <div className="container-fluid text-center pt-5 pb-5 d-flex justify-content-center align-items-center">
            <div id="fdar" className="ml-3 d-flex justify-content-center align-items-center"><i id="cll" class="fab fa-facebook-f"></i></div>
            <div id="fdar" className="ml-3 d-flex justify-content-center align-items-center"><i id="cll" class="fab fa-twitter"></i></div>
            <div id="fdar" className="ml-3 d-flex justify-content-center align-items-center"><i id="cll" class="fab fa-github"></i></div>

        </div>
        
        <div>
                <h6 className="text-center"> {props.data[0].fot_tit} </h6>
            </div>
        </div>
    )
}
export default Footer;