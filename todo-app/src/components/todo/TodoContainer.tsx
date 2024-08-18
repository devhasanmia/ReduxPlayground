import { Button } from "../ui/button";

const TodoContainer = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Header Buttons */}
            <div className="flex justify-between items-center space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Add Todo</Button>
                <Button className="bg-gray-600 text-white hover:bg-gray-700">Filter</Button>
            </div>

            {/* Todo Item */}
            <div className="bg-red-100 w-full h-auto rounded-xl shadow-lg p-4">
                <div className="bg-white rounded-lg flex justify-between items-center p-4 shadow-md space-x-4">
                    <div className="flex items-center space-x-4 justify-between">
                        <p className="text-gray-700 font-semibold">Todo Title</p>
                        <p className="text-gray-500">Time</p>
                        <p className="text-gray-500">Description</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="bg-red-500 text-white hover:bg-red-600">Delete</Button>
                        <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</Button>
                    </div>
                </div>
            </div>

            <div className="bg-red-100 w-full h-auto rounded-xl shadow-lg p-4">
                <div className="bg-white rounded-lg flex justify-between items-center p-4 shadow-md space-x-4">
                    <div className="flex items-center space-x-4 justify-between">
                        <p className="text-gray-700 font-semibold">Todo Title</p>
                        <p className="text-gray-500">Time</p>
                        <p className="text-gray-500">Description</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="bg-red-500 text-white hover:bg-red-600">Delete</Button>
                        <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</Button>
                    </div>
                </div>
            </div>

            <div className="bg-red-100 w-full h-auto rounded-xl shadow-lg p-4">
                <div className="bg-white rounded-lg flex justify-between items-center p-4 shadow-md space-x-4">
                    <div className="flex items-center space-x-4 justify-between">
                        <p className="text-gray-700 font-semibold">Todo Title</p>
                        <p className="text-gray-500">Time</p>
                        <p className="text-gray-500">Description</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="bg-red-500 text-white hover:bg-red-600">Delete</Button>
                        <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
