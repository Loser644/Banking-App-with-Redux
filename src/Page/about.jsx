import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          About the Banking App
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          This modern banking app lets users securely manage their finances from anywhere. With a smooth and responsive UI, users can <strong>send & receive money</strong>, <strong>deposit funds</strong>, <strong>withdraw cash</strong>, and <strong>view their real-time balance</strong>.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">🔐 Secure Login</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Firebase Authentication ensures all user data is protected and private.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">💰 Real-Time Balance</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Every transaction updates your account instantly using Firebase Realtime Database.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">⚛️ Redux Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              All state is globally managed using Redux Toolkit for a seamless experience.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">📲 Send & Receive</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Users can transfer funds between accounts with just a few clicks.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">📈 Track History</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              All your past transactions are recorded and visible anytime.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">🎯 Simple UI</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Built with a user-first mindset to ensure fast, easy navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
