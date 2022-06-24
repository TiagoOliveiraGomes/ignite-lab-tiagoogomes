import './styles.css'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR})

  return (
    <Link to={`/event/lesson/${props.slug}`} className='Container-Lesson group'>
      <span className='text-brand-gray-300'>{availableDateFormatted}</span>

      <div className='Lesson-Card group-hover:border-brand-green-300'>
        <header className='lessonCard-Header'>
          {isLessonAvailable ? (
            <span className='content-released text-sm text-brand-blue-500'>
              <CheckCircle size={20} />
              Conteúdo liberado</span>
          ) : (
            <span className='content-released text-sm text-brand-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          
          <span className='AoVivo-Text border'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='LessonCard-title'>{props.title}</strong>
      </div>

    </Link>
  )
}
