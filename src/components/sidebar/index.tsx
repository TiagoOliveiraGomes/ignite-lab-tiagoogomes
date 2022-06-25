
import { useGetLessonsQuery } from '../../graphql/generated'
import Lesson from '../lesson'
import './styles.css'



export default function Sidebar() {
  const { data } = useGetLessonsQuery()
  

  return (
    <aside className='Container-Sidebar'>
        <span>
            Cronograma de aulas
        </span>
        <div className='lessons-list'>
          {data?.lessons.map((lesson)=> {
            return (
              <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              />
            )
          })}
        </div>
    </aside>
  )
}
