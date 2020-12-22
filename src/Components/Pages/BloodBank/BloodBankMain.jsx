import React from 'react'
import BloodUserList from './BloodUserList'
import Search from './Search'
import './style.css'

class BloodBankMain extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    users :[],
    search :'',
    filtereduser:[],
  }
  }


  componentDidMount = () => {
 
      //fetch doctor
      var BloodUsers = []
      fetch('http://127.0.0.1:8000/doctor/')
      .then(response => response.json())
      .then(doctors => {
        for(var i = 0 ; i < doctors.length ; i++){
          BloodUsers.push(doctors[i])
        }
        
        console.log("doctors",doctors)
      })
        //fetch patient
        fetch('http://127.0.0.1:8000/patient/')
        .then(response => response.json())
        .then(patients => {
          for(var i = 0 ; i < patients.length ; i++){
            BloodUsers.push(patients[i])
          }
        
          console.log("patients",patients)
        })
       this.setState({users :BloodUsers})
        console.log("BloodUsers",this.state.users)
        // const filteredusers = this.state.users.filter((user)=>{
        //   return user.BloodType.toLowerCase().includes(this.state.search.toLowerCase())
        // })
        // this.setState({filtereduser :filteredusers})
  }
  
handleInput=(e)=>{
  console.log(e.target.value)
this.setState({search:e.target.value})
}

  render() {
    
    let filtereduser = this.state.users.filter((user)=>{
      return user.BloodType.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <div id="main-header" >
        <div className='bloodbank_img' >
           {/* <img id="image-header" src="https://media.istockphoto.com/vectors/blood-donationisometric-3d-banner-header-vector-id1135268724?k=6&m=1135268724&s=170667a&w=0&h=bpNx4iO2tR7nlRHfamcX4HO_UPd9yABxnkP9IKe46CM="/> */}
        </div>
       <div id="main">
        <Search handleInput={this.handleInput}/><br/>
        <BloodUserList filtereduser = {filtereduser}/> 
      </div>
</div>



 
        
     
    )
  }
}





export default BloodBankMain;

