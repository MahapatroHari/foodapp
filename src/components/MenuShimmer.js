const MenuShimmer = () => {
    return (
        <div>
            <div className="mt-10">
                <div className="flex items-center justify-center" >
                    <h3 className="bg-gray-300 w-48 h-8 rounded-md"></h3>
                </div>
                <div className="flex items-center justify-center m-4 gap-10 rounded-md">
                    <h3 className="font-bold text-l bg-gray-300 w-28 h-8 rounded-md" ></h3>
                    <h3 className="font-bold text-l bg-gray-300 w-28 h-8 rounded-md"></h3>
                    <h3 className="font-bold text-l bg-gray-300 w-28 h-8 rounded-md"></h3>
                    <h3 className="font-bold text-l bg-gray-300 w-28 h-8 rounded-md"></h3>
                </div>

                <div className="flex items-center justify-center ">
                    <h3 className="bg-gray-300 w-28 h-8 rounded-md"></h3>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-gray-300 mt-5 w-6/12 h-96 rounded-md"></div>
                </div>
                

            </div>
        </div>
    );
};

export default MenuShimmer;
