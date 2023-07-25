import styled from 'styled-components';

export const BackButton = styled.button`
background-color: transparent;
border:none;
`;

export const ProfileImg = styled.img`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 16px;
  background-image: linear-gradient(
    to top,
    ${(props) => props.theme.colors.yellow} 50%,
    ${(props) => props.theme.colors.blue} 50%
  );
  background-origin: border-box;
  transform: translateZ(0);
  background-clip: padding-box;
  box-shadow: 0 0 0 4px ${(props) => props.theme.colors.blue},
    0 0 0 8px ${(props) => props.theme.colors.yellow};
`;

export const TitleWrapper = styled.div`
  margin-bottom: 10px;
`;

export const TitleAccount = styled.h1`
font-size: 56px;
font-weight: 400;
line-height: 77px;
letter-spacing: 0em;
text-align: center;
`;

export const ImgNameWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 64px;
`;

export const UserNameText = styled.p`
display: block;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
`;

export const LabelImg = styled.label`
  display: inline-block;
  background-color:${props => props.theme.colors.blue};
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 20px;
`;
