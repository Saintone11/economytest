import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultPageTemplate = styled.div`
display : flex;
flex-direction : column;
align-items: center;
width : 60vw;
height: 50vh;
margin : 0 auto;
margin-top: 10vh;
background-color : lightyellow;
.text{
    font-size : 10vh;
}
.score{
    font-size : 20vh;
    font-weight : bold;
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
    .score{
        font-size : 10vh;
        font-weight : bold;
    }
    .text{
        font-size : 5vh;
    }
}
`
const ResultPage = ()=>{
    const location = useLocation();
    const id = location.state.id;

    return <ResultPageTemplate>
            <div className="text">당신의 금융 점수는?</div>
            <div className="score">{id*10} / 100</div>
            <Link to="/">
                <button className='test'>다시하기</button>    
            </Link>
            </ResultPageTemplate>
}
export default ResultPage;