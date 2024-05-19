import React from 'react';

const Newsletter = () => (
  <div className="container mx-auto p-4">
    <section className="newsletter bg-gray-100 p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Newsletter</h1>
      <p className="text-lg mb-6">Subscribe to our newsletter for exclusive updates, tips, and special content. Get free e-books and access to exclusive webinars by subscribing.</p>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Subscribe</button>
      </form>
    </section>
  </div>
);

export default Newsletter;