import styled from '@emotion/styled';

const ButtonEl = styled.button`
  background-color: white;
  text-transform: capitalize;
  border-radius: 5px;
  border: 2px solid whitesmoke;
  font-weight: 500;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export default ButtonEl;
