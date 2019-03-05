import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Col = styled.div`
  width: 100%;
  float: left;
  box-sizing: border-box;
`;

export const OneCol = styled(Col)`
  width: 4.66666666667%;
`;
export const TwoCol = styled(Col)`
  width: 13.3333333333%;
`;
export const ThreeCol = styled(Col)`
  width: 22;
`;
export const FourCol = styled(Col)`
  width: 30.6666666667%;
`;
export const FiveCol = styled(Col)`
  width: 39.3333333333%;
`;
export const SixCol = styled(Col)`
  width: 48%;
`;
export const SevenCol = styled(Col)`
  width: 56.6666666667%;
`;
export const EightCol = styled(Col)`
  width: 65.3333333333%;
`;
export const NineCol = styled(Col)`
  width: 74%;
`;
export const TenCol = styled(Col)`
  width: 82.6666666667%;
`;
export const ElevenCol = styled(Col)`
  width: 91.3333333333%;
`;
export const TwelveCol = styled(Col)`
  width: 100%; 
  margin-left: 0;
`;

export const OffsetOneCol = styled(Col)`
  margin-left: 8.66666666667%;
`;
export const OffsetTwoCol = styled(Col)`
  margin-left: 17.3333333333%;
`;
export const OffsetThreeCol = styled(Col)`
  margin-left: 26%;
`;
export const OffsetFourCol = styled(Col)`
  margin-left: 34.6666666667%;
`;
export const OffsetFiveCol = styled(Col)`
  margin-left: 43.3333333333%;
`;
export const OffsetSixCol = styled(Col)`
  margin-left: 52%;
`;
export const OffsetSevenCol = styled(Col)`
  margin-left: 60.6666666667%;
`;
export const OffsetEightCol = styled(Col)`
  margin-left: 69.3333333333%;
`;
export const OffsetNineCol = styled(Col)`
  margin-left: 78%;
`;
export const OffsetTen = styled(Col)`
  margin-left: 86.6666666667%;
`;
export const OffsetElevenCol = styled(Col)`
  margin-left: 95.3333333333%;
`;
