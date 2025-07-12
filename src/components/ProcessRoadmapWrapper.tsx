'use client'
import ProblemSolution from './ProblemSolution'
import Process from './Process'

export default function ProcessRoadmapWrapper() {
  return (
    <div className="relative">
      {/* Remove the Rubik's Cube background animation */}
      
      {/* Content Sections */}
      <div className="relative">
        <ProblemSolution />
        <Process />
      </div>
    </div>
  )
}