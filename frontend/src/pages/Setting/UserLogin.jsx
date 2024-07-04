import "./UserLogin.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
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
import { useState } from "react";
import MyVerticallyCenteredModal from "../../components/Modal/Modal";
import Footer from "../../components/footer/Footer";

const UserLogin = () => {
  const [modalShow, setModalShow] = useState(false);
  function createData(id, user_name, email, password, category) {
    return { id, user_name, email, password, category };
  }

  const userLoginData = [
    createData(1, "Tushar", "tushar@gmail.com", "12345678", "Jwellery"),
    createData(2, "Arun", "arun@gmail.com", "12345678", "Theaters"),
    createData(3, "Renu", "renu@gmail.com", "12345678", "Political"),
    createData(4, "Sonu", "sonu@gmail.com", "12345678", "Restaurants"),
    createData(5, "David", "david@gmail.com", "12345678", "Political"),
  ];

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top" style={{ boxShadow: "none", padding: "0" }}>
          <Container>
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
                        User Login
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
                              User Name
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
                              Password
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
                              Category
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
                          {userLoginData.map((row) => (
                            <TableRow
                              key={row.id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="center">
                                {row.user_name}
                              </TableCell>
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {row.email}
                              </TableCell>
                              <TableCell align="center">
                                {row.password}
                              </TableCell>
                              <TableCell align="center">
                                {row.category}
                              </TableCell>
                              <TableCell align="center">
                                <ButtonBase style={{ margin: "0 .25rem" }}>
                                  <Image src={editPng} />
                                </ButtonBase>
                                <ButtonBase
                                  onClick={() => setModalShow(true)}
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
                      name: "Delete"
                    }}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
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
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLogin;
