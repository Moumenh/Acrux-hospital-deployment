import React, { Component } from "react"
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props) => {
    return (

        <div id="search">
            {/* <input onChange={props.handleInput} type="text" placeholder="Search.. By Blood Type"/> */}
            <form class="form-inline active-purple-3 active-purple-4">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input onChange={props.handleInput} class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                    aria-label="Search" />
                    <div id="send"> 
                        <button  type="button" class="btn btn-outline-info">send</button>
                    </div>
                   
            </form>
            
        </div>



    )


}
export default Search