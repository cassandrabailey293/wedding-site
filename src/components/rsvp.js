import ScrollableAnchor from "react-scrollable-anchor";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  Modal,
  List,
  Icon,
  InputPicker,
    Drawer,
} from "rsuite";
import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0hcB_NxD7vCDFslxDDq_19b8wNEsxCQ",
  authDomain: "wedding-site-7d128.firebaseapp.com",
  projectId: "wedding-site-7d128",
  storageBucket: "wedding-site-7d128.appspot.com",
  messagingSenderId: "446321917636",
  appId: "1:446321917636:web:d01f09b1f711365ff91391",
  measurementId: "G-KFXW5NV2HK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const acceptedMessage = "We look forward to celebrating with you!"
const rejectedMessage= "Sorry to miss you - hope that we can celebrate together in the future!"

var db = getFirestore(app);

const BEEF = "Beef";
const VEG = "Vegetarian";

const DesktopBody = styled.div`
  text-align: center;
  width: 33vw;
  margin: auto;
`;

const MobileBody = styled.div`
  text-align: center;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const NotificationContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: inherit;
`;

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainGuest: {
        name: "",
        email: "",
        rsvp: "",
        mealChoice: "",
      },
      additionalGuestList: [],
      additionalGuest: {
        name: "",
        mealChoice: "",
      },
        showModal: false,
        showNotification: false,
    };
    }
    onNotificationHide = () => {
        this.setState({ showNotification: false })
        console.log("ON HIDE")
    }
  close = () => {
    this.setState({ showModal: false });
  };
  open = () => {
    this.setState({ showModal: true });
  };
  submit = () => {
    let flatGuestList = this.state.additionalGuestList.map((guest) => {
      guest.email = this.state.mainGuest.email;
      guest.rsvp = this.state.mainGuest.rsvp;
      return guest;
    });
    flatGuestList.push(this.state.mainGuest);
    const groupID = uuidv4();
    flatGuestList.forEach((e) => {
      e.groupID = groupID;
        addDoc(collection(db, "guestList"), e).then(() => {
            console.log("THEEES", this)
            this.setState({ showNotification: true });
            console.log("addDoc then")
        });
    });
  };
  render() {
    const { mainGuest, additionalGuestList, additionalGuest, showModal, showNotification } =
      this.state;
    const Body = this.props.isDesktopOrLaptop ? DesktopBody : MobileBody;
    return (
      <Wrapper className="rsvp-page">
        <div>
          <ScrollableAnchor id={"RSVP"}>
            <h1 className="section-header">RSVP</h1>
          </ScrollableAnchor>
          <Body>
            <Form
              fluid
              style={{ textAlign: "left" }}
              onChange={(mainGuest) => {
                this.setState({ mainGuest });
              }}
              formValue={mainGuest}
            >
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl name="email" type="email" />
              </FormGroup>
              <FormGroup controlId="rsvp">
                <ControlLabel>Are you attending?</ControlLabel>
                <InputPicker
                  data={[
                    {
                      label: "Accepts with Joy",
                      value: "accepted",
                      role: "Master",
                    },
                    {
                      label: "Will Celebrate from Afar",
                      value: "declined",
                      role: "Master",
                    },
                  ]}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    mainGuest.rsvp = value;
                    this.setState({ mainGuest });
                  }}
                />
              </FormGroup>
              <FormGroup controlId="mealChoice">
                <ControlLabel>Dinner Choice</ControlLabel>
                <InputPicker
                  data={[
                    {
                      label: "Stuffed Portobello Mushroom (vegetarian)",
                      value: VEG,
                      role: "Master",
                    },
                    {
                      label: "Beef Tenderlion",
                      value: BEEF,
                      role: "Master",
                    },
                  ]}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    mainGuest.mealChoice = value;
                    this.setState({ mainGuest });
                  }}
                />
              </FormGroup>

              {additionalGuestList.length === 0 ? null : (
                <div style={{ marginBottom: "24px" }}>
                  <List bordered hover>
                    {additionalGuestList.map((item, index) => (
                      <List.Item key={index} index={index}>
                        {item.name} - {item.mealChoice}
                        <Icon
                          className="delete-icon"
                          icon="trash"
                          size="lg"
                          onClick={() => {
                            const index = additionalGuestList.indexOf(item);
                            if (index > -1) {
                              additionalGuestList.splice(index, 1);
                            }
                            this.setState({ additionalGuestList });
                          }}
                        />
                      </List.Item>
                    ))}
                  </List>
                </div>
              )}

              <FormGroup>
                <ButtonToolbar>
                  <Button onClick={this.submit} appearance="ghost">
                    RSVP
                  </Button>
                  <Button onClick={this.open} appearance="ghost">
                    Add Additional Guest
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Body>
        </div>
        <Modal showModal={showModal} onHide={this.close} size="xs" style={{ top: "20%" }}>
          <Modal.Header>
            <Modal.Title>Additional Guest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              formValue={additionalGuest}
              onChange={(additionalGuest) => {
                this.setState({ additionalGuest });
              }}
            >
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl name="name" />
              </FormGroup>
              <FormGroup controlId="mealChoice">
                <ControlLabel>Dinner Choice</ControlLabel>
                <InputPicker
                  data={[
                    {
                      label: "Stuffed Portobello Mushroom (vegetarian)",
                      value: VEG,
                      role: "Master",
                    },
                    {
                      label: "Beef Tenderlion",
                      value: BEEF,
                      role: "Master",
                    },
                  ]}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    additionalGuest.mealChoice = value;
                    this.setState({ additionalGuest });
                  }}
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                additionalGuestList.push(additionalGuest);
                this.setState({
                  additionalGuestList,
                  additionalGuest: {
                    name: "",
                    mealChoice: "",
                  },
                });
                this.close();
              }}
              appearance="primary"
            >
              Confirm
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
            </Modal>

            <Drawer style={{opacity:"80%"}}
                show={this.state.showNotification}
                onHide={this.onNotificationHide}
                placement={"top"}
            >
                <NotificationContentWrapper>Success! Your RSVP has been received.
                    {this.state.mainGuest.rsvp ? acceptedMessage : rejectedMessage }
                </NotificationContentWrapper>
            </Drawer>
      </Wrapper>
    );
  }
}

export default RSVP;
