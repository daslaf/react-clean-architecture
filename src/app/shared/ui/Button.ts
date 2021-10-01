import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: initial;
  display: inline-block;
  padding: 0.675rem 1rem;
  position: relative;
  background-color: ${(props) => (props.disabled ? "#e4e4e4" : "#fff")};
  border: 2px solid #e4e4e4;
  border-radius: 0.5rem;
  cursor: pointer;
  font: inherit;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export default Button;
