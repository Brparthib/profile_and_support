const ProfileManagement = () => {
  return (
    <div className="px-16 mb-16 ">
      <div className="p-8 bg-slate-200 shadow rounded-md mt-14">
        <div className="">
          <div className="">
            <div className="">
              <img
                className="w-48 h-48 mx-auto rounded-lg shadow-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOdHY85BD1Z6V5ElJRWk5i_GhTmMAkedS0WPftvYYbGCP17F_pAcCNktlul8WQ4geqCs&usqp=CAU"
                alt=""
              />
              <div className="mt-5 flex justify-center">
                <label
                  htmlFor="upload-button"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Upload Picture
                </label>
                <input id="upload-button" type="file" className="hidden" />
              </div>
            </div>

            {/* // <div className="w-48 h-48 bg-indigo-100 rounded-lg shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                //   <svg
                //     xmlns="http://www.w3.org/2000/svg"
                //     className="h-24 w-24"
                //     viewBox="0 0 20 20"
                //     fill="currentColor"
                //   >
                //     <path
                //       fillRule="evenodd"
                //       d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                //       clipRule="evenodd"
                //     />
                //   </svg>
                // </div> */}
          </div>
          <div className="pb-12 text-center pt-5">
            <h1 className="text-4xl font-medium text-gray-700">
              Robert Downey Jr.
            </h1>
            <p className="font-light text-gray-600 mt-3">
              downeyrobert@gmail.com
            </p>
            <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs,
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
