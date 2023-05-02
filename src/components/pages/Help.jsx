import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Help = () => {
  return (
    <>
      <Sidebar/>

    <div className="bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Help Center
            </h2>
            <div className="mt-8 flex justify-center space-x-3 sm:mt-0 sm:ml-3">
              <Link
                to="/support"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-6 sm:mt-10">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8">
              <div className="mt-5 sm:mt-0 sm:pt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Frequently Asked Questions
                    </h3>
                    <div className="mt-2 text-base text-gray-500">
                      <p>
                        Here you'll find answers to some common questions we get
                        asked. If you don't see what you're looking for, feel free
                        to reach out to us for more information.
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link
                        to="/faq"
                        className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Go to FAQs &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
               
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Getting Started Guide
                                  </h3>
                                  <div className="mt-2 text-base text-gray-500">
                                    <p>
                                      If you're new to our platform, this guide will help you
                                      get started. We'll walk you through the basics of using
                                      our platform so you can get up and running quickly.
                                    </p>
                                  </div>
                                  <div className="mt-3">
                                    <Link
                                      to="/getting-started"
                                      className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Read the Guide &rarr;
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                              <div className="flex">
                               
                               
                              </div>
                           
                              </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  </>
                  );
                }
                
                export default Help;