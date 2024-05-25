import styled from "styled-components";

export const CardWrpr = styled.div`
    height: 20rem;
    width: 20rem;
    background-color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
`;

export const ImageCont = styled.div`
    height: 13.5rem;
    /* width: 100%; */
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    /* border: 2px solid black; */
    background-image: url(${props => props.Img});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
`;

export const DescriptionWrpr = styled.div`
    height: 6.5rem;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const Description = styled.h1`
    font-size: 1.25rem;
    font-weight: 400;
    font-family: Montserrat;
    background: linear-gradient(to right, #DC546B, #F9774B);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    text-align: center;
`;