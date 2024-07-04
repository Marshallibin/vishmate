import { ButtonBase } from "@mui/material";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SuccessModal from "./MyVerticallyCenteredModal";

const AddPoster = ({ data }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [category, setCategory] = useState(data ? data.category : "Jewellery");
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  console.log(data);

  return (
    <Card.Body>
      <Row>
        <div
          style={{
            width: "80%",
            maxWidth: "700px",
            marginLeft: "5%",
          }}
        >
          <form action="" encType="multipart/form-data">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Col>
                <label className="category-form__label" htmlFor="">
                  Select Category
                </label>
              </Col>
              <Col>
                <select
                  className="category-frame__select"
                  name=""
                  id=""
                  onChange={categoryHandler}
                  defaultValue={data && data.category}
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Restaurants">Restaurants</option>
                  <option value="Political">Political</option>
                  <option value="Theaters">Theaters</option>
                </select>
              </Col>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Col>
                <label className="category-form__label" htmlFor="">
                  Select Language
                </label>
              </Col>
              <Col>
                <select
                  className="category-frame__select"
                  name=""
                  id=""
                  defaultValue={data && data.language}
                >
                  <option value="" hidden>
                    Select Language
                  </option>
                  <option value="Tamil">Tamil</option>
                  <option value="English">English</option>
                </select>
              </Col>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Col>
                <label className="category-form__label" htmlFor="">
                  {data ? "Update Title" : "Enter Title"}
                </label>
              </Col>
              <Col>
                <input
                  className="category-frame__input"
                  type="text"
                  name=""
                  id=""
                  defaultValue={data && data.title}
                />
              </Col>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Col>
                <label className="category-form__label" htmlFor="">
                  Select Frame Image
                </label>
              </Col>
              <Col>
                <input
                  className="category-frame__input"
                  type="file"
                  name=""
                  id=""
                />
              </Col>
            </div>
            {category === "Jewellery" && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <Col>
                    <label className="category-form__label" htmlFor="">
                      Select Footer Image
                    </label>
                  </Col>
                  <Col>
                    <input
                      className="category-frame__input"
                      type="file"
                      name=""
                      id=""
                    />
                  </Col>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <Col>
                    <label className="category-form__label" htmlFor="">
                      Enter Colour Code
                    </label>
                  </Col>
                  <Col>
                    <input
                      className="category-frame__input"
                      type="text"
                      name=""
                      id=""
                      defaultValue={data && data.color_code}
                    />
                  </Col>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <Col>
                    <label className="category-form__label" htmlFor="">
                      Enter Font
                    </label>
                  </Col>
                  <Col>
                    <select
                      className="category-frame__select"
                      name=""
                      id=""
                      defaultValue={data && data.font_family}
                    >
                      <option value="" hidden>
                        Select Font
                      </option>
                      <option value="Nunito">Nunito</option>
                      <option value="Roboto">Roboto</option>
                    </select>
                  </Col>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <Col>
                    <label className="category-form__label" htmlFor="">
                      Select Font Size
                    </label>
                  </Col>
                  <Col className="font-size__input">
                    <input
                      className="category-frame__input"
                      type="number"
                      name=""
                      id=""
                      defaultValue={data && data.font_size}
                    />{" "}
                    <span className="px-symbol">px</span>
                  </Col>
                </div>
              </>
            )}
            <div className="alignment">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                }}
              >
                <Col>
                  <label className="category-form__label" htmlFor="">
                    Logo Alignment
                  </label>
                </Col>
                <Col>
                  <Row>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <label>X :</label>
                      <input
                        className="category-frame__input"
                        type="text"
                        name=""
                        id=""
                        defaultValue={data && data.coords.logo.x}
                      />
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <label>Y :</label>
                      <input
                        className="category-frame__input"
                        type="text"
                        name=""
                        id=""
                        defaultValue={data && data.coords.logo.y}
                      />
                    </Col>
                  </Row>
                </Col>
              </div>
              {category === "Jewellery" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2rem",
                    }}
                  >
                    <Col>
                      <label className="category-form__label" htmlFor="">
                        Date Alignment
                      </label>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>X :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.date.x}
                          />
                        </Col>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>Y :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.date.y}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2rem",
                    }}
                  >
                    <Col>
                      <label className="category-form__label" htmlFor="">
                        Footer Alignment
                      </label>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>X :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.footer.x}
                          />
                        </Col>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>Y :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.footer.x}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2rem",
                    }}
                  >
                    <Col>
                      <label className="category-form__label" htmlFor="">
                        Gold Alignment
                      </label>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>X :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.gold.x}
                          />
                        </Col>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>Y :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.gold.x}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2rem",
                    }}
                  >
                    <Col>
                      <label className="category-form__label" htmlFor="">
                        Silver Alignment
                      </label>
                    </Col>
                    <Col>
                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>X :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.silver.x}
                          />
                        </Col>
                        <Col
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <label>Y :</label>
                          <input
                            className="category-frame__input"
                            type="text"
                            name=""
                            id=""
                            defaultValue={data && data.coords.silver.x}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </>
              )}
            </div>
            <div style={{ textAlign: "center", margin: "3rem 0 1rem 0" }}>
              <ButtonBase
                style={{
                  padding: ".5rem 2rem",
                  background:
                    "linear-gradient(to bottom, #0F0C29, #302B63, #24243E)",
                  color: "white",
                  borderRadius: "10px",
                }}
                onClick={() => setShowSuccessModal(true)}
              >
                {data ? "Update" : "Save"}
              </ButtonBase>
            </div>
          </form>
        </div>
      </Row>
      <SuccessModal
        title="Poster Successfully Updated"
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      />
    </Card.Body>
  );
};

export default AddPoster;
