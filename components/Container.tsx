import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const WrapperContainer = styled.div`
  width: 18.177%;
  height: 40.938vw;
  background: #ffffff;
  border-radius: 1.563vw;
  box-shadow: 10px 10px 30px rgb(174, 174, 192, 0.5);
  margin: 2.083vw auto;
  padding: 1.719vw 1.145%;
`;

const Container = ({children}: any) => {
  return (
    <Wrapper>
      <WrapperContainer>{children}</WrapperContainer>
    </Wrapper>
  );
};
export default Container;
