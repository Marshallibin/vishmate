import './AddUser.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Paper,Button }from '@mui/material';
import "@fontsource/montserrat";  
import * as React from 'react';
import Footer from '../../components/footer/Footer';
import AddUserSave from "./MyVerticallyCenteredModal";
import {useState} from "react";
const AddUser = () => {
  const [showAddUserSave,setShowAddUserSave]=useState(false);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
 
  const names = [
    'Jwellery',
    'Political',
    'Restaurant',
    'Theatre',
   
  ];
    const [personName, setPersonName] = React.useState([]);
 
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
 
    };
   
    let show = true;
 
    function showCheckboxes() {
      let checkboxes = document.getElementById("checkBoxes");
 
      if (show) {
        checkboxes.style.display = "block";
        show = false;
      } else {
        checkboxes.style.display = "none";
        show = true;
      }
    }
 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <Paper elevation={10}style={{width: "95%",margin: "1rem auto",height: "70vh",borderRadius: "20px 20px 0px 0px"}}>
            <div className="Userheading">
              <div className="Userletter">Add User</div>
            </div>
         
          <div style={{ marginTop: "80px", marginLeft: "200px", marginBottom:"100px", }}>
 
            <div className="d-flex ">
            <div>
              <label style={{fontFamily: "Montserrat",fontSize: "20px",fontWeight: "600", display: "block" }}>User Name  </label><br></br>
              <input type="text"  style={{ padding: "8px 8px", borderRadius: "4px", border: "2px solid #A6A6A6 ", marginRight:"20px",width:"40vh"}}/><br></br>
            </div>  
            <div>
               <label style={{fontFamily: "Montserrat",fontSize: "20px",fontWeight: "600", display: "block",marginLeft:"100px"}}>Email ID  </label><br></br>
              <input type="text"  style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6",marginRight:"20px",width:"40vh",marginLeft:"100px"}}/>
            </div>
            </div>
         <br></br>
            <div className="d-flex ">
            <div>
            <label style={{fontFamily: "Montserrat",fontSize: "20px",fontWeight: "600",display: "block"}}>Password </label><br></br>
              <input type="password" style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6",marginRight:"20px",width:"40vh" }}/>
            </div>
            <div>
              <label style={{fontFamily: "Montserrat",fontSize: "20px",fontWeight: "600",display:"block",marginLeft:"100px"}}>Category </label><br></br>
    <div style={{width:"20vw",backgroundColor: "white",marginLeft:"30%",padding:"8px"}}    >
      <div style={{position:"relative"}} onClick={showCheckboxes}>        
       
        <select style={{width: "100%",fontWeight: "bold", padding: "10px", border: "2px solid #A6A6A6",color:"#474747"}}>
          <option >Select Category</option>
        </select>
        <div style={{position: "absolute",left: "0",right: "0",top: "0",  bottom: "0"}}></div>
      </div>
 
      <div id="checkBoxes" style={{display: "none",border: "2px #A6A6A6 solid",padding:"12px",borderRadius:"5px"}}>
        <label  style={{display:"block",padding:"2px"}}>
          <input type="checkbox" id="first"  style={{backgroundColor:"#0F0C29"}}/>
          Jewellery
        </label>
 
        <label  style={{display:"block",padding:"2px"}}> 
          <input type="checkbox" id="second"/>
          Political
        </label>
        <label style={{display:"block",padding:"2px"}}>
          <input type="checkbox" id="third"/>
          Restaurant
        </label>
        <label  style={{display:"block",padding:"2px"}}>
          <input type="checkbox" id="fourth"/>          
          Theaters
        </label>
      </div>
    </div>
            </div>
            </div>
            </div>
            <center>
            <Button onClick={()=>setShowAddUserSave(true)}
              variant="contained"
              style={{
                background:
                  "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                color: "white", // Set text color to white
                borderRadius: "5px", // Add border radius
                padding: "10px 80px 10px 80px", // Add padding for the button
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
                transition: "background-color 0.3s ease", // Add transition effect
                marginBottom:"30px",
                fontFamily:"Montserrat",
                fontWeight:"600",
                fontSize:"17px",
                textTransform:"none"
               
              }}
            >
              Save
            </Button>
            <AddUserSave
              
              show={showAddUserSave}
              title="User Successfully Added"
              onHide={() => setShowAddUserSave(false)}
            />
            </center>
 
           
          </Paper>
        </div>
        <Footer />
      </div>
    </div>
  );
};
 
export default AddUser;