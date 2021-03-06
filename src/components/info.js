import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";
import Map from "./map";

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MapWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const DeatilWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const buttonStyle = {
  color: "white",
  border: "1px solid white",
  fontWeight: "bold",
};

function Info(props) {
  const Wrapper = props.isDesktopOrLaptop && !props.isPortrait ? Columns : Rows;
  return (
    <div className="info-page">
      <ScrollableAnchor id={"Info"}>
        <h1 className="section-header info-header">Information</h1>
      </ScrollableAnchor>
      <br />
      <Wrapper>
        <DeatilWrapper className="info-detail" style={{ paddingRight: "20px" }}>
          <h1 className="section-header info-subheader">When</h1>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            September 3rd, 2022
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Please arrive by 4:30 pm. <br />
            The ceremony will begin promptly at 5.
          </p>
        </DeatilWrapper>
        <br />
        <DeatilWrapper className="info-detail" style={{ paddingRight: "20px" }}>
          <h1 className="section-header info-subheader">Where</h1>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Ceremony will be held outdoors (weather permitting) in the
            courtyard, <br />
            followed by cocktail hour, dinner & reception on the Villa grounds.
          </p>
          <br />
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Villa Parker
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            10750 S Pine Dr
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Parker, Colorado 80138
          </p>
        </DeatilWrapper>
        <br />
        <DeatilWrapper className="info-detail">
          <h1 className="section-header info-subheader">Wear</h1>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Cocktail attire (and bring your dancing shoes!)
          </p>
        </DeatilWrapper>
      </Wrapper>
      <br />
      <br />
      <Wrapper>
        <DeatilWrapper>
          <h2 className="section-header info-subheader">Welcome Party</h2>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Come enjoy some food and drinks!
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            September 2nd, 2022<br />5:30 pm - 8:30 pm
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            10108 Stoneglen Tr <br />Lone Tree, Colorado 80124
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white", fontSize: "15px" }}>
            RSVP <br /> Text or Call Mary Zimmerman 303-501-9601
          </p>
        </DeatilWrapper>
        {/* <DeatilWrapper>
          <h2 className="section-header info-subheader">Sunday Brunch</h2>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Join us anytime from 9-11 AM for
            <br />a sendoff from the newlyweds!
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            September 4nd, 2022
          </p>
          <p className="ourstory-andinfo-detail" style={{ color: "white" }}>
            Denver Marriott South at Park Meadows
          </p>
        </DeatilWrapper> */}
      </Wrapper>
      <br />
      <br />
      <h2 className="section-header info-subheader">Accommodations</h2>
      <div>
        <div className="info-detail">
          <h4 className="section-header ourstory-andinfo-detail">
            Denver Marriott South at Park Meadows (recommended)
          </h4>
          <br />
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            10345 Park Meadows Dr, Lone Tree, CO 80124
          </p>
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            (303) 925-0004
          </p>
          <br />
          <Button
            color="white"
            onClick={() => {
              window.open(
                "https://www.marriott.com/en-us/hotels/denms-denver-marriott-south-at-park-meadows/overview/"
              );
            }}
            appearance="ghost"
            style={buttonStyle}
          >
            Hotel
          </Button>
        </div>
        <div className="info-detail">
          <h4 className="section-header ourstory-andinfo-detail">
            SpringHill Suites by Marriott Denver Parker
          </h4>
          <br />
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            9355 Silverado Dr, Parker, CO 80134
          </p>
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            (303) 841 - 6700
          </p>
          <br />
          <Button
            color="white"
            onClick={() => {
              window.open(
                "https://www.marriott.com/en-us/hotels/denpk-springhill-suites-denver-parker/overview/"
              );
            }}
            appearance="ghost"
            style={buttonStyle}
          >
            Hotel
          </Button>
        </div>
        <div className="info-detail">
          <h4 className="section-header ourstory-andinfo-detail">
            Hampton Inn & Suites Parker
          </h4>
          <br />
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            19010 Cottonwood Dr, Parker, CO 80138
          </p>
          <p className="ourstory-andinfo-detail" style={{ fontSize: "15px" }}>
            (303) 841 - 2977
          </p>
          <br />
          <Button
            color="white"
            onClick={() => {
              window.open(
                "https://www.hilton.com/en/hotels/denpahx-hampton-suites-parker/"
              );
            }}
            appearance="ghost"
            style={buttonStyle}
          >
            Hotel
          </Button>
        </div>
      </div>
      <MapWrapper>
        sfad
        <Map />
      </MapWrapper>
    </div>
  );
}

export default Info;
