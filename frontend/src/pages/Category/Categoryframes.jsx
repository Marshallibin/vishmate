import {
  AddRounded,
  Clear,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
} from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  FormControl,
  InputAdornment,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
  Switch,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AddPoster from "./AddPoster";
import "./Category.scss";
import "./Categoryframes.scss";
import editPng from "./edit.png";
import leoPng from "./leo.png";
import maanaaduPng from "./maanaadu.png";
import deletePng from "./trash.png";
import DeleteModal from "../../components/Modal/Modal";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: "4px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const frame_data = [
  {
    id: 1,
    category: "Jewellery",
    frame_image: leoPng,
    footer_image: "",
    color_code: "#4132CF",
    font_family: "Roboto",
    font_size: 26,
    language: "Tamil",
    title: "Leo",
    coords: {
      logo: {
        x: 120,
        y: 90,
      },
      date: {
        x: 89,
        y: 11,
      },
      footer: {
        x: 43,
        y: 245,
      },
      gold: {
        x: -13,
        y: -90,
      },
      silver: {
        x: 320,
        y: -90,
      },
    },
  },
  {
    id: 2,
    category: "Theaters",
    frame_image: maanaaduPng,
    language: "English",
    title: "Gold Ring",
    coords: {
      logo: {
        x: -110,
        y: 20,
      },
    },
  },
];

const Categoryframes = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [actionEl, setActionEl] = useState(null);
  const categoryOpen = Boolean(anchorEl);
  const actionOpen = Boolean(actionEl);
  const [addButtonIsClicked, setAddButtonIsClicked] = useState(false);
  const [editButtonIsClicked, setEditButtonIsClicked] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const editHandler = (data) => {
    setEditButtonIsClicked(true);
    setEditData(data);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleActionDropdownClick = (event) => {
    setActionEl(event.currentTarget);
  };
  const handleActionClose = () => {
    setActionEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showClearIcon, setShowClearIcon] = useState("none");
  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top" style={{ boxShadow: "none", padding: "0" }}>
          <Container>
            <Card
              className="mt-5"
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
                    {addButtonIsClicked
                      ? "Add Poster"
                      : editButtonIsClicked
                      ? "Update Poster"
                      : "Category Frame"}
                  </div>
                  {!addButtonIsClicked && !editButtonIsClicked && (
                    <div>
                      <FormControl>
                        <TextField
                          style={{ borderRadius: "6px" }}
                          className="bg-white"
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
                  )}
                </div>
              </Card.Header>
              {!addButtonIsClicked && !editButtonIsClicked && (
                <>
                  <Card.Body className="p-4">
                    <Row>
                      <div className="d-flex">
                        <div style={{ flexGrow: "1" }}>
                          <Button
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
                              textTransform: "none",
                              fontFamily: "Montserrat",
                            }}
                            id="category-button"
                            aria-controls={
                              categoryOpen ? "category-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={categoryOpen ? "true" : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleDropdownClick}
                            endIcon={
                              categoryOpen ? (
                                <KeyboardArrowUp />
                              ) : (
                                <KeyboardArrowDown />
                              )
                            }
                          >
                            Select Category
                          </Button>
                          <StyledMenu
                            id="category-menu"
                            MenuListProps={{
                              "aria-labelledby": "category-button",
                            }}
                            anchorEl={anchorEl}
                            open={categoryOpen}
                            onClose={handleClose}
                          >
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "175px",
                              }}
                              onClick={handleClose}
                              disableRipple
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "175px",
                              }}
                              onClick={handleClose}
                              disableRipple
                            >
                              Duplicate
                            </MenuItem>
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "175px",
                              }}
                              onClick={handleClose}
                              disableRipple
                            >
                              Archive
                            </MenuItem>
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "175px",
                              }}
                              onClick={handleClose}
                              disableRipple
                            >
                              More
                            </MenuItem>
                          </StyledMenu>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            id="select_all"
                            style={{ width: "14px", height: "14px" }}
                          />
                          <label
                            htmlFor="select_all"
                            style={{ marginLeft: "6px" }}
                          >
                            Select All
                          </label>
                          <Button
                            style={{
                              background: "#FFA700",
                              textTransform: "none",
                              fontFamily: "Montserrat",
                              marginLeft: "1rem",
                            }}
                            id="action-button"
                            aria-controls={
                              actionOpen ? "action-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={actionOpen ? "true" : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleActionDropdownClick}
                            endIcon={
                              actionOpen ? (
                                <KeyboardArrowUp />
                              ) : (
                                <KeyboardArrowDown />
                              )
                            }
                          >
                            Action
                          </Button>
                          <StyledMenu
                            id="action-menu"
                            MenuListProps={{
                              "aria-labelledby": "action-button",
                            }}
                            anchorEl={actionEl}
                            open={actionOpen}
                            onClose={handleActionClose}
                          >
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "105px",
                              }}
                              onClick={handleActionClose}
                              disableRipple
                            >
                              Enable
                            </MenuItem>
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "105px",
                              }}
                              onClick={handleActionClose}
                              disableRipple
                            >
                              Disable
                            </MenuItem>
                            <MenuItem
                              style={{
                                fontFamily: "Montserrat",
                                minWidth: "105px",
                              }}
                              onClick={handleActionClose}
                              disableRipple
                            >
                              Delete
                            </MenuItem>
                          </StyledMenu>
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
                            onClick={() =>
                              setAddButtonIsClicked((prevState) => !prevState)
                            }
                          >
                            <AddRounded
                              style={{ width: "20px", height: "20px" }}
                            />{" "}
                            <span style={{ marginLeft: "5px" }}>Add New</span>
                          </ButtonBase>
                        </div>
                      </div>
                    </Row>
                    <Row className="mt-5">
                      <div className="d-flex flex-wrap" style={{ gap: "2rem" }}>
                        {frame_data.map((el) => (
                          <div
                            key={el.id}
                            style={{
                              position: "relative",
                              width: "250px",
                              height: "250px",
                              borderRadius: "10px",
                              overflow: "hidden",
                              flexBasis: "auto",
                            }}
                          >
                            <Image
                              src={el.frame_image}
                              style={{ width: "100%", height: "100%" }}
                              alt={el.title}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexFlow: "column wrap",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                color: "white",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: ".75rem .75rem",
                                  width: "100%",
                                }}
                              >
                                <p
                                  style={{
                                    margin: "0",
                                    width: "90%",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {el.title}
                                </p>
                                <input type="checkbox" name="" id="" />
                              </div>
                              <div style={{ flexGrow: "1" }}></div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  padding: ".75rem .75rem",
                                  width: "100%",
                                }}
                              >
                                <ButtonBase
                                  style={{
                                    backgroundColor: "white",
                                    padding: ".25rem",
                                    borderRadius: "50%",
                                  }}
                                  onClick={() => editHandler(el)}
                                >
                                  <Image
                                    src={editPng}
                                    width={20}
                                    height={20}
                                    alt="edit"
                                  />
                                </ButtonBase>
                                <ButtonBase
                                  style={{
                                    backgroundColor: "white",
                                    padding: ".25rem",
                                    borderRadius: "50%",
                                    marginLeft: ".75rem",
                                  }}
                                  onClick={() => setShowDeleteModal(true)}
                                >
                                  <Image
                                    src={deletePng}
                                    width={20}
                                    height={20}
                                    alt="edit"
                                  />
                                </ButtonBase>
                                <Switch {...label} defaultChecked />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Row>
                    <DeleteModal
                      title="Delete"
                      body="Are You Sure You Want to Delete ?"
                      type={{ name: "Delete" }}
                      show={showDeleteModal}
                      onHide={() => setShowDeleteModal(false)}
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
                </>
              )}
              {(addButtonIsClicked || editButtonIsClicked) && (
                <AddPoster data={editData || null} />
              )}
            </Card>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Categoryframes;
