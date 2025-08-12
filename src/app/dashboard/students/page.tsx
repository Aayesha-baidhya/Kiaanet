import Link from 'next/link'
import React from 'react'

const Student = () => {
  const listOfStds= [
    {id: "L201",
    name: "Aviana Shrestha",
    address: "Dillibazar"
    },
    {id: "L205",
    name: "Sabi Tamang",
    address: "Basundhara"
    },
    {id: "L207",
    name: "Senom Rajbhandari",
    address: "Hattiban"
    },
    {id: "L210",
    name: "Senesha Shakya",
    address: "Asan"
    }
  ]
  return (
    <>
    <h1>List of Students</h1>
    <p> These are the list of students at our college along with their full details.</p>
    {
        listOfStds.map((item)=>{
            return(
                <div className="py-4" key={item.id}>
                <div>
                <Link href={`/dashboard/students/${(item.address)}`}>
                  {item.name}
                 </Link>

                </div>
                <div>
                    {item.address}
                </div>
                </div>
            )
          })
        }
      </>
  )
}
export default Student