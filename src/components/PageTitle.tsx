"use client"

import { styled } from "styled-components";

type Props = {
    pageTitle: string
}

const PageTitleStyle = styled.div`
    text-align: center;
    border-bottom: 1px solid #979797;
    margin: 50px 0;
    p{
        font-size: 30px;
        margin: 0;
    }
`

export const PageTitle = ({pageTitle}:Props) => {
    return (
        <PageTitleStyle>
            <p>{pageTitle}</p>
        </PageTitleStyle>
    );
}