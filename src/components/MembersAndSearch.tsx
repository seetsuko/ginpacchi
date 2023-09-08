import styled from 'styled-components'
import Button from './common/Button/Button'
import Input from './common/Input/Input'

export const MembersAndSearch = () => {
  return (
    <>
      <SearchStyle>
        <Input label='serch' placeholder='Search' variant='searchInput' />
        <Button color='other' label='さがす' size='large' />
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
  width: 65vw;
  margin: 3vh auto;
`

const MembersListStyle = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
  }
  li {
    background-color: #f5c87f;
    color: #666666;
    border-radius: 15px;
    width: 200px;
    height: 9vh;
    font-size: 1.7rem;
    text-align: center;
    line-height: 9vh;
    margin: 2vh 2.5vw;
  }
`
