import Link from 'next/link'
import styled from 'styled-components'
import { MembersAndSearch } from '@/components/MembersAndSearch'
import Toptext from '@/components/common/Toptext/TopText'

const StaffManege = () => {
  return (
    <div>
      <Toptext date={false} text='スタッフ管理' variant='title' />
      <StaffAddLinkStyle>
        <Link href='/StaffRegister'>スタッフを追加</Link>
      </StaffAddLinkStyle>
      <MembersAndSearch />
    </div>
  )
}

export default StaffManege

const StaffAddLinkStyle = styled.div`
  text-align: center;
  margin: 60px auto;
  font-size: 33px;
  color: #0059f3;
  border-bottom: 1px solid #0059f3;
  width: 250px;
`
