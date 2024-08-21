import { Button } from "../ui/button";
import AddTodo from "./AddTodo";
import TodoCard from "./TodoCard";
const TodoContainer = () => {
    return (
        <div className="p-8 space-y-8  min-h-screen">
            <div className="flex justify-between items-center space-x-4">
                <AddTodo />
                <Button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800 shadow-md rounded-lg">
                    Filter
                </Button>
            </div>
            <TodoCard />
        </div>
    );
};

export default TodoContainer;
