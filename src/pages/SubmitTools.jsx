import React from 'react';

const SubmitTools = () => (
  <div className="container mx-auto p-4">
    <section className="submit-tools bg-gray-100 p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Submit New Tools</h1>
      <p className="text-lg mb-6">Use the form below to submit information about new tools or platforms. Please review our submission guidelines before submitting.</p>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toolName">Tool Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="toolName" type="text" placeholder="Enter tool name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toolDescription">Tool Description</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="toolDescription" placeholder="Enter tool description"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toolLink">Tool Link</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="toolLink" type="url" placeholder="Enter tool link" />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Submit</button>
      </form>
    </section>
  </div>
);

export default SubmitTools;