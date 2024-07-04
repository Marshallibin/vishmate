import { Clear, FileDownloadOutlined, Search } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React, { useRef } from "react";
import {
  FormControl,
  InputAdornment,
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  makeStyles,
} from "@mui/material";
import "@fontsource/montserrat";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Form,
  Row,
} from "react-bootstrap";
import whiteuser from "./whiteuser.png";
import blueuser from "./blueuser.png";
import whiteregister from "./whiteregister.png";
import blueregister from "./blueregister.png";
import rightarrow from "./rightarrow.png";
import cinemaImage from"./cinema.png";
import EditIcon from "./edit.png";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Users.scss";

const Users = () => {
  const [showpaidMembers, setShowpaidMembers] = useState(true);
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [showOriginalPaper, setShowOriginalPaper] = useState(true);
  const [showNewPaper, setShowNewPaper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(cinemaImage);
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    // Trigger file input click when edit icon is clicked
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set the selected image to be displayed
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleView = () => {
    setShowOriginalPaper(false);
    setShowNewPaper(true); // Show the new Paper
  };
  console.log(showNewPaper);

  function createData(
    Join_Date,
    Customer_Name,
    Bussiness,
    Mobile_Number,
    Email
  ) {
    return { Join_Date, Customer_Name, Bussiness, Mobile_Number, Email };
  }

  const paidMembers = [
    createData(
      "20/04/2024",
      "Tushar",
      "Theatre",
      "6389894878",
      "tushar@gmail.com"
    ),
    createData(
      "18/04/2024",
      "Reenu",
      "Jwellery",
      "9356897989",
      "reenu@gmail.com"
    ),
    createData("17/04/2024", "Sonu", "Theatre", "8597894545", "sonu@gmail.com"),
  ];

  function registerMembers(register_date, Customer_Name, Mobile_Number, Email) {
    return { register_date, Customer_Name, Mobile_Number, Email };
  }

  const registeredMembers = [
    registerMembers("20/04/2024", "Tushar", "6389894878", "tushar@gmail.com"),
    registerMembers("18/04/2024", "Reenu", "9356897989", "arun@gmail.com"),
    registerMembers("17/04/2024", "sonu", "8597894545", "renu@gmail.com"),
  ];

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div
          className="top"
          style={{ boxShadow: "none", padding: "0", margin: "0" }}
        >
          <Container style={{ backgroundColor: "#EFEBEB" }}>
            {!showNewPaper && (
              <>
                <Row
                  className="mt-5"
                  style={{
                    borderRadius: "1rem",
                    height: "150px",
                    boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc",
                    overflow: "hidden",
                  }}
                >
                  <Col className="bg-white p-0">
                    <div
                      onClick={() => setShowpaidMembers(true)}
                      className={`d-flex justify-content-center align-items-center ${
                        showpaidMembers ? "inputbutton" : ""
                      }`}
                      style={{
                        borderRadius: "1rem",
                        height: "100%",
                        cursor: "pointer",
                        color: showpaidMembers ? "white" : "#24243E",
                      }}
                    >
                      {showpaidMembers ? (
                        <img src={whiteuser} />
                      ) : (
                        <img src={blueuser} />
                      )}
                      <p
                        style={{
                          textAlign: "center",
                          marginLeft: "1rem",
                          fontFamily: "Montserrat",
                          fontSize: "1.5rem",
                          fontWeight: "500",
                        }}
                      >
                        Paid Members
                      </p>
                    </div>
                  </Col>
                  <Col className="bg-white p-0">
                    <div
                      onClick={() => setShowpaidMembers(false)}
                      className={`d-flex justify-content-center align-items-center ${
                        showpaidMembers ? "" : "inputbutton"
                      }`}
                      style={{
                        borderRadius: "1rem",
                        height: "100%",
                        cursor: "pointer",
                        color: showpaidMembers ? "#24243E" : "white",
                      }}
                    >
                      {showpaidMembers ? (
                        <img src={blueregister} />
                      ) : (
                        <img src={whiteregister} />
                      )}
                      <p
                        style={{
                          textAlign: "center",
                          marginLeft: "1rem",
                          fontFamily: "Montserrat",
                          fontSize: "1.5rem",
                          fontWeight: "500",
                        }}
                      >
                        Registered Members
                      </p>
                    </div>
                  </Col>
                </Row>
                {showpaidMembers && (
                  <Row className="mt-5">
                    <Col className="p-0">
                      <Card
                        style={{
                          boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc",
                        }}
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
                              User Report
                            </div>
                            <div>
                              <FormControl>
                                <TextField
                                  style={{ borderRadius: "6px" }}
                                  className="bg-white"
                                  size="small"
                                  variant="outlined"
                                  placeholder="Search..."
                                  onChange={handleChange}
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
                                        onClick={handleClick}
                                      >
                                        <Clear />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </FormControl>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <TableContainer>
                            <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                            >
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
                                    Join Date
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
                                    Customer Name
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
                                    Bussiness
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
                                    Mobile Number
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
                                    Email
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
                                    View
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {paidMembers.map((row) => (
                                  <TableRow
                                    key={row.Email}
                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell align="center">
                                      {row.Join_Date}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      component="th"
                                      scope="row"
                                    >
                                      {row.Customer_Name}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Bussiness}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Mobile_Number}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Email}
                                    </TableCell>
                                    {/* <TableCell align="center">
                                {row.view}
                              </TableCell> */}
                                    <TableCell
                                      align="center"
                                      style={{ textAlign: "center" }}
                                    >
                                      <img
                                        src={rightarrow}
                                        onClick={handleView}
                                      ></img>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Card.Body>
                        {/* Render the new Paper only if showNewPaper is true */}

                        <Card.Footer>
                          <Stack spacing={2}>
                            <Pagination
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              shape="rounded"
                              count={10}
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
                    <div>
                      <Row
                        className="mt-3 mb-5"
                        style={{ justifyContent: "flex-end" }}
                      >
                        <Button
                          style={{
                            width: "fit-content",
                            padding: ".5rem 1rem",
                            fontFamily: "Montserrat",
                            marginBottom: "50px",
                            marginRight: "80px",
                            background:
                              "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                          }}
                        >
                          Download&nbsp;
                          <FileDownloadOutlined />
                        </Button>
                      </Row>
                    </div>
                  </Row>
                )}

                {!showpaidMembers && (
                  <Row className="mt-5">
                    <Col className="p-0">
                      <Card
                        style={{
                          boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc",
                        }}
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
                              User Report
                            </div>
                            <div>
                              <FormControl>
                                <TextField
                                  style={{ borderRadius: "6px" }}
                                  className="bg-white"
                                  size="small"
                                  variant="outlined"
                                  placeholder="Search..."
                                  onChange={handleChange}
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
                                        onClick={handleClick}
                                      >
                                        <Clear />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </FormControl>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                          <TableContainer>
                            <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                            >
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
                                    Register Date
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
                                    Customer Name
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
                                    Mobile Number
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
                                    Email
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {registeredMembers.map((row) => (
                                  <TableRow
                                    key={row.Email}
                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell align="center">
                                      {row.register_date}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      component="th"
                                      scope="row"
                                    >
                                      {row.Customer_Name}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Mobile_Number}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Email}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Card.Body>
                        <Card.Footer>
                          <Stack spacing={2}>
                            <Pagination
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              shape="rounded"
                              count={10}
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
                    <div>
                      <Row
                        className="mt-3 mb-5"
                        style={{ justifyContent: "flex-end" }}
                      >
                        <br></br>
                        <br></br>
                        <Button
                          style={{
                            width: "fit-content",
                            padding: ".5rem 1rem",
                            fontFamily: "Montserrat",
                            marginBottom: "20px",
                            marginRight: "80px",
                            background:
                              "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                          }}
                        >
                          Download&nbsp;
                          <FileDownloadOutlined />
                        </Button>
                      </Row>
                    </div>
                  </Row>
                )}
              </>
            )}
            {showNewPaper && (
              <div className="download">
                <Paper
                  elevation={10}
                  style={{
                    width: "90%",
                    height: "90%",
                    margin: "2rem auto",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      color: "#302B63",
                      textAlign: "center",
                      padding: "30px 0",
                      fontSize: "35px",
                      fontFamily: "Lora",
                      fontWeight: "600",
                    }}
                  >
                    Tushar Cinemas
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div style={{ position: "relative" }}>
                        <img
                          src={selectedImage}
                          alt="Selected"
                          style={{
                            width: "250px",
                            height: "200px",
                            paddingRight: "50px",
                          }}
                        />
                        {/* Edit icon positioned at the top right corner */}
                        <div
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            bottom: "10px",
                            right: "70px",
                            background:
                              "linear-gradient(180deg, #0F0C29 0%, #302B63 48.5%, #24243E 100%)",
                            borderRadius: "10px",
                          }}
                          onClick={handleEditClick}
                        >
                          <img src={EditIcon} />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>

                      <center>
                        <span
                          style={{
                            fontFamily: "Lora",
                            color: "#302B63",
                            fontSize: "20px",
                            marginRight: "50px",
                            fontWeight: "600",
                          }}
                        >
                          Logo
                        </span>
                      </center>
                    </div>
                    <div>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        User Name
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Bussiness
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Mobile Number
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",
                          border: "2px solid #A6A6A6",
                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Alternative Mobile Number :{" "}
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Email
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Website Name
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",
                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Membership
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",

                          marginBottom: "30px",
                          border: "none",

                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                      <div style={{ display: "inline" }}>
                        <label
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          Address
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </label>
                        <textarea
                          readOnly={true}
                          style={{
                            padding: "3px",
                            rows: "1",
                            resize: "none",
                            cols: "20",
                            width: "20vw",
                            marginLeft: "40px",
                            height: "10vh",
                            border: "none",
                          }}
                        ></textarea>
                      </div>
                      <br></br>
                      <br></br>
                      <label
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Instagram ID
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :{" "}
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        style={{
                          padding: "8px",
                          borderRadius: "4px",
                          border: "none",
                          marginBottom: "30px",

                          marginLeft: "40px",
                        }}
                      />
                      <br></br>
                    </div>
                  </div>
                </Paper>
                <Row
                  className="mt-3 mb-5"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Button
                    style={{
                      width: "fit-content",
                      padding: ".5rem 1rem",
                      fontFamily: "Montserrat",
                      marginBottom: "50px",
                      marginRight: "80px",

                      background:
                        "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                    }}
                  >
                    Download&nbsp;
                    <FileDownloadOutlined />
                  </Button>
                </Row>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Users;
