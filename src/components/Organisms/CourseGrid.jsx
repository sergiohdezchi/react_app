import React from 'react'
import withLoader from '../HOC/withLoader.js';
import CurseCard from '../Molecules/CurseCard.jsx';

const CourseGrid = ({curses}) => (
    <div className='ed-grid m-grid-3'>
    {
        curses.map(curso => <CurseCard key={curso.id} id={curso.id} title={curso.title} image={curso.image} price={curso.price} professor={curso.professor} ></CurseCard>)
    }
  </div>
)

//export default withLoader(CourseGrid)
export default withLoader('curses')(CourseGrid)