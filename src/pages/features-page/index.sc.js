import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    background-image: url(${props => props.bgImage});
    background-size: cover;
`;

export const HeaderWrpr = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.h1`
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: 300;
    color: #fff;
    margin: 0rem;

    span{
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: 600;
    background: linear-gradient(to right, #DC546B, #F9774B);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    }
`;

export const ContentWrpr = styled.div`
    height: calc(100% - 5rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GridWrpr = styled.div`
    width: 80vw;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    /* padding: 1rem; */
`;

export const GridCardWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid red; */
`;
