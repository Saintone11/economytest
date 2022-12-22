import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flexbox from './Flexbox';
const StartPageTemplate = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
    width : 60vw;
    height: 40vh;
    margin : 0 auto;
    margin-top: 10vh;
    background-color : lightyellow;
    border-radius : 100px;
    border : solid black;
    box-shadow : 5px 4px 3px 3px;
    .describe{
        font-size : 80px;
    }

    .test{
        margin-top : 10vh;
        width: 30vh;
        height: 3rem;
        font-size: 2rem;
        border-radius : 8px;  
        &:hover{
            background-color : skyblue;
            transform : scale(1.1);
        }
    }
    @media screen and (max-width:700px){
        .describe{
            font-size : 20px;
        }
        .test{
            margin-top : 5vh;
            width: 15vh;
            height: 1.5rem;
            font-size: 0.5rem;
            border-radius : 4px;  
            &:hover{
            background-color : skyblue;
            transform : scale(1.1);
        }
        }
    }
`
const StartPage = () => {
    return (
        <StartPageTemplate>
            <div className='describe'>금융 지식 테스트</div>
            <Link to="/Test">
                <button className='test'>시작</button>    
            </Link>
        </StartPageTemplate>
    );
};

export default StartPage;