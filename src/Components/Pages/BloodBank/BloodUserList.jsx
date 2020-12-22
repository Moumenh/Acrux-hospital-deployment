import React from "react"
import User from './user'
import { Table } from 'reactstrap';


const BloodUserList = (props) => {
  // console.log("prooops", props)
  let BloodUsersList = props.filtereduser.map((user, i) => {

    return <User key={i} name={user.name} BloodType={user.BloodType} />

  })
  // console.log("props.BloodUsersnew", { BloodUsersList })

  return (

    <div id="table">
      <Table >
        <thead>
          <tr>
            <th> Name</th>
            <th>Blood Type</th>
          </tr>
        </thead>
      </Table>
      {BloodUsersList}
    </div>


  )


}
export default BloodUserList