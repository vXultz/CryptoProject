import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #211D28;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Tittle = styled.h1`
color: white;
`;

export const SubTittle = styled.h2`
opacity: 0.5;
color: #FFFFFF;
`;

export const Input = styled.input`
border: 2px solid #454141;
border-radius: 8px 8px 0px 0px;
background: transparent;
min-width: 20rem;
height: 2.5rem;
color: #908e93;
:hover {
  border-color: #793fc3;
}
`;

export const InputBottom = styled(Input)`
border-radius: 0 0 8px 8px;
`;

export const ContainerForgot = styled.button`
min-width: 20.5rem;
height: 3rem;
display: flex;
justify-content: flex-end;
background: transparent;
border: none;
`;

export const TextForgot = styled.h2`
color: #F600DD;
font-size: 1rem;
`;


export const ButtonLogin = styled.button`
min-width: 20rem;
min-height: 3rem;
background: linear-gradient(135deg, #9A4DFF 0%, #F600DD 100%);
box-shadow: 0px 4px 20px rgba(188, 49, 243, 0.5);
border-radius: 8px;
border: none;
color: #FFFFFF;
`;