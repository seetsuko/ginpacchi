'use client'

import styled from 'styled-components'

type Props = {
  pageTitle: string
}

export const PageTitle = ({ pageTitle }: Props) => {
  return (
    <PageTitleStyle>
      <p>{pageTitle}</p>
    </PageTitleStyle>
  )
}

const PageTitleStyle = styled.div`
  text-align: center;
  border-bottom: 1px solid #979797;
  margin: 50px 0;
  p {
    font-size: 30px;
    margin: 0;
  }
`
