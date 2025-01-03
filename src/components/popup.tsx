import React, {useState} from "react";

function Popup() {
    const[showPoup, setShowPopup] = useState(false);
    
    const togglePopup = () => {     
        setShowPopup(!showPoup);
    }

    
    
    return (  
        <>
            <button 
                onClick={togglePopup} 
                className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4 flex flex-col items-center justify-center relative hover:scale-105 duration-500 w-full">
                    <span className="text-xl font-medium"> SERVIÇOS </span> 
            </button>

            {showPoup && (
                <>
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gray-200 rounded-lg shadow-lg w-96 h-96 ">
                            <div className=" flex flex-col "> 
                                <div>
                                    <h1 className="pb-6 pt-2 text-2xl font-medium"> Serviços Ofertados </h1>
                                </div>

                                <div className="pb-5 pt-20 text-xl ">
                                    <p className="">
                                        Trança Jumbo
                                    </p>
                                    <p>Trança Nago

                                    </p>
                                    
                                </div>
                            </div>
                            <div className="pt-20">
                                <button 
                                className="bg-black text-white w-36 bottom-0 h-10  rounded-lg shadow-lg"
                                onClick={togglePopup}> Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );

}

export default Popup;   