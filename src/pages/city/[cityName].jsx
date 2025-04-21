// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'

// const Map = dynamic(() => import('../../components/Map'), { ssr: false })

// export default function CityPage() {
//   const { cityName } = useRouter().query
//   const [projects, setProjects] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (!cityName) return
//     const fetchProjects = async () => {
//       const res = await fetch(`/api/scrape?city=${cityName}`)
//       const data = await res.json()
//       console.log("data show is here",data)
//       setProjects(data.projects)
//       setLoading(false)
//     }
//     fetchProjects()
//   }, [cityName])

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Real Estate Projects in {cityName}</h1>
//       {loading ? <p>Loading...</p> : (
//         <>
//           <ul className="space-y-2">
//             {projects.map((p, i) => (
//               <li key={i} className="border p-2 rounded">
//                 <p><strong>{p.name}</strong></p>
//                 <p>{p.location}</p>
//                 <p>{p.price}</p>
//                 <p>Builder: {p.builder}</p>
//               </li>
//             ))}
//           </ul>
//           <Map projects={projects} />
//         </>
//       )}
//     </div>
//   )
// }


import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function CityPage() {
  const { cityName } = useRouter().query
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!cityName) return
    const fetchProjects = async () => {
      const res = await fetch(`/api/scrape?city=${cityName}`)
      const data = await res.json()
      setProjects(data.projects)
      setLoading(false)
    }
    fetchProjects()
  }, [cityName])

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center"
      >
        Real Estate Projects in <span className="text-blue-600">{cityName}</span>
      </motion.h1>

      {loading ? (
        <div className="text-center text-lg font-medium text-gray-500">Loading projects...</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Project list */}
          <div className="md:col-span-2 space-y-4">
            {projects?.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-blue-600 font-medium mt-1">{p.price}</p>
                <p className="text-sm text-gray-500 mt-2">Builder: {p.builder}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Map */}
          <div className="h-[500px] sticky top-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <Map projects={projects} />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}
