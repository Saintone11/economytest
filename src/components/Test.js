import React, { useEffect } from "react";
import {createRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import questions from './questions.json';
import loading from './img/loading.gif'

const TestTemplate = styled.div`
    max-width: 100%;
    overflow-x : hidden;
    overflow-y : visible;
    width : 100%;
    .content{
        margin-top: 10vh;
        width: 100vw;
        float: left;
    }
    .slider{
        width :1200vw;
    }
    .top{
        height : 10vh;
        padding: 2rem;
    }
    .question{
        color: #2e2e2e;
        font-size : 2rem;
        font-weight: bold;
        text-align : center;
    }
    .answerlist{
        display:flex;
        flex-direction : column;
        width: 80%;
        height : 60vh;
        margin: 0 auto;
    }
    .answer{
        display : flex;
        justify-content: center;
        height: 45%;
        margin: 1rem;
        padding : 1.2rem;
        box-sizing: border-box;
        background-color: #fff;
        color: rgba(110, 110, 110, 1);
        border : 3px solid black;
        border-radius : 30px;
        border-color: lightblue;
        font-weight: 900;
        font-size : 1.2rem;
        &:hover{
            background-color:yellow;
            transform : scale(1.05);
        }
    }

    .loading{
        display : flex;
        width: 50%;
        margin : 0 auto;
        flex-direction : column;
        align-items : center;
        margin-top : 10vh;
    }
    .load{
        display : flex;
        font-size: 50px;
    }
    @media screen and (max-width:700px){
        .question{
            color: #2e2e2e;
            font-size : 1rem;
            font-weight: bold;
            text-align : center;
        }
        .answer{
            display : flex;
            justify-content: center;
            height: 45%;
            margin: 0.5rem;
            padding : 0.6rem;
            box-sizing: border-box;
            background-color: #fff;
            color: rgba(110, 110, 110, 1);
            border : 2px solid black;
            border-radius : 15px;
            border-color: lightblue;
            font-weight: 900;
            font-size : 0.9rem;
            &:hover{
                background-color:yellow;
                transform : scale(1.05);
            }
        }

    }
`

function Test(){
    const [num, setNum] = useState(0);
    const [tf, setTf] = useState([]); 
    const [fin, setFin] = useState(false);
    const slideRef = createRef(null);  
    const navigate = useNavigate(); 

    const first = () =>{
        setTf(tf + questions[num].answers[0].type);
        setNum(num +1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    }
    const second =() =>{
        setTf(tf + questions[num].answers[1].type);
        setNum(num +1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    }
    const third = () => {
        setTf(tf + questions[num].answers[2].type);
        setNum(num +1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    }
    const forth = () =>{
        setTf(tf + questions[num].answers[3].type);
        setNum(num +1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    }
    const result = ()=> {
        setFin(true);
        let count = 0;
        for (let i =0; i< tf.length; i++)
        {
            if(tf[i] === 'T'){
                count += 1;
            }
        }
        setTimeout(()=>{
            navigate('/resultPage',{state:{id: count}});
        },2000);
    };

    useEffect(()=> {
            num > 9 && result();
    }, [num]);

    return  <TestTemplate>
                {!fin && (
                 <div className="slider" ref={slideRef}>  {
                      questions.map((item)=>{
                          return (<div className="content" key={item.id}>
                                    <div className ="top">
                                     <h1 className="question">{item.question}</h1>
                                     </div>
                                     <section className="answerlist">
                                        <button className="answer" onClick={first}>{item.answers[0].content}</button>
                                        <button className="answer" onClick={second}>{item.answers[1].content}</button>
                                        <button className="answer" onClick={third}>{item.answers[2].content}</button>
                                        <button className="answer" onClick={forth}>{item.answers[3].content}</button>
                                     </section>
                  </div>
       )
     })
    }
          </div>
                )}
                {fin &&(
                    <div className="loading">
                        <img src={loading} />
                        <div className ="load">로딩 중.....</div>
                    </div>
                )}
    </TestTemplate>
}

export default Test;
