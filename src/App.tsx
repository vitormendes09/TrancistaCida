import Popup from './components/popup';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-700 flex justify-center px-4">
        <main className="my-2 w-full  p-2 rounded-lg shadow-lg">
            <div className="absolute top-4 right-6"> 
                
                <nav className="bg-gray-200 p-4 rounded-full w-3 right-0 shadow-lg flex items-center justify-center h-3 relative hover:scale-105 duration-500">
                  <div className="text-xl top-0">...</div>
                </nav>
            </div>

            <div className=" p-10 flex flex-col items-center justify-center "> 
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4">
                    
                </div>


                <div className="">
                      <h1 className="text-2xl font-medium ">Cida | Tancista de Rainha </h1>
                </div>
            </div>

            <div className="">
                
                <button className="w-full">
                    <Popup />
                  
                </button>

                <button onClick={() => window.location.href = "https://maps.app.goo.gl/LCoLnD7nMuGYDC439"} className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4 flex flex-col items-center justify-center relative hover:scale-105 duration-500 w-full">
                    <span className="text-xl font-medium"> ATENDIMENTO A DOMICILIO - BOM JESUS</span>
                </button>
               
                <button onClick={() => window.location.href = "https://www.instagram.com/braidsofqueen/"} className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4 flex flex-col items-center justify-center relative hover:scale-105 duration-500 w-full">
                    <span className="text-xl font-medium"> INSTAGRAM</span>
                </button>

                <button onClick={(): string => window.location.href = "https://wa.me/5521993267980"} className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4 flex flex-col items-center justify-center relative hover:scale-105 duration-500 w-full">
                    <span className="text-xl font-medium"> CONTATO </span>
                </button>

            </div>

        </main>

        <div className="absolute bottom-0 bg-white p-4 w-screen shadow-lg flex items-center justify-center h-3">
              <footer>
                  <p className="text-">© 2025 Cida | Tancista de Rainha</p>
              </footer>
        </div>
    </div>
  );
}