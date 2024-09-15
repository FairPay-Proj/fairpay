import Icon from "@FairPay/public/icon";
import {usePathname} from "next/navigation";
import styled from "styled-components";

const Container = styled.div<StyleProps>`
  display: flex;
  justify-content: right;
  padding-top: 1vw;
  padding-right: ${(props) => (props.isRecordPage ? "5%" : "0px")};
  @media (max-width: 650px) {
    padding-top: 5vw;
  }
`;

interface StyleProps {
  isRecordPage: boolean;
}

const Header = () => {
  const pathname = usePathname();
  const isRecordPage = pathname.includes("record");

  return (
    <Container isRecordPage={isRecordPage}>
      <Icon iconName="setting" />
    </Container>
  );
};

export default Header;
