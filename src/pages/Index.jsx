function Index() {
  return (
    <div>
      {/* HEADER  */}
      <header className="w-full">
        {/* TITLE SITE */}
        <div className="container mx-auto px-4 flex ">
          <h1 className="text-gray-500 flex-grow dark:text-white text-5xl font-semibold text-center md:text-start sm:w-1/2 md:p-5">
            Streamline Your Productivity with Our Task Management App
          </h1>
          <div className="hidden sm:flex mx-4 my-4 justify-center items-center md:w-1/2">
            <svg
              className="w-32 h-32 stroke-gray-400 dark:stroke-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* TEXT */}
        <div className="container mx-auto px-4 pt-3">
          <p className="dark:text-white text-gray-400 text-center md:text-start md:w-1/2 md:p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            aspernatur, eum fuga odio, doloribus sunt laudantium inventore, in
            mollitia velit alias voluptatem autem quas quae illum labore aliquid
            ipsam. Nemo.
          </p>
        </div>
      </header>

      {/* CONTEND MAIN  */}
      <main className=" mt-12 p-7 w-full  flex flex-wrap justify-center">
        {/* TARGETS  */}
        <div className=" w-[320px] mt-4 border-1 border-gray-500 dark:border-white p-3 mx-2 rounded-lg">
          {/* ICON CARD  */}
          <div className="w-full flex justify-start pt-2">
            <svg
              className="w-12 h-12 stroke-gray-400 dark:stroke-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* TITTLE CARD  */}
          <div className="w-full flex justify-start my-5">
            <span className="font-bold text-lg text-black dark:text-white">
              LEYEND
            </span>
          </div>
          {/* TEXT CARD  */}
          <p className=" text-gray-500 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            enim accusamus debitis deleniti, fugit ratione fugiat vitae,
            dignissimos{" "}
          </p>
        </div>
        {/* TARGETS  */}
        <div className=" w-[320px] mt-4 border-1 border-gray-500 dark:border-white p-3 mx-2 rounded-lg">
          {/* ICON CARD  */}
          <div className="w-full flex justify-start pt-2">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className="w-12 h-12 stroke-gray-400 dark:stroke-white"
            >
              <circle cx="12" cy="7" r="5" strokeWidth="2" />
              <path
                d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* TITTLE CARD  */}
          <div className="w-full flex justify-start my-5">
            <span className="font-bold text-lg text-black dark:text-white">
              LEYEND
            </span>
          </div>
          {/* TEXT CARD  */}
          <p className=" text-gray-500 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            enim accusamus debitis deleniti, fugit ratione fugiat vitae,
            dignissimos{" "}
          </p>
        </div>

        {/* TARGETS  */}
        <div className=" w-[320px] mt-4 border-1 border-gray-500 dark:border-white p-3 mx-2 rounded-lg">
          {/* ICON CARD  */}
          <div className="w-full flex justify-start pt-2">
            <svg
              className="w-12 h-12 fill-gray-400 dark:fill-white"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 50 50"
              enableBackground="new 0 0 50 50"
              xmlSpace="preserve"
            >
              <path
                d="M9.037,40.763h4.286c0.552,0,1-0.447,1-1v-7.314c0-0.553-0.448-1-1-1H9.037c-0.552,0-1,0.447-1,1v7.314
	C8.037,40.315,8.485,40.763,9.037,40.763z M10.037,33.448h2.286v5.314h-2.286V33.448z"
              />
              <path
                d="M21.894,40.763c0.552,0,1-0.447,1-1v-20.64c0-0.553-0.448-1-1-1h-4.286c-0.552,0-1,0.447-1,1v20.64
	c0,0.553,0.448,1,1,1H21.894z M18.608,20.123h2.286v18.64h-2.286V20.123z"
              />
              <path
                d="M30.465,40.763c0.552,0,1-0.447,1-1V25.96c0-0.553-0.448-1-1-1H26.18c-0.552,0-1,0.447-1,1v13.803
	c0,0.553,0.448,1,1,1H30.465z M27.18,26.96h2.286v11.803H27.18V26.96z"
              />
              <path
                d="M33.751,9.763v30c0,0.553,0.448,1,1,1h4.286c0.552,0,1-0.447,1-1v-30c0-0.553-0.448-1-1-1h-4.286
	C34.199,8.763,33.751,9.21,33.751,9.763z M35.751,10.763h2.286v28h-2.286V10.763z"
              />
            </svg>
          </div>
          {/* TITTLE CARD  */}
          <div className="w-full flex justify-start my-5">
            <span className="font-bold text-lg text-black dark:text-white">
              LEYEND
            </span>
          </div>
          {/* TEXT CARD  */}
          <p className=" text-gray-500 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            enim accusamus debitis deleniti, fugit ratione fugiat vitae,
            dignissimos{" "}
          </p>
        </div>
      </main>
    </div>
  );
}

export default Index;
