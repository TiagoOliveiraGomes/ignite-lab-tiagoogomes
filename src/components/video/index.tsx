import { DefaultUi, Player, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import CardExtraButton from '../cardExtraButton'
import { CardProfile } from '../cardProfile'
import './styles.css'
import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'

interface VideoProps {
  lessonSlug: string,
}


const iconImage = <Image size={40} />
const iconArrowDown = <FileArrowDown size={40} />
const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`

interface GetLessonBySlugResponse{
  lesson: {
    title: string,
    videoId: string,
    description:string,
    teacher: {
      bio:string,
      avatarURL: string,
      name: string,
    }
  }
}

export default function Video(props:VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    }
  })
  
  if(!data){
    return(
      <div className='flex-1'>
        <p>Carregando...</p>
      </div>
    )
  }
  return (
    <div className='Container-Video'>
      <div className='video-elements'>
        <div className='video'>
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

        <div className='content'>
          <div className='video-details'>

            <div className='flex-1'>
              <h1>{data.lesson.title}</h1>
              <p>{data.lesson.description}</p>
              <CardProfile 
              name={data.lesson.teacher.name}
              bio={data.lesson.teacher.bio}
              imgURL={data.lesson.teacher.avatarURL}
               />
            </div>

            <div className='Container-Buttons'>
              <a href="/" className='default-button primary'>
                <DiscordLogo size={24} />
                Comunidade do Discord
              </a>
              <a href="/" className='default-button secondary'>
                <Lightning size={24} />
                Acesse o desafio
              </a>
            </div>

          </div>

          <div className='lesson-extra'>
            <CardExtraButton 
            icon={iconArrowDown}
            title="Material Complementar"
            text="Acesse o material complementar para acelerar o seu desenvolvimento"
             />
            <CardExtraButton 
            icon={iconImage}
            title="Wallpapers exclusivos"
            text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
             />
          </div>

        </div>
    </div>
  )
}
