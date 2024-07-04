import "./Category.scss";
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
import search from "./search.png";
import { useState } from "react";
import edit from "./edit.png";
import trash from "./trash.png";
import Switch from "@mui/material/Switch";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import MyVerticallyDeleteModal from "../../components/Modal/Modal";
import { AddRounded } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";

const Category = () => {
  const [showOriginalPaper, setShowOriginalPaper] = useState(true);
  const [showAddPoster, setShowAddPoster] = useState(false);
  const [showEditPoster, setShowEditPoster] = useState(false);
  const [showUpdatePoster, setShowUpdatePoster] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
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
    setShowDeleteModal(true);
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
        <div className="top">
          {showOriginalPaper && (
            <Paper elevation={10} className="papercategory">
              <div className="heading">
                <div className="letter">Category</div>
              </div>
              <div className="secondrow">
                <div className="secondletter">
                  <div style={{ fontFamily: "Montserrat" }}>Show</div>
                  <input
                    type="text"
                    style={{ width: "40px", height: "20px" }}
                  />
                  entries
                </div>
                <div className="secondletter1">
                  <div
                    className="search-container"
                    style={{ position: "relative" }}
                  >
                    <input
                      type="search"
                      placeholder="Search..."
                      className="searchbar"
                      style={{
                        width: "200px",
                        height: "30px",
                        paddingLeft: "30px",
                      }}
                    />
                    <img
                      src={search}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "16px",
                        width: "16px",
                      }}
                      alt="search icon"
                    />
                  </div>
                  <ButtonBase
                    className="notification-button"
                    style={{
                      border: "1px solid #24243E",
                      padding: ".42rem 1rem",
                      marginLeft: "1rem",
                      borderRadius: "5px",
                      fontFamily: "Montserrat",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      setAddButtonIsClicked((prevState) => !prevState);
                      setShowOriginalPaper((prevState) => !prevState);
                    }}
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
                        <TableCell className="tablecell">No</TableCell>
                        <TableCell className="tablecell">Name</TableCell>
                        <TableCell className="tablecell">Status</TableCell>
                        <TableCell className="tablecell">Action</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>N</TableCell>
                        <TableCell>
                          <Switch defaultChecked />{" "}
                        </TableCell>
                        <TableCell>
                          <img
                            src={edit}
                            alt="Edit"
                            className="actionIcon"
                            onClick={handleEditPoster}
                          />
                          &nbsp;&nbsp;
                          <img
                            src={trash}
                            onClick={() => setShowDeleteModal(true)}
                            alt="Trash"
                            className="actionIcon"
                          />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
                <MyVerticallyDeleteModal
                  title="Delete"
                  body="Are You Sure You Want to Delete ?"
                  type={{
                    name: "Delete",
                  }}
                  show={showDeleteModal}
                  onHide={() => setShowDeleteModal(false)}
                />
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
                <div className="letter1">Add Poster</div>
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
                onClick={() => setShowSaveModal(true)}
                className="category-button"
              >
                Save
              </Button>
              <MyVerticallyCenteredModal
                title="Poster Successfully Added"
                show={showSaveModal}
                onHide={() => setShowSaveModal(false)}
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
                title="Poster Successfully Updated"
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

export default Category;
