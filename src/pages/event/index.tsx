import { Divide } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Video from '../../components/video'
import { useWindowSize } from '../../hooks/useWindowSize'
import './styles.css'

const width = window.innerWidth

export default function Event() {
  const {slug} = useParams<{slug:string}>()
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true)
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(true)
  const windowSize = useWindowSize()

  useEffect(()=> {

    if(windowSize.innerWidth > 768){
      setIsSidebarVisible(true)
      setIsVideoVisible(true)
    } else {
      if(windowSize.innerWidth < 769){
        setIsSidebarVisible(false)
      }
    }
  }, [windowSize.innerWidth > 768])

  return (
    <div className='Container-Event'>
        <Header isVideoVisible={isVideoVisible} setIsVideoVisible={setIsVideoVisible} isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
        <main>
            {slug
            ? isVideoVisible && <Video lessonSlug={slug}/> 
            : <div className='flex-1'/>}
            {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
        </main>
    </div>
  )
}
