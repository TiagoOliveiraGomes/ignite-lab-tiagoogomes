import React from 'react'
import { Logo } from '../logo'
import { MenuItem } from '../menuItem'
import './styles.css'

interface HeaderProps {
  isEventPage: boolean,
}

export default function Header(props:HeaderProps) {
  return (
    <header className='Container-Header'>
        <Logo />
        <MenuItem />
    </header>
  )
}
