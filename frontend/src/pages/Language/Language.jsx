import React, { useState } from "react";
import "./Language.scss";
import NotifySave from "./MyVerticallyCenteredModal";
import NotifyUpdate from "./MyVerticallyCenteredModal";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TextField,
  InputAdornment,
  FormControl,
} from "@mui/material";
import "@fontsource/lora";
import "@fontsource/montserrat";  
import englishImage from "./english.png";
import tamilImage from "./tamil.png";
import editImage from "./edit.png";
import trashImage from "./trash.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Clear, Search } from "@mui/icons-material";
import MyVerticallyCenteredModal from "./Modal";
import Footer from "../../components/footer/Footer";

const Language = () => {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const[modalShow, setModalShow] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend or perform actions)
    console.log("Name:", name);
    console.log("Selected Image:", selectedImage);
    // Reset form fields after submission
    setName("");
    setSelectedImage(null);
  };
  const [showNotifySave,setShowNottifySave]=useState(false);
  const [showNotifyUpdate,setShowNottifyUpdate]=useState(false);

  const [showClearIcon, setShowClearIcon] = useState("none");
  const [showOriginalPaper, setShowOriginalPaper] = useState(true);
  const [showNewPaper, setShowNewPaper] = useState(false);
  const [showUpdatePaper,setShowUpdatePaper]=useState(false);

  const [entries, setEntries] = useState([
    { id: 1, name: "English", status: false },
    { id: 2, name: "Tamil", status: false },
  ]);

  const handleAddNew = () => {
    setShowOriginalPaper(false);
    setShowNewPaper(true); // Show the new Paper
  };

  const handleCloseNewPaper = () => {
    setShowOriginalPaper(true);
    setShowNewPaper(false); // Hide the new Paper
  };

  const handleimg = () => {
    setShowOriginalPaper(false);
    setShowUpdatePaper(true); // Show the new Paper
  };

  const handleCloseUpdatePaper = () => {
    setShowOriginalPaper(true);
    setShowUpdatePaper(false); // Hide the new Paper
  };
  const handleToggleChange = (id) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, status: !entry.status } : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        {showOriginalPaper && (
          <Paper elevation={10} style={{width: "95%",margin: "1rem auto",height: "80vh",borderRadius: "20px 20px 0px 0px"}}>
            <div style={{ width: "100%",height: "auto",background: "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",borderRadius: "20px 20px 0px 0px" }}>
              <div style={{ color: "white",padding: "10px",fontFamily:"Lora",fontSize: "25px",paddingLeft:"30px",textAlign:"center"}}>Language</div>
            </div>
            <div className="secondletter">
              <div style={{fontFamily:"Montserrat",fontWeight:"600",fontSize:"20px"}}>Show</div>
              <input type="text" style={{ width: "50px", height: "30px", marginLeft:"20px", marginRight:"5px",alignContent:"center"}} />
              <span style={{fontFamily:"Montserrat",fontWeight:"600",fontSize:"20px",marginLeft:"10px"}}>entries</span>
            
              <FormControl>
                <TextField
                  style={{ borderRadius: "9px", marginLeft:"550px"}}
                  
                  size="small"
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                      >
                        <Clear />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <h2 className="buttonstyle" onClick={handleAddNew}>
                + Add New
              </h2>
           
            </div>
            <div style={{padding:"30px",borderRadius:"16px"}}>
              <TableContainer>
                <Table className="table table-bordered">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontFamily:"Lora",fontWeight:"500",fontSize:"20px", textAlign:"center"}}>No</TableCell>
                      <TableCell style={{fontFamily:"Lora",fontWeight:"500",fontSize:"20px", textAlign:"center"}}>Name</TableCell>
                      <TableCell style={{fontFamily:"Lora",fontWeight:"500",fontSize:"20px", textAlign:"center"}}>Status</TableCell>
                      <TableCell style={{fontFamily:"Lora",fontWeight:"500",fontSize:"20px", textAlign:"center"}}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {entries.map((entry, index) => (
                      <TableRow key={entry.id}>                 
                        <TableCell style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px", textAlign:"center"}}>{index + 1}</TableCell>
                        <TableCell style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px"}} >
                          {/* Display image based on language */}
                          {entry.name === "English" && (
                            <>
                              <img
                                src={englishImage}
                                alt="English"
                                className="languageImage"
                              />
                              {entry.name}
                            </>
                          )}
                          {entry.name === "Tamil" && (
                            <>
                              <img
                                src={tamilImage}
                                alt="Tamil"
                                className="languageImage"
                              />
                              {entry.name}
                            </>
                          )}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }} >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <div className="form-check form-switch">
                            <input  
                              className="form-check-input"
                              type="checkbox"
                              id={`toggleSwitch-${entry.id}`}
                              checked={entry.status}
                              onChange={() => handleToggleChange(entry.id)}
                              style={{
                                cursor: 'pointer', // Optional: Add pointer cursor
                                width: '56px', // Set width of the toggle switch
                                height: '24px', 
                                transition:'0.5s ease',
                                backgroundColor: entry.status ? '#302B63' : '#dee2e6', // Toggle color based on status
                                borderColor: entry.status ? '#302B63':'#D7D1D1',
                                outline:"none" 
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`toggleSwitch-${entry.id}`}
                              
                            ></label>
                          </div>
                          </div>
                        </TableCell>
                        <TableCell style={{justifyContent:"center",display:"flex"}}>
                          <img 
                            src={editImage}
                            alt="Edit"
                            className="actionIcon"
                            onClick={handleimg}
                          /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <img
                            src={trashImage}
                            alt="Trash"
                            className="actionIcon"
                            onClick={()=>setModalShow(true)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
              <MyVerticallyCenteredModal
                    title="Delete"
                    body="Are You Sure You Want to Delete ?"
                    type={{
                      className: "danger",
                      name: "Delete"
                    }}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
            </div>
          </Paper>
        )}

        {/* Render the new Paper only if showNewPaper is true */}
        {showNewPaper && (
          <Paper elevation={10} style={{width: "95%",margin: "1rem auto",height: "80vh",borderRadius: "20px 20px 0px 0px"}}>
            <div style={{ width: "100%",height: "auto",background: "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",borderRadius: "20px 20px 0px 0px" }}>
              <div style={{ color: "white",padding: "10px",fontFamily:"Lora",fontSize: "25px",paddingLeft:"30px",textAlign:"center"}}>Add Language</div>
            </div>
            
          <div style={{ marginTop: "80px", marginLeft: "100px", marginBottom:"100px" }}>
            
          <label style={{fontFamily:"Montserrat",fontWeight:"600",fontSize:"20px"}}>Language </label>
            <input type="text"  placeholder="Enter Language Name" style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6", marginBottom:"30px", marginLeft:"7%",width:"25vw",height:"7vh" }}/>
               <br></br>
           
              <label style={{fontFamily:"Montserrat",fontWeight:"600",fontSize:"20px"}}>Select Image </label>
              <input type="file" className="label" style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6", marginLeft:"50px",width:"25vw",height:"7vh" }} />
            
          </div>
            
            <center> 
            <Button onClick={()=>setShowNottifySave(true)}
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
            <NotifySave              
                show={showNotifySave}
                title="Language Successfully Added"
                onHide={() => setShowNottifySave(false)}
              />
            </center>
            

            
            

            {/* <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <div className="formgroupall">
              <div className="formGroup">
                <label htmlFor="nameInput">Name:</label>
                <input
                  type="text"
                  id="nameInput"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter Language Name"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="imageInput">Select Image:</label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              </div>
              <Button type="submit" className="savebutton">
                Save
              </Button>
            </form>
          </div>            */}
          </Paper>
                  
        )}

{showUpdatePaper && (
          <Paper elevation={10} style={{width: "95%",margin: "1rem auto",height: "80vh",borderRadius: "20px 20px 0px 0px"}}>
            <div style={{ width: "100%",height: "auto",background: "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",borderRadius: "20px 20px 0px 0px" }}>
              <div style={{ color: "white",padding: "10px",fontFamily:"Lora",fontSize: "25px",paddingLeft:"30px",textAlign:"center"}}>Update Language</div>
            </div>
            
          <div style={{ marginTop: "80px", marginLeft: "100px", marginBottom:"100px" }}>
            
              <label className="label">Language </label>
              <input type="text"  placeholder="English"  readOnly="true" style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6", marginBottom:"30px", marginLeft:"65px",width:"21vw"}}/>
               <br></br>
            
              <label className="label">Select Image </label>
              <input type="file" className="label" style={{ padding: "8px", borderRadius: "4px", border: "2px solid #A6A6A6", marginLeft:"40px",width:"21vw" }} />
            
          </div>
            
            <center> 
            <Button onClick={()=>setShowNottifyUpdate(true)}
              variant="contained"
              style={{
                background:
                  "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                color: "white", // Set text color to white
                borderRadius: "5px", // Add border radius
                padding: "10px 80px 10px 80px", // Add padding for the button
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
                transition: "background-color 0.3s ease", // Add transition effect
                marginBottom:"100px",
                textTransform:"none",
                fontSize:"17px",
                fontWeight:"600",
                fontFamily:"Montserrat",
                
              }}
            >
              Update
            </Button> 
            <NotifyUpdate
              
                show={showNotifyUpdate}
                title="Language Successfully Updated"
                onHide={() => setShowNottifyUpdate(false)}
              />
            </center>
            </Paper>
)}
  <Footer />
      </div>
    </div>
      
  );
};

export default Language;
