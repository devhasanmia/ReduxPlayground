import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* todo Item Start*/}
      <TodoItem />
      {/* todo Item End*/}
    </div>
  );
};

export default TodoList;
