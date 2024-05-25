import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${props => props.bgImage});
    background-size: cover;
`;

export const ContentsDiv = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SemiHeading = styled.h2`
    font-family: Montserrat;
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin: 0rem;
`;

export const Heading = styled.h1`
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(to right, #DC546B, #F9774B);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 300;
    color: #ffffff;
`;

export const Button = styled.div`
    height: 2.5rem;
    width: auto;
    background-color: #ffffff;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    font-size: 1.5rem;
    font-family: Montserrat;
    font-weight: 400;
    background: linear-gradient(to right, #DC546B, #F9774B);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    margin: 0rem;
`;