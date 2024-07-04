import "./Jewelrate.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  Paper,
  Button,
  ButtonBase,
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import morePng from "../../assets/ep_more.png";
import editPng from "../../assets/akar-icons_edit.png";
import deletePng from "../../assets/ph_trash-light.png";
import JewelSave from "./MyVerticallyCenteredModal";
import JewelUpdate from "./MyVerticallyCenteredModal";
import { useState } from "react";
import MyVerticallyCenteredModal from "../../components/Modal/Modal";
import Footer from "../../components/footer/Footer";

const Jewelrate = () => {
  const [JewelDeleteShow, setJewelDeleteShow] = useState(false);
  function createData(id, time, location, gold_rate, silver_rate) {
    return { id, time, location, gold_rate, silver_rate };
  }

  const [showJewelPaper, setShowJewelPaper] = useState(true);
  const [showNewJewelPaper, setShowNewJewelPaper] = useState(false);
  const [showEditJewelPaper, setShowEditJewelPaper] = useState(false);
  const [showJewelSave, setShowJewelSave] = useState(false);
  const [showJewelUpdate, setShowJewelUpdate] = useState(false);

  const handleAddNewJewel = () => {
    setShowJewelPaper(false);
    setShowNewJewelPaper(true); // Show the new Paper
  };

  const handleEditJewelPaper = () => {
    setShowJewelPaper(false);
    setShowEditJewelPaper(true); // Show the new Paper
  };

  const JewelrateData = [
    createData(1, "Morning", "Madurai", "5000", "90.70"),
    createData(2, "Morning", "Virudhunagar", "5000", "90.70"),
    createData(3, "Morning", "Chennai", "5000", "90.70"),
    createData(4, "Evening", "Rajapalayam", "5000", "90.70"),
  ];

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        {showJewelPaper && (
          <div className="top" style={{ boxShadow: "none", padding: "0" }}>
            <Container>
              <Row>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <ButtonBase className="AddButton" onClick={handleAddNewJewel}>
                    {" "}
                    + Add New{" "}
                  </ButtonBase>
                </div>
              </Row>
              <Row className="mt-5">
                <Col className="p-0">
                  <Card
                    style={{ boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc" }}
                  >
                    <Card.Header
                      as="h4"
                      className="p-3"
                      style={{
                        color: "white",
                        fontFamily: "Lora",
                        background:
                          "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          style={{
                            fontFamily: "Lora",
                            fontSize: "2rem",
                            fontWeight: "500",
                            paddingLeft: "1rem",
                          }}
                        >
                          Jewel Rate
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell
                                style={{
                                  backgroundColor: "rgba(243, 247, 254, 1)",
                                  fontWeight: "600",
                                  fontFamily: "Montserrat",
                                  color: "rgba(36, 36, 62, 1)",
                                }}
                                align="center"
                              >
                                Time
                              </TableCell>
                              <TableCell
                                style={{
                                  backgroundColor: "rgba(243, 247, 254, 1)",
                                  fontWeight: "600",
                                  fontFamily: "Montserrat",
                                  color: "rgba(36, 36, 62, 1)",
                                }}
                                align="center"
                              >
                                Location
                              </TableCell>
                              <TableCell
                                style={{
                                  backgroundColor: "rgba(243, 247, 254, 1)",
                                  fontWeight: "600",
                                  fontFamily: "Montserrat",
                                  color: "rgba(36, 36, 62, 1)",
                                }}
                                align="center"
                              >
                                Gold Rate
                              </TableCell>
                              <TableCell
                                style={{
                                  backgroundColor: "rgba(243, 247, 254, 1)",
                                  fontWeight: "600",
                                  fontFamily: "Montserrat",
                                  color: "rgba(36, 36, 62, 1)",
                                }}
                                align="center"
                              >
                                Silver Rate
                              </TableCell>
                              <TableCell
                                style={{
                                  backgroundColor: "rgba(243, 247, 254, 1)",
                                  fontWeight: "600",
                                  fontFamily: "Montserrat",
                                  color: "rgba(36, 36, 62, 1)",
                                }}
                                align="center"
                              >
                                <Image src={morePng} alt="Edit" height={26} />
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {JewelrateData.map((row) => (
                              <TableRow
                                key={row.id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell
                                  align="center"
                                  component="th"
                                  scope="row"
                                >
                                  {row.location}
                                </TableCell>
                                <TableCell align="center">
                                  &#8377; {row.gold_rate}
                                </TableCell>
                                <TableCell align="center">
                                  &#8377; {row.silver_rate}
                                </TableCell>
                                <TableCell align="center">
                                  <ButtonBase style={{ margin: "0 .25rem" }}>
                                    <Image src={editPng}   onClick={handleEditJewelPaper}/>
                                  </ButtonBase>
                                  <ButtonBase
                                    onClick={() => setJewelDeleteShow(true)}
                                    style={{ margin: "0 .25rem" }}
                                  >
                                    <Image src={deletePng} />
                                  </ButtonBase>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <MyVerticallyCenteredModal
                        title="Delete"
                        body="Are You Sure You Want to Delete ?"
                        type={{
                          name: "Delete",
                        }}
                        show={JewelDeleteShow}
                        onHide={() => setJewelDeleteShow(false)}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Stack spacing={2}>
                        <Pagination
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: "6px",
                          }}
                          shape="rounded"
                          count={2}
                          renderItem={(item) => (
                            <PaginationItem
                              style={{
                                borderRadius: "6px",
                                backgroundColor: item.selected
                                  ? "#24243e"
                                  : "transparent", // Change #yourSelectedColor to the color you want for the selected page
                                color: item.selected ? "White" : "black",
                              }}
                              {...item}
                            />
                          )}
                        />
                      </Stack>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3 mb-5" style={{ justifyContent: "flex-end" }}>
                <Button
                  style={{
                    width: "fit-content",
                    padding: ".5rem 1rem",
                    fontFamily: "Montserrat",
                    marginBottom: "50px",
                    marginRight: "80px",
                    color: "white",
                    marginTop: "3%",
                    background:
                      "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                  }}
                >
                  Download&nbsp;
                  <FileDownloadOutlined />
                </Button>
              </Row>
            </Container>
          </div>
        )}

        {showNewJewelPaper && (
          <Paper
            elevation={10}
            style={{
              width: "95%",
              margin: "1rem auto",
              height: "80vh",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                background:
                  "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <div
                style={{
                  color: "white",
                  padding: "10px",
                  fontFamily: "Lora",
                  fontSize: "25px",
                  paddingLeft: "30px",
                  textAlign: "left",
                }}
              >
                Add Jewel Rate
              </div>
            </div>

            <div
              style={{
                marginTop: "80px",
                marginLeft: "200px",
                marginBottom: "100px",
              }}
            >
              <div className="d-flex ">
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                    }}
                  >
                    Time{" "}
                  </label>
                  <br></br>
                  <select
                    style={{
                      padding: "8px 8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6 ",
                      marginRight: "20px",
                      width: "40vh",
                    }}
                  >
                    <option>Morning</option>
                    <option>Evening</option>
                  </select>

                  <br></br>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                      marginLeft: "100px",
                    }}
                  >
                    Location{" "}
                  </label>
                  <br></br>
                  <select
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                      marginLeft: "100px",
                    }}
                  >
                    <option>Madurai</option>
                    <option>chennai</option>
                    <option>Virudhunagar</option>
                    <option>Rajapalayam</option>
                  </select>
                </div>
              </div>
              <br></br>
              <div className="d-flex ">
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                    }}
                  >
                    Gold Rate{" "}
                  </label>
                  <br></br>
                  <input
                    type="text"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                      marginLeft: "100px",
                    }}
                  >
                    Silver Rate{" "}
                  </label>
                  <br></br>
                  <input
                    type="text"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                      marginLeft: "28%",
                    }}
                  />
                </div>
              </div>
            </div>

            <center>
              <Button
                onClick={() => setShowJewelSave(true)}
                variant="contained"
                style={{
                  background:
                    "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                  color: "white", // Set text color to white
                  borderRadius: "5px", // Add border radius
                  padding: "10px 80px 10px 80px", // Add padding for the button
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
                  transition: "background-color 0.3s ease", // Add transition effect
                  marginBottom: "30px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "17px",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
              <JewelSave
                show={showJewelSave}
                title="Jewel Rate Successfully Added"
                onHide={() => setShowJewelSave(false)}
              />
            </center>
          </Paper>
        )}

        {showEditJewelPaper && (
          <Paper
            elevation={10}
            style={{
              width: "95%",
              margin: "1rem auto",
              height: "80vh",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                background:
                  "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <div
                style={{
                  color: "white",
                  padding: "10px",
                  fontFamily: "Lora",
                  fontSize: "25px",
                  paddingLeft: "30px",
                  textAlign: "left",
                }}
              >
                Edit Jewel Rate
              </div>
            </div>

            <div
              style={{
                marginTop: "80px",
                marginLeft: "200px",
                marginBottom: "100px",
              }}
            >
              <div className="d-flex ">
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                    }}
                  >
                    Time{" "}
                  </label>
                  <br></br>
                  <select
                    style={{
                      padding: "8px 8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6 ",
                      marginRight: "20px",
                      width: "40vh",
                    }}
                  >
                    <option>Morning</option>
                    <option>Evening</option>
                  </select>

                  <br></br>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                      marginLeft: "100px",
                    }}
                  >
                    Location{" "}
                  </label>
                  <br></br>
                  <select
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                      marginLeft: "100px",
                    }}
                  >
                    <option>Madurai</option>
                    <option>chennai</option>
                    <option>Virudhunagar</option>
                    <option>Rajapalayam</option>
                  </select>
                </div>
              </div>
              <br></br>
              <div className="d-flex ">
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                    }}
                  >
                    Gold Rate{" "}
                  </label>
                  <br></br>
                  <input
                    type="text"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "block",
                      marginLeft: "100px",
                    }}
                  >
                    Silver Rate{" "}
                  </label>
                  <br></br>
                  <input
                    type="text"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "2px solid #A6A6A6",
                      marginRight: "20px",
                      width: "40vh",
                      marginLeft: "28%",
                    }}
                  />
                </div>
              </div>
            </div>

            <center>
              <Button
                onClick={() => setShowJewelUpdate(true)}
                variant="contained"
                style={{
                  background:
                    "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                  color: "white", // Set text color to white
                  borderRadius: "5px", // Add border radius
                  padding: "10px 80px 10px 80px", // Add padding for the button
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
                  transition: "background-color 0.3s ease", // Add transition effect
                  marginBottom: "30px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "17px",
                  textTransform: "none",
                }}
              >
                Update
              </Button>
              <JewelSave
                show={showJewelUpdate}
                title="Jewel Rate Successfully Updated"
                onHide={() => setShowJewelUpdate(false)}
              />
            </center>
          </Paper>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Jewelrate;
