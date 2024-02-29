const Support = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 py-10 ">
      <h2 className="text-2xl font-bold mb-2">Customer Support Hotlines</h2>
      <div className="flex mb-8">
        <p>someone1@gmail.com</p>
        <p>someone2@gmail.com</p>
      </div>
      <div className="grid grid-cols-5 gap-4 ">
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Dhaka</h3>
            <a href="tel:+18001234567" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Chittagong</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Comilla</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Rajshahi</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Khulna</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Sylhet</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Barishal</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Rangpur</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Mymensingh</h3>
            <a href="tel:+442012345678" className="text-gray-600 hover:text-blue-500">+8801825445889</a>
          </div>
        </div>
        {/* Add more hotline numbers here */}
      </div>
    </div>
  );
};

export default Support;
