import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { title } from 'process'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{ title: 'Title1', description: 'Desc1'}]}
        </BentoGrid>
    </section>
  )
}

export default Grid