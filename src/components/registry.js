import ScrollableAnchor from "react-scrollable-anchor";
import { Button } from "rsuite";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
`;

const Pdiddy = styled.div`
  padding-top: 50px;
`;

function Registry() {
  return (
    <Body>
      <ScrollableAnchor id={"Registry"}>
        <h1 className="section-header grey-header">Registry</h1>
      </ScrollableAnchor>
      <Pdiddy>
        Our registry is hosted at Zola. Please click the Zola button below to be
        redirected to our registry. Thank you!
      </Pdiddy>
      <Button
        style={{
          marginTop: "20px",
          marginBottom: "50px",
          color: "black",
          border: "1px solid black",
        }}
        size="lg"
        appearance="ghost"
        onClick={() => {
          window.open("https://www.zola.com/registry/baileyzimmermanwedding");
        }}
      >
        ZOLA
      </Button>
    </Body>
  );
}

export default Registry;
