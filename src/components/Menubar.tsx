import Link from 'next/link'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

export const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MenubarWrapper>
    <Menu styles={menuStyle} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link href='/' onClick={handleIsOpen} className='item'>
        トップ
      </Link>
      <Link href='/StaffManege' onClick={handleIsOpen} className='item'>
        シフト管理
      </Link>
      <Link href='/' onClick={handleIsOpen} className='item'>
        スタッフ管理
      </Link>
      <Link href='/Contact' onClick={handleIsOpen} className='item'>
        お問い合わせ
      </Link>
    </Menu>
    </MenubarWrapper>
  )
}

const menuStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#ffffff',
  },
  bmBurgerBarsHover: {
    background: '#c5c5c5',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#4597f5',
    fontSize: '1.2em',
  },
  bmItemList: {
    color: '#ffffff',
  },
  bmItem: {
    display: 'inline-block',
    width: '100%',
    textDecoration: 'none',
    outline: 'none',
    borderBottom: '1px solid #fff',
    padding: '1.5em 1.5em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const MenubarWrapper = styled.div`
  .item:hover {
    background-color: #006aff86;
  }
`
