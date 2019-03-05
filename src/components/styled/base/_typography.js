import styled from 'styled-components';

const BaseH = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;
`;

export const H1 = styled(BaseH)`
  font-size: 4.0rem; 
  line-height: 1.2;  
  letter-spacing: -.1rem;
`;

export const H2 = styled(BaseH)`
  font-size: 3.6rem; 
  line-height: 1.25; 
  letter-spacing: -.1rem;
`;

export const H3 = styled(BaseH)`
  font-size: 3.0rem; 
  line-height: 1.3;  
  letter-spacing: -.1rem;
`;

export const H4 = styled(BaseH)`
  font-size: 2.4rem; 
  line-height: 1.35; 
  letter-spacing: -.08rem;
`;

export const H5 = styled(BaseH)`
  font-size: 1.8rem; 
  line-height: 1.5;  
  letter-spacing: -.05rem;
`;

export const H6 = styled(BaseH)`
  font-size: 1.5rem; 
  line-height: 1.6;  
  letter-spacing: 0;
`;

export const Text = styled.p`
  margin-top: 0;
`;
