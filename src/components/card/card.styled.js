import styled from "styled-components";

export const Card = styled.div`
    background-color: ${(props) =>
    props.teste === true
      ? "green"
      : "red"};
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 15px;
    width: 300px;
    height: 300px;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    display: flex;
    color: #fff;
`

export const CardContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;

`