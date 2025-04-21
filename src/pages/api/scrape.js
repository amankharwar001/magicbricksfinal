
import axios from 'axios'
import * as cheerio from 'cheerio'

const positionStackKey = '9c454e0d9a22f684967aff10ad5b30c9'

export default async function handler(req, res) {
  const { city } = req.query
  const url = `https://www.magicbricks.com/new-projects-${city}`

  try {
    const { data: html } = await axios.get(url)
    const $ = cheerio.load(html)
    const projects = []

    $('.projdis__newprjs .projdis__prjcard').each(async (i, el) => {
      const name     = $(el).find('h2').text().trim()
      const location = $(el).find('.mghome__prjblk__locname').text().trim()
      const price    = $(el).find('.mghome__prjblk__price').text().trim().replace(/\s+/g, ' ')
      // Log scraped data
      console.log('Scraped Project:', { name, location, price })
      // yaha tak complete code work kar raha ha sahi se lekin gro res wala work nahi kr raha ha error show kr raha ha

      // Geocoding with PositionStack
      const geoRes = await axios.get(`http://api.positionstack.com/v1/forward`, {
        params: {
          access_key: positionStackKey,
          query: location,
          limit: 1
        }
      })

      const { latitude, longitude } = geoRes.data.data[0] || {}

      projects.push({
        name, location, price, latitude, longitude
      })
    })

    // Ensure you wait for scraping to complete
    setTimeout(() => {
      res.status(200).json({ projects })
    }, 3000)

  } catch (err) {
    console.error('Error scraping data:', err)
    res.status(500).json({ error: 'Failed to scrape data' })
  }
}
