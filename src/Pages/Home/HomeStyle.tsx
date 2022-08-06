import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #211d28;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Tittle = styled.h1`
  color: white;
`;

export const SubTittle = styled.h2`
  opacity: 0.5;
  color: #ffffff;
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
  color: #f600dd;
  font-size: 1rem;
`;

export const ButtonLogin = styled.button`
  min-width: 20rem;
  min-height: 3rem;
  background: linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
  box-shadow: 0px 4px 20px rgba(188, 49, 243, 0.5);
  border-radius: 8px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const Divisor = styled.div`
  margin: 2rem;
  width: 80%;
  border: 1px solid rgba(252, 221, 236, 0.2);
`;

export const ButtonMetamask = styled(ButtonLogin)`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonInsideMetamask = styled.button`
  background: #291d32;
  min-width: 20.8rem;
  min-height: 2.5rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h1 {
    margin: 0;
    font-size: 1.2rem;
    background: -webkit-linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    margin-left: 1rem;
  }
`;
