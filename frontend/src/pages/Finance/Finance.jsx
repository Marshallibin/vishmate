import { Clear, FileDownloadOutlined, Search } from "@mui/icons-material";
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
import { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import goldStar from "../../assets/gold_star.png";
import silverStar from "../../assets/silver_star.png";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Finance.scss";
import Footer from "../../components/footer/Footer";

const Finance = () => {
  const [showGoldMembers, setShowGoldMembers] = useState(true);
  const [showClearIcon, setShowClearIcon] = useState("none");

  function createData(
    due_date,
    customer_name,
    subscription,
    mobile_number,
    email
  ) {
    return { due_date, customer_name, subscription, mobile_number, email };
  }

  const goldMembers = [
    createData(
      "10/02/2024",
      "Tushar",
      "2999/Y",
      "9848203439",
      "tushar@gmail.com"
    ),
    createData("15/03/2024", "Arun", "2999/Y", "9848203439", "arun@gmail.com"),
    createData("02/04/2024", "Renu", "2999/Y", "9848203439", "renu@gmail.com"),
    createData("31/05/2024", "Sonu", "2999/Y", "9848203439", "sonu@gmail.com"),
    createData(
      "12/07/2024",
      "David",
      "2999/Y",
      "9848203439",
      "david@gmail.com"
    ),
  ];

  const silverMembers = [
    createData("10/02/2024", "John", "299/M", "9848203439", "tushar@gmail.com"),
    createData("15/03/2024", "Joe", "299/M", "9848203439", "arun@gmail.com"),
    createData("02/04/2024", "Jen", "299/M", "9848203439", "renu@gmail.com"),
    createData("31/05/2024", "Michel", "299/M", "9848203439", "sonu@gmail.com"),
    createData(
      "12/07/2024",
      "Stephen",
      "299/M",
      "9848203439",
      "david@gmail.com"
    ),
  ];

  let tableData = showGoldMembers ? goldMembers : silverMembers;

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
          <Container className="px-4">
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
                  onClick={() => setShowGoldMembers(true)}
                  className={`d-flex justify-content-center align-items-center ${
                    showGoldMembers ? "gold-active" : ""
                  }`}
                  style={{
                    borderRadius: "1rem",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Image src={goldStar} />
                  <p
                    style={{
                      textAlign: "center",
                      marginLeft: "1rem",
                      fontFamily: "Montserrat",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    Premium Gold
                    <br />
                    Members
                  </p>
                </div>
              </Col>
              <Col className="bg-white p-0">
                <div
                  onClick={() => setShowGoldMembers(false)}
                  className={`d-flex justify-content-center align-items-center ${
                    showGoldMembers ? "" : "silver-active"
                  }`}
                  style={{
                    borderRadius: "1rem",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Image src={silverStar} />
                  <p
                    style={{
                      textAlign: "center",
                      marginLeft: "1rem",
                      fontFamily: "Montserrat",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    Standard Silver
                    <br />
                    Members
                  </p>
                </div>
              </Col>
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
                        Paid Members
                      </div>
                      <div>
                        <FormControl>
                          <TextField
                            style={{ borderRadius: "6px" }}
                            className="bg-white br-none ot-none"
                            size="small"
                            variant="outlined"
                            onChange={handleChange}
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
                              Due Date
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
                              Subscription
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
                          {tableData.map((row) => (
                            <TableRow
                              key={row.customer_name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="center">
                                {row.due_date}
                              </TableCell>
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {row.customer_name}
                              </TableCell>
                              <TableCell align="center">
                                {row.subscription}
                              </TableCell>
                              <TableCell align="center">
                                {row.mobile_number}
                              </TableCell>
                              <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Card.Body>
                  <Card.Footer>
                    <Stack spacing={2}>
                      <Pagination
                        style={{ display: "flex", justifyContent: "center" }}
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
            </Row>
            <Row className="mt-3 mb-5" style={{ justifyContent: "flex-end" }}>
              <Button
                style={{
                  width: "fit-content",
                  padding: ".5rem 1rem",
                  fontFamily: "Montserrat",
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
        <Footer />
      </div>
    </div>
  );
};

export default Finance;
