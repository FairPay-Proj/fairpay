import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.446%;
  height: 44.375vw;
  background: #ffffff;
  border-radius: 1.563vw;
  box-shadow: 10px 10px 30px rgb(174, 174, 192, 0.5);
  margin: 0 auto;
  padding: 0 1.145%;
  @media (max-width: 650px) {
    width: 100vw;
    height: 100vh;
    padding: 0 6.145%;
  }
`;

const Container = ({children}: any) => {
  return (
    <Wrapper>
      <WrapperContainer>
        <Header />
        {children}
      </WrapperContainer>
    </Wrapper>
  );
};
export default Container;
