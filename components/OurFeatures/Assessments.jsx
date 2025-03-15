import React from 'react'
import DetailsFlexSection from '../Shared/DetailsFlexSection'

export default function Assessments() {
  return (
    <DetailsFlexSection title={[
      {text: "Assessments,"},
      {text: "Quizzes", color: "text-secondary-600"},
      {text: ", Tests",},
    ]} description="Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook." img="/Group 92.png" className="lg:flex-row-reverse"/>
  )
}
