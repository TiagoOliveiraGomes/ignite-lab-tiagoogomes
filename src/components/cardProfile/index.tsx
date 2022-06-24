import './styles.css'

interface CardProfileProps{
  imgURL: string,
  name: string,
  bio: string
}
export function CardProfile(props:CardProfileProps) {
  return (
    <div className='card-profile'>

        <img 
        src={props.imgURL} 
        alt="Imagem de perfil do professor" />

        <div className='leading-relaxed'>
            <strong>{props.name}</strong>
            <span>{props.bio}</span>
        </div>

    </div>
  )
}
