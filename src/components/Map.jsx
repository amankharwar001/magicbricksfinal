// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'

// export default function Map({ projects }) {
//     console.log("project data show is here",projects)
//   const defaultCenter = [projects[0]?.latitude || 20.5937, projects[0]?.longitude || 78.9629]

//   return (
//     <div className="h-[500px] mt-6">
//       <MapContainer center={defaultCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {projects.map((p, i) => (
//           <Marker key={i} position={[p.latitude, p.longitude]}>
//             <Popup>
//               <strong>{p.name}</strong><br />
//               {p.price}<br />
//               {p.location}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   )
// }



import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Create custom icon
const customIcon = new L.Icon({
  iconUrl: '/location.png',
  iconSize: [32, 45], // adjust based on your image
  iconAnchor: [16, 45], // center bottom
  popupAnchor: [0, -40]
})

export default function Map({ projects }) {
  // const defaultCenter = [projects[0]?.latitude || 20.5937, projects[0]?.longitude || 78.9629]
  const defaultCenter = projects?.length
  ? [projects[0].latitude, projects[0].longitude]
  : [20.5937, 78.9629];

  return (
    <div className="h-[500px] mt-6">
      <MapContainer center={defaultCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((p, i) => (
          <Marker
            key={i}
            position={[p.latitude, p.longitude]}
            icon={customIcon} // 👈 custom icon passed here
          >
            <Popup>
              <strong>{p.name}</strong><br />
              {p.price}<br />
              {p.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
