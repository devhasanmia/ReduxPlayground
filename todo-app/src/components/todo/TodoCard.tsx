import { Button } from "../ui/button"

const TodoCard = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-xl">
        <thead className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 uppercase text-sm tracking-wider">
          <tr>
            <th className="py-4 px-6 text-left">Status</th>
            <th className="py-4 px-6 text-left">Todo Title</th>
            <th className="py-4 px-6 text-left">Description</th>
            <th className="py-4 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6">Pending</td>
            <td className="py-4 px-6">Sample Todo</td>
            <td className="py-4 px-6">This is a sample description.</td>
            <td className="py-4 px-6 text-center">
              <div className="flex justify-center space-x-2">
                <Button className="bg-red-500 text-white hover:bg-red-600 shadow-md rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </Button>
                <Button className="bg-green-500 text-white hover:bg-green-600 shadow-md rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TodoCard