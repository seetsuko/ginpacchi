"use client"

import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderStyle = styled.div`
    background-color: #89bcff;
    height: 120px;
    padding: 30px;
`

export const Header = () => {
    return (
        <HeaderStyle>
            <AiOutlineMenu size={50}/>
        </HeaderStyle>
    );
}

