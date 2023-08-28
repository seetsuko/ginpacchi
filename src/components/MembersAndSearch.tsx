"use client"

import { styled } from "styled-components";

const SearchStyle =styled.div`
    text-align: center;
    margin-top: 50px;
        input{
            width: 300px;
            margin-right: 50px;
            padding: 10px;
            height: 80px;
            border-radius: 10px;
            border: 1px solid #CCCCCC;
            font-size: 30px;
        }
        button{
            width: 160px;
            height: 80px;
            font-size: 30px;
            color: #FFFFFF;
            background-color: #4597F5;
            border: 1px solid #979797;
            border-radius: 4px;
        }
`

const MembersListStyle = styled.div`
    margin: 50px 10px;
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        background-color: #F5C87F;
        color: #666666;
        border-radius: 15px;
        width: 200px;
        height: 110px;
        font-size: 27px;
        text-align: center;
        line-height: 110px;
        margin: 20px 20px;
    }
`

export const MembersAndSearch = () => {


    return (
        <>
            <SearchStyle>
                <input type="text" placeholder="Search"/>
                <button>さがす</button>
            </SearchStyle>
            <MembersListStyle>
                <ul>
                    <li>ながと　ひのと</li>
                    <li>さくら　ももこ</li>
                    <li>松坂　桃李</li>
                    <li>松坂　桃李</li>
                </ul>
            </MembersListStyle>
        </>
    );
}

