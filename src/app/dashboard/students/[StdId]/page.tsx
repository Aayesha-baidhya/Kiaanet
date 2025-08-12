import React from 'react'

const page = async({params}:{  params: Promise<{ StdId: string }>}) => {
    const { StdId } = await params
  return (
    <div> I live in {StdId } </div>
  )
}

export default page