import React from 'react'
import { Logo } from '../logo'
import { MenuItem } from '../menuItem'
import './styles.css'

interface HeaderProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isSidebarVisible: boolean,
  setIsVideoVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isVideoVisible: boolean,
}

export default function Header(props:HeaderProps) {
  return (
    <header className='Container-Header'>
        <Logo />
        <div className='ml-5 flex gap-3 text-sm'>
          <MenuItem isVideoVisible={props.isVideoVisible} isSidebarVisible={props.isSidebarVisible} setIsSidebarVisible={props.setIsSidebarVisible} setIsVideoVisible={props.setIsVideoVisible} />
        </div>
    </header>
  )
}
