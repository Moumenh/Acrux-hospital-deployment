import React from "react"

import { Table } from 'reactstrap';
const user = (props) => {
    return (

        <div id="forTable">
            <Table striped bordered hover >
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                         <td>{props.BloodType}</td> 
                    </tr> 
            </tbody> 
             </Table> 

             {/* <div id="for">
                <div><p className="pname">{props.name} </p> </div>

    <div> <p className="bname">{props.BloodType}</p></div> 
             </div>*/}

          </div>   


    )


}
export default user