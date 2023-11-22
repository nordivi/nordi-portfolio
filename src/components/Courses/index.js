import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import CourseCard from '../Cards/CourseCard'
import { courses } from '../../data/constants'


const Courses = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="courses">
      <Wrapper>
        <Title>Courses</Title>
        <Desc>
          There are the main courses I took to improve my skills.
        </Desc>
        <CardContainer>
          {courses ? courses
            .map((course) => (
              <CourseCard course={course} />
            )) : null}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Courses