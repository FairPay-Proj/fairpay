import styled from "styled-components";
import Header from "./Header";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const WrapperContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isRecordPage ? "22.736%" : "20.446%")};
  height: 44.375vw;
  background: "#fff";
  background-image: ${(props) => (props.isRecordPage ? `url("/images/recordBg.png")` : "none")};
  background-position: ${(props) => (props.isRecordPage ? `center` : "none")};
  background-size: ${(props) => (props.isRecordPage ? "cover" : "none")};
  border-radius: 1.563vw;
  box-shadow: 10px 10px 30px rgb(174, 174, 192, 0.5);
  margin: 0 auto;
  padding: ${(props) => (props.isRecordPage ? "0px" : "0 1.145%")};
  @media (max-width: 650px) {
    width: 100vw;
    height: 100vh;
    padding: 0 6.145%;
  }
`;

interface StyleProps {
  isRecordPage: boolean;
}

const Container = ({children}: any) => {
  const pathname = usePathname();
  const isRecordPage = pathname.includes("record");

  return (
    <Wrapper>
      <WrapperContainer isRecordPage={isRecordPage}>
        <Header />
        {children}
      </WrapperContainer>
    </Wrapper>
  );
};
export default Container;
