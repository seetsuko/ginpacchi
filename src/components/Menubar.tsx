'use client'

import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { styled } from 'styled-components'

const MenubarStyle = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-burger-bars-hover {
    background: #005b99;
  }
  .bm-cross-button > span {
    top: 10px !important;
    left: 0px !important;
  }

  .bm-cross {
    width: 5px !important;
    height: 30px !important;
    background: #373a47;
  }
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #4597f5;
    font-size: 1.8em;
    padding-top: 2em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fff;
  }
  /* Individual item */
  .bm-item {
    display: inline-block;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid #fff;
    padding: 1.5em 1.5em;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const Menubar = () => {
  return (
    <MenubarStyle>
      <Menu width='20em'>
        <Link href='/' className='menu-item'>
          トップ
        </Link>
        <Link href='/page-2' className='menu-item'>
          スタッフ管理
        </Link>

        <Link href='/page-3' className='menu-item'>
          過去の人件費
        </Link>

        <Link href='/page-4' className='menu-item'>
          お問い合わせ
        </Link>
      </Menu>
    </MenubarStyle>
  )
}
