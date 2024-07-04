import "./Marketplace.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {
  Paper,
  TableCell,
  TableHead,
  Table,
  TableRow,
  TableContainer,
  Button,
  Stack,
  PaginationItem,
  Pagination,
  Modal,
  Box,
  ButtonBase,
} from "@mui/material";
import { useState } from "react";
import edit from "./edit.png";
import trash from "./trash.png";
import Switch from "@mui/material/Switch";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { AddRounded } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";

const Marketplace = () => {
  const [showOriginalPaper, setShowOriginalPaper] = useState(true);
  const [showAddPoster, setShowAddPoster] = useState(false);
  const [showEditPoster, setShowEditPoster] = useState(false);
  const [showUpdatePoster, setShowUpdatePoster] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [addButtonIsClicked, setAddButtonIsClicked] = useState(false);
  const handleAddNew = () => {
    setShowOriginalPaper(false);
    setShowAddPoster(true); // Show the add poster Paper
    setShowEditPoster(false); // Hide the edit poster Paper
  };

  const handleEditPoster = () => {
    setShowOriginalPaper(false);
    setShowAddPoster(false); // Hide the add poster Paper
    setShowEditPoster(true); // Show the edit poster Paper
  };

  const handleUpdate = () => {
    console.log("Handling update, showing update poster...");
    setShowOriginalPaper(false);
    setShowAddPoster(false);
    setShowEditPoster(false);
    setShowUpdatePoster(true);
  };
  const handleSave = () => {
    // You might want to add saving logic here
    setShowOriginalPaper(true);
    setShowAddPoster(false);
    setShowEditPoster(false); // Reset to original state after saving
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top" style={{minHeight: "74%"}}>
          {showOriginalPaper && ( 
            <Paper elevation={10} className="papercategory">
              <div style={{
                fontFamily:'Lora',
                background: 'linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)',
                borderRadius:'20px 20px 0px 0px'
}}>
                <div className="letter" style={{marginLeft:'5%'}}>Market Place</div>
              </div>
              <div className="secondrow">
                <div className="secondletter" >
                </div>
                <div className="secondletter1">
                
                  <ButtonBase
                    className="notification-button"
                    style={{
                      border: "1px solid #24243E",
                      padding: ".42rem 1rem",
                      marginLeft: "10rem",
                      marginBottom:'8%',
                      borderRadius: "5px",
                      fontFamily: "Montserrat",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      setAddButtonIsClicked((prevState) => !prevState)
                      setShowOriginalPaper((prevState) => !prevState)
                    }
                    }
                  >
                    <AddRounded style={{ width: "20px", height: "20px" }} />{" "}
                    <span style={{ marginLeft: "5px" }}>Add New</span>
                  </ButtonBase>
                </div>
              </div>
              <center>
                <TableContainer className="table">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className="tablecell" style={{border:'1px 1px 0px 1px solid black'}}>No</TableCell>
                        <TableCell className="tablecell">Service Name</TableCell>
                        <TableCell className="tablecell">Price</TableCell>
                        <TableCell className="tablecell">Status</TableCell>
                        <TableCell className="tablecell">Action</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>16</TableCell>
                        <TableCell><Switch defaultChecked /> </TableCell>
                        <TableCell>
                          <img
                            src={edit}
                            alt="Edit"
                            className="actionIcon"
                            onClick={handleEditPoster}
                          />
                          &nbsp;&nbsp;
                          <img src={trash} alt="Trash" className="actionIcon" />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </center>
              <div className="end">
                <Stack spacing={2}>
                  <Pagination
                    style={{ display: "flex", justifyContent: "center" }}
                    shape="rounded"
                    count={2}
                    renderItem={(item) => (
                      <PaginationItem
                        style={{
                          borderRadius: "6px",
                          backgroundColor: item.selected
                            ? "#24243e"
                            : "transparent",
                            color: item.selected ? "white" : "black"
                        }}
                        {...item}
                      />
                    )}
                  />
                </Stack>
              </div>
            </Paper>
          )}

          {addButtonIsClicked && (
            <Paper elevation={10} className="papercategory">
              <div className="heading">
                <div className="letter1">Add Market Place</div>
              </div>
              <div className="inputfield">
                <label className="category-label">Name</label>
                <input
                  type="text"
                  className="category-box"
                  placeholder="Enter name"
                />
              </div>
              <br />
              <div className="inputfield">
                <label className="category-label">Select image</label>
                <input type="file" className="category-box20" />
              </div>
              <Button
                onClick={() => setModalShow(true)}
                className="category-button"
              >
                Save
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Paper>
          )}

          {showEditPoster && (
            <Paper elevation={10} className="papercategory">
              <div className="heading">
                <div className="letter1">Update Poster</div>
              </div>
              <form>
                <div className="inputfield">
                  <label className="category-label">Name</label>
                  <input
                    type="text"
                    className="category-box"
                    placeholder="Enter name"
                  />
                  <br></br>
                  <br></br>
                  <label className="category-label">File</label>
                  <input
                    type="file"
                    style={{
                      padding: "4px",
                      width: "18%",
                      height: "20%",
                      border: "1px solid grey",
                      marginLeft: "12%",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </form>

              <Button
                onClick={() => setModalShow(true)}
                className="category-button"
              >
                Update
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Paper>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Marketplace;
