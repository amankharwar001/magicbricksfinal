# 🏠 MagicBricks Real Estate Scraper - Next.js Assignment

A dynamic real estate project listing app built with **Next.js** that scrapes project data in real-time from **MagicBricks** and plots project locations on an interactive map using **PositionStack API**.

---

## 🚀 Features

- 🌆 **Dynamic Routing**: Navigate to `/city/[cityName]` to fetch and display project listings.
- 🔍 **Real-time Scraping**: Project data is scraped directly from MagicBricks on request.
- 📍 **Geocoding & Map**: Project locations are geocoded via PositionStack and displayed on a Leaflet.js map.
- 🌀 **Incremental Loading**: Projects show up with smooth animations as they're retrieved.
- 🗺️ **Interactive Map**: Clickable markers show project name, price, and location.
- 🎯 **Framer Motion**: Smooth UI animations.
- ⚙️ **API Integration**: Backend API route handles scraping and geocoding.
- 📦 **Built with**: Next.js, React, Leaflet.js, Tailwind CSS (optional), Framer Motion.

---

## 🧩 Tech Stack

| Tech              | Description                        |
|------------------|------------------------------------|
| Next.js          | Framework for server-rendered React |
| React            | UI library                         |
| Leaflet.js       | Interactive maps                   |
| Cheerio + fetch + axios  | Web scraping from MagicBricks      |
| PositionStack    | Geocoding location to coordinates  |
| Tailwind CSS     | (Optional) Styling                 |
| Zustand / Context API | (To be integrated) Real-time data state management |

---

## 📦 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/magicbricks-scraper.git
   cd magicbricks-scraper
