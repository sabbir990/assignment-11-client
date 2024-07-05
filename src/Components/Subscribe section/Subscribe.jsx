import React from 'react'

export default function Subscribe() {
    return (
        <header class="bg-white dark:bg-gray-900">

            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl flex space-x-4">Subscribe To The <span class="text-blue-500 flex items-center space-x-2">Volunteer</span></h1>

                            <p class="mt-3 text-gray-600 dark:text-gray-400">Stay updated with our latest volunteer opportunities, events, and news. Subscribe to our newsletter and be the first to know how you can get involved and make a difference. Join our community of passionate volunteers today!</p>

                            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                    <button class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Subscribe
                                    </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full max-w-md" src="https://img.freepik.com/free-vector/aid-disadvantaged-groups-abstract-illustration_335657-5640.jpg?t=st=1720183892~exp=1720187492~hmac=a88d520806aa79870a06edf01c3912d765120ce0a2cbf0418d4c7f0f9a50855a&w=740" alt="email illustration vector art" />
                    </div>
                </div>
            </div>
        </header>
    )
}
