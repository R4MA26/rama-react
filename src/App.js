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
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5"
                >
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
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5"
                >
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
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5"
                >
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
                </a>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded overflow-hidden h-4/5"
                >
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
                </a>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
