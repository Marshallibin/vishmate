import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import image from "../../assets/image.png";
import month from "../../assets/month.png";
import today from "../../assets/today.png";
import user_png from "../../assets/user.png";
import categoryPng from "../../assets/carbon_category.png";
import posterPng from "../../assets/poster.png";
import languagePng from "../../assets/language.png";
import week from "../../assets/week.png";
import year from "../../assets/year.png";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import EventCard from "./EventCard";
import PaymentGraph from "./PaymentGraph";
import PriceCard from "./PriceCard";
import SubscriptionCard from "./SubscriptionCard";
import UserGraph from "./UserGraph";
import UsersCard from "./UsersCard";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer"

const Dashboard = () => {
  const subscriptionData = [
    {
      image: image,
      status: "5 hours ago",
      name: "Ver Jwellery",
      subscriptionType: "silver",
      subscriptionAmount: "299/M",
    },
    {
      image: image,
      status: "5 hours ago",
      name: "Ver Jwellery",
      subscriptionType: "gold",
      subscriptionAmount: "2999/Y",
    },
  ];

  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar />
      <div className="homeContainer" style={{backgroundColor: "#f4f4f4"}}>
        <Navbar />
        <Container>
          <Row className="mt-5">
            <UsersCard
              png={user_png}
              title="Total Users"
              value="120"
              left="43"
            />
            <UsersCard
              png={categoryPng}
              title="Total Category"
              value="120"
              left="35"
            />
            <UsersCard
              png={posterPng}
              title="Total Posters"
              value="120"
              left="38"
            />
            <UsersCard
              png={languagePng}
              title="Total Language"
              value="120"
              left="35"
            />
          </Row>
          <Row className="mt-5">
            <PriceCard png={today} title="Today Payment" value="0.0" />
            <PriceCard png={week} title="Weekly Payment" value="0.0" />
            <PriceCard png={month} title="Monthly Payment" value="0.0" />
            <PriceCard png={year} title="Yearly Payment" value="0.0" />
          </Row>
          <Row className="mt-5 mx-0">
            <PaymentGraph />
            <UserGraph />
          </Row>
          <Row className="mt-5 mx-0">
            <EventCard image={image} />
          </Row>
          <Row className="mt-5 mx-0">
            <SubscriptionCard image={image} />
          </Row>
          <Row className="my-5 mx-0">
            <Col>
              <Card
                style={{
                  margin: "0",
                  padding: "0",
                  boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc"
                }}
              >
                <Card.Header
                  as="h4"
                  className="p-3"
                  style={{
                    color: "white",
                    fontFamily: "Lora",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                  }}
                >
                  Recent Register User
                </Card.Header>
                <Card.Body className="p-0 m-0">
                  <div
                    className="d-flex p-3"
                    style={{ gap: "1.5rem", borderBottom: "1px solid #e4e4e4" }}
                  >
                    <Image
                      src={image}
                      alt="profile"
                      width={60}
                      height={60}
                      roundedCircle
                    />
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <p
                        style={{
                          margin: "0",
                          padding: "0",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: "#302b63",
                        }}
                      >
                        Ver Jwellery
                      </p>
                      <p style={{ margin: "0", padding: "0" }}>5 hrs ago</p>
                    </div>
                  </div>
                  <div
                    className="d-flex p-3"
                    style={{ gap: "1.5rem", borderBottom: "1px solid #e4e4e4" }}
                  >
                    <Image
                      src={image}
                      alt="profile"
                      width={60}
                      height={60}
                      roundedCircle
                    />
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <p
                        style={{
                          margin: "0",
                          padding: "0",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: "#302b63",
                        }}
                      >
                        Ver Jwellery
                      </p>
                      <p style={{ margin: "0", padding: "0" }}>5 hrs ago</p>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer
                  className="p-3"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                  }}
                >
                  <Link
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    View more
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={{ margin: "0", padding: "0",  boxShadow: "5px 5px 6px #ccc, -2px 0 6px #ccc" }}>
                <Card.Header
                  as="h4"
                  className="p-3"
                  style={{
                    color: "white",
                    fontFamily: "Lora",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                  }}
                >
                  Recent Paid User
                </Card.Header>
                <Card.Body className="p-0 m-0">
                  {subscriptionData.map((el) => (
                    <div
                      className="d-flex p-3"
                      style={{
                        gap: "1.5rem",
                        borderBottom: "1px solid #e4e4e4",
                      }}
                    >
                      <Image
                        src={el.image}
                        alt="profile"
                        width={60}
                        height={60}
                        roundedCircle
                      />
                      <div
                        style={{ flexGrow: "1" }}
                        className="d-flex flex-column justify-content-center align-items-start"
                      >
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            color: "#302b63",
                          }}
                        >
                          {el.name}
                        </p>
                        <p style={{ margin: "0", padding: "0" }}>{el.status}</p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span
                          style={{
                            background: `${
                              el.subscriptionType === "gold"
                                ? "linear-gradient(160deg, rgba(233, 192, 81, 1), rgba(255, 226, 141, 1), rgba(235, 198, 81, 1), rgba(185, 125, 28, 1))"
                                : "linear-gradient(to bottom, rgba(242, 242, 242, 1), rgba(255, 255, 255, 1), rgba(199, 199, 199, 1))"
                            }`,
                            padding: ".25rem 1rem",
                            borderRadius: ".25rem",
                            boxShadow: "0 0 10px #ccc, 0 0 10px #ccc",
                          }}
                        >
                          {el.subscriptionAmount}
                        </span>
                      </div>
                    </div>
                  ))}
                </Card.Body>
                <Card.Footer
                  className="p-3"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    background:
                      "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                  }}
                >
                  <Link
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    View more
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
