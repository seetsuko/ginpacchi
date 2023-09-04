'use client'

import styled from 'styled-components'
import Button from './Button'
import Input from './Input'

export const MembersAndSearch = () => {
  return (
    <>
      <SearchStyle>
        <Input label='serch' placeholder='Search' variant='searchInput' />
        <Button variant='search' label='さがす' large={true} />
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
  )
}

const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin: 30px auto;
`

const MembersListStyle = styled.div`
  margin: 50px 10px;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    background-color: #f5c87f;
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
