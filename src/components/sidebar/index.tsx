
import { useGetLessonsQuery } from '../../graphql/generated'
import Lesson from '../lesson'
import './styles.css'

interface SidebarProps {
  isSidebarVisible: boolean,
}

export default function Sidebar(props:SidebarProps) {
  const { data } = useGetLessonsQuery()
  

  return (
    <div id='SideBar' className='h-[vh]'>
      {props.isSidebarVisible &&
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
      </aside>}
    </div>
  )
}
