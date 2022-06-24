import { CaretRight, FileArrowDown, IconProps } from 'phosphor-react'
import './styles.css'

interface CardExtraButtonProps{
  icon: JSX.Element,
  text: string,
  title:string
}

export default function CardExtraButton(props:CardExtraButtonProps) {
  return (
    <a className='Container-CardExtraButton' href="">

      <header>
        {props.icon}
      </header>

      <main>
        <strong className='text-2xl'>
          {props.title}
        </strong>
        <p>
          {props.text}
        </p>
      </main>

      <footer>
        <CaretRight size={24} />
      </footer>
      
    </a>
  )
}
