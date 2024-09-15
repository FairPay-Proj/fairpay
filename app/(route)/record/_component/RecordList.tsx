import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import styled from "styled-components";

const RecordList = styled.div`
  color: ${colors.lightgrey};
  font-size: ${fontSizes.xs};
`;
const Date = styled.div`
  padding-bottom: 10px;
`;
const Bar = styled.span`
  display: inline-block;
  width: 77%;
  height: 1px;
  background-color: ${colors.barColor};
  position: relative;
  top: -5px;
  left: 10px;
`;
const RecordBox = styled.div`
  width: auto;
  height: 13px;
  padding: 14px;
  background-color: ${colors.inactivetheme};
  display: flex;
  justify-content: space-between;
  font-size: ${fontSizes.md};
  border-radius: 7px;
  margin-bottom: 10px;
`;
const Name = styled.p`
  margin: 0px;
`;
const Price = styled.p`
  margin: 0px;
  color: ${colors.default};
`;

interface PropsType {
  recordListData: {
    date: string;
    name: string;
    price: string;
  }[];
}
const Record = ({recordListData}: PropsType) => {
  return (
    <>
      {recordListData.map((item) => {
        return (
          <RecordList>
            <Date>
              {item.date}
              <Bar></Bar>
            </Date>
            <RecordBox>
              <Name>{item.name}</Name>
              <Price>{item.price}</Price>
            </RecordBox>
          </RecordList>
        );
      })}
    </>
  );
};

export default Record;
