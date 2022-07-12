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
    
    document.getElementById('lineTop')?.classList.toggle('lineTop')
    document.getElementById('lineBottom')?.classList.toggle('lineBottom')
    document.getElementById('lineMid')?.classList.toggle('hidden')
    
  }

  return (
    <div className='flex gap-2'>
      <h1 className='menuTitle'>Aulas</h1>
      <button onClick={handleMenu} className='Container-MenuItem'>
          <div id='lineTop' className='line-Hamburguer' />
          <div id='lineMid' className='line-Hamburguer' />
          <div id='lineBottom' className='line-Hamburguer' />
      </button>
    </div>
  )
}
