import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container mx-auto p-6 pt-24"> 
        <div className="flex justify-start mb-8"> 
            <a href="{% url 'write_blog' %}" className="write-blog-button px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300">
                ✍️ Write a Blog
            </a>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>

        <div className="space-y-8">
            <div className="blog-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold">Mastering Python in 30 Days</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">October 15, 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">Learn how to master Python programming with this step-by-step guide...</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">Read More</a>
            </div>

            <div className="blog-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold">Building Responsive Websites</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">October 10, 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">Discover the secrets to building responsive and modern websites...</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">Read More</a>
            </div>


            <div className="blog-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold">Introduction to Machine Learning</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">October 5, 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">A beginner's guide to understanding and applying machine learning...</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300">Read More</a>
            </div>
        </div>


        <div className="flex justify-center mt-8 space-x-4">
            <a href="#" className="pagination-link px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">1</a>
            <a href="#" className="pagination-link px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">2</a>
            <a href="#" className="pagination-link px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">3</a>
            <a href="#" className="pagination-link px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">Next</a>
        </div>
    </div>
    </div>
  )
}

export default page