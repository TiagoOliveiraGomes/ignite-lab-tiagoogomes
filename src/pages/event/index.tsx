import { Divide } from 'phosphor-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Video from '../../components/video'
import './styles.css'

export default function Event() {
  const {slug} = useParams<{slug:string}>()
  return (
    <div className='Container-Event'>
        <Header />
        <main>
            {slug
            ? <Video lessonSlug={slug}/> 
            : <div className='flex-1'/>}
            <Sidebar />
        </main>
    </div>
  )
}
