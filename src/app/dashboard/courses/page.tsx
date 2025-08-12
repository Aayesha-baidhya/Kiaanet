import Link from 'next/link'
import React from 'react'

const page = () => {
    const listOfCourse = [
        {id: 1,
        name: "IOT",
        description: "This is IOT"
        },
        {id: 2,
        name: "Database",
        description: "This is Database"
        },
        {id: 3,
        name: "Computing",
        description: "This is fundamentals of computing"
        }
    ]
  return (
    <>
    <div>These are the available courses.</div>
    <h1>List of Courses</h1>
    {
        listOfCourse.map((item)=>{
            return(
                <div className="py-4" key={item.id}>
                <div>
                    <Link href={`/dashboard/courses/${item.name}`}>
                    {item.name}
                    </Link>
                </div>
                <div>
                    {item.description}
                </div>
                </div>
            )
        })
    }

    </>
  )
}

export default page