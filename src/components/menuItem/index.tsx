import './styles.css'

interface MenuItemProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isSidebarVisible: boolean,
  setIsVideoVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isVideoVisible: boolean,
}
export function MenuItem(props:MenuItemProps) {
  function handleMenu (){
    props.setIsSidebarVisible(!props.isSidebarVisible)
    props.setIsVideoVisible(!props.isVideoVisible)

    console.log('O video e: ', props.isVideoVisible)
    console.log('A sidebar e: ', props.isVideoVisible)
    
    // const sidebarEl = document.getElementById('SideBar')
    // if(sidebarEl?.classList.contains('hidden')){
    //   sidebarEl.classList.remove('hidden')
    //   document.getElementById('video')?.classList.add('hidden')
    // }else(
    //   document.getElementById('video')?.classList.remove('hidden'),
    //   sidebarEl?.classList.add('hidden')
    // )
    
  }

  return (
    <button onClick={handleMenu} className='Container-MenuItem'>
        <div className='line-Hamburguer' />
        <div className='line-Hamburguer' />
        <div className='line-Hamburguer' />
    </button>
  )
}
