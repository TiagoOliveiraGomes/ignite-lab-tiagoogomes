import { gql, useQuery } from '@apollo/client'
import React from 'react'
import Lesson from '../lesson'
import './styles.css'

const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`
interface GetLessonsQueryResponse {
  lessons: {
    id:string,
    title:string,
    slug: string,
    availableAt: string,
    lessonType: 'live' | 'class'
  }[]
}

export default function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  

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
