import React from 'react'

export default function PostCard({id, thumbnail, category, deadline, postTitle, description, organizerName}) {
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={thumbnail} alt={category} />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{postTitle}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{organizerName}</a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{new Date(deadline).toLocaleDateString()}</span>
                    </div>
                    <div className='w-full'>
                        <button className='btn btn-outline btn-warning w-full mt-4'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
