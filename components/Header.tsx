import Icon from "@FairPay/public/icon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 1vw;
  @media (max-width: 650px) {
    padding-top: 5vw;
  }
`;

const Header = () => {
  return (
    <Container>
      <Icon iconName="setting" />
    </Container>
  );
};

export default Header;
