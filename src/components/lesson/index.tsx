import './styles.css'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const {slug} = useParams<{slug: string}>()
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR})
  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className='Container-Lesson group'>
      <span className='text-brand-gray-300'>{availableDateFormatted}</span>

      <div className={`Lesson-Card group-hover:border-brand-green-300 ${isActiveLesson&& 'bg-brand-green-500'}`}>
        <header className='lessonCard-Header'>
          {isLessonAvailable ? (
            <span className={`content-released text-sm ${isActiveLesson? 'text-white': 'text-brand-blue-500'}`}>
              <CheckCircle size={20} />
              Conteúdo liberado</span>
          ) : (
            <span className={`content-released text-sm text-brand-orange-500`}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          
          <span className={`AoVivo-Text border ${isActiveLesson? 'border-white': 'border-brand-green-300'}`}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={`LessonCard-title ${isActiveLesson? 'text-white': 'text-brand-gray-200'}`}>
          {props.title}
        </strong>
      </div>

    </Link>
  )
}
