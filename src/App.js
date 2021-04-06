import logo from "./assets/images/photo-jpg.png";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-wrap ">
          <h4 className="flex-auto text-xl text-center">
            <img src={logo} className="App-logo " alt="logo" />
            KeDai Computerworks | Papan Informasi
          </h4>
        </div>
      </header>

      <div className="">
        <body class=" bg-gray-200 text-gray-900 font-sans p-6 h-full">
          <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5">
                  <div class="relative pb-48 overflow-hidden">
                    <div>
                      <h5 class="mt-2 mb-2  font-bold p-4">
                        Agenda Pembelajaran
                      </h5>
                      <div id="view-materi-pembelajaran"> </div>
                    </div>
                    <h5 class="text-dark text-center mb-2 pt-2 ml-2">
                      <i class="text-primary mr-1 fas fa-user-circle"></i>
                      Pemateri
                    </h5>
                    <div class="col-sm-12 mt-1">
                      <div
                        id="carouselExampleIndicators3"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner" role="listbox">
                          <div id="view_pemateri"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        class="h-full"
                        src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <div class="p-4"></div>
                  <div class="p-4 border-t border-b text-xs text-gray-700"></div>
                  <div class="p-4 flex items-center text-sm text-gray-600"></div> */}
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5">
                  <div class="relative pb-48 overflow-hidden">
                    <div>
                      <h5 class="mt-2 mb-2  font-bold p-4">
                        Agenda Keorganisasian{" "}
                        <span className="font-normal">Nginap</span>
                      </h5>
                      {/* <h5 className="p-4">Nginap</h5> */}
                      <div id="view-materi-pembelajaran"> </div>
                    </div>
                    <h5 class="text-dark text-center mb-2 pt-2 ml-2">
                      <i class="text-primary mr-1 fas fa-user-circle"></i>
                      BPH Pendamping
                    </h5>
                    <div class="col-sm-12 mt-1">
                      <div
                        id="carouselExampleIndicators3"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner" role="listbox">
                          <div id="view_pemateri"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        class="h-full	"
                        src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <div class="p-4"></div>
                  <div class="p-4 border-t border-b text-xs text-gray-700"></div>
                  <div class="p-4 flex items-center text-sm text-gray-600"></div> */}
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5">
                  <div class="relative pb-48 overflow-hidden">
                    <div>
                      <h5 class="mt-2 mb-2  font-bold p-4">
                        Agenda Keorganisasian{" "}
                        <span className="font-normal">Piket</span>
                      </h5>
                      <div id="view-materi-pembelajaran"> </div>
                    </div>
                    <h5 class="text-dark text-center mb-2 pt-2 ml-2">
                      <i class="text-primary mr-1 fas fa-user-circle"></i>
                      BPH Pendamping
                    </h5>
                    <div class="col-sm-12 mt-1">
                      <div
                        id="carouselExampleIndicators3"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner" role="listbox">
                          <div id="view_pemateri"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        class="h-full	"
                        src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <div class="p-4"></div>
                  <div class="p-4 border-t border-b text-xs text-gray-700"></div>
                  <div class="p-4 flex items-center text-sm text-gray-600"></div> */}
                </div>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <div class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5">
                  <div class="relative pb-48 overflow-hidden">
                    <div>
                      <h5 class="mt-2 mb-2  font-bold p-4">
                        Admin EXTRACT XVI
                      </h5>
                      <div id="view-materi-pembelajaran"> </div>
                    </div>
                    <h5 class="text-dark text-center mb-2 pt-2 ml-2">
                      <i class="text-primary mr-1 fas fa-user-circle"></i>
                    </h5>
                    <div class="col-sm-12 mt-1">
                      <div
                        id="carouselExampleIndicators3"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div class="carousel-inner" role="listbox">
                          <div id="view_pemateri"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        class="h-full	"
                        src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <div class="p-4"></div>
                  <div class="p-4 border-t border-b text-xs text-gray-700"></div>
                  <div class="p-4 flex items-center text-sm text-gray-600"></div> */}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="max-w-md w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                title="Woman holding a mug"
              ></div>
              <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Jonathan Reinink</p>
                    <p class="text-grey-dark">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
