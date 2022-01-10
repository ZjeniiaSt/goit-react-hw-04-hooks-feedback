import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  display: inline-block;
  align-content: center;
  align-items: center;
  min-width: 130px;
  height: 40px;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  margin-left: 15px;

  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  :nth-of-type(1) {
    background-color: #137708;
    border: 1px solid #137708;
  }

  :nth-of-type(2) {
    background-color: #d47c09;
    border: 1px solid #d47c09;
  }
  :nth-of-type(3) {
    background-color: #d40902;
    border: 1px solid #d40902;
  }
  &:hover,
  &:focus {
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
