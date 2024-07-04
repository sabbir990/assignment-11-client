import React from 'react'

const Slide = ({image, title, description}) => {
    console.log(image)
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70 rounded-lg'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {title}
                    </h1>
                    <p className='text-sm font-semibold text-white lg:text-lg'>{description}</p>
                    <br />
                    <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Add Volunteer Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide;
