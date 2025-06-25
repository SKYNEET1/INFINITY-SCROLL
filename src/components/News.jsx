import React, { useEffect, useState } from 'react'
import { getAllPost } from '../Fetch/Fetching'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CiSearch } from "react-icons/ci";

const News = () => {
  const [search, setsearch] = useState("tesla")
  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(1);
  const options = ["Business", "Technology", "Sports", "Innovation", "Culture", "Arts", "Travel", "Earth"];

  const fetchData = async () => {
    try {
      const response = await getAllPost(search, page);
      console.log(response.articles)
      setNewsData((prev) => [...prev, ...response.articles])
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  const fetchNews = () => {
    setPage((prev) => prev + 1)
  }

  const newsSearch = () => {
    setNewsData([])
    setPage(1)
    fetchData()
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
          <h4 className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">News App</h4>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search for news..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              onClick={newsSearch}
              className="bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-blue-700 text-white"
            >
              <CiSearch size={24} />
            </div>
          </div>
        </nav>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {
            options.map((item, index) => (
              <div key={index} className="px-4 py-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-blue-100 transition">
                {item}
              </div>
            ))
          }
        </div>


          {/* THE BELOW CODE IS FROM A LIBRARY CALLED INFINITESCROLL IT CAN BE INSTALLED THROUGH 'npm i infinitescroll'*/}


        {/* News List */}
        <InfiniteScroll
          dataLength={newsData.length}
          next={fetchNews}
          hasMore={true}
          loader={<h4 className="text-center text-gray-600">Loading...</h4>}
          endMessage={
            <p className="text-center font-medium text-gray-600">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="p-4">
            <NewsItems newsData={newsData} />
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default News
