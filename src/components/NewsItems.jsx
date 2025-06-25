import React from 'react'

const NewsItems = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {
        newsData.map((newsItem, index) => {
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={newsItem.urlToImage} alt="News" className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between h-[150px]">
                <h4 className="text-md font-semibold mb-2 line-clamp-2">{newsItem.title}</h4>
                <a href={newsItem.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline mt-auto">Read More...</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default NewsItems
