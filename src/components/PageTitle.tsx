import { styled } from "styled-components";

type Props = {
    pageTitle: string
}

const PageTitleStyle = styled.div`
    text-align: center;
    font-size: 25px;
`

export const PageTitle = ({pageTitle}:Props) => {
    return (
        <PageTitleStyle>
            <h3>{pageTitle}</h3>
        </PageTitleStyle>
    );
}