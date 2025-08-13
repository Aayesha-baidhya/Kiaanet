import React from 'react'

const page = ({params}:{  params: { id: string }}) => {
    const { id } = params
  return (
    <div> I live in {id } </div>
  )
}

export default page