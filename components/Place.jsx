import React from "react"
//props = [picture, name, Address, button]
const Place = (props) => {
    
    return ( 
        <div class="card" >
            <img src={props.url} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p>{props.address}</p>
                <p>{props.phone}</p>
                <a href={props.website}>
                    <button className="btn btn-primary">Website</button>
                </a>    
            </div>
        </div>  
           
    )
}

export default Place;