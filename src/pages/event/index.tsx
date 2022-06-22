import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Video from '../../components/video'
import './styles.css'

export default function Event() {
  return (
    <div className='Container-Event'>
        <Header />
        <main>
            <Video />
            <Sidebar />
        </main>
    </div>
  )
}
