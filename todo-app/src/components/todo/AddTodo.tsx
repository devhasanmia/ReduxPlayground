import { FormEvent, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Clicked submit", { title, description });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-50 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-800 text-center">
              Add New Todo
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 text-center">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-gray-700">
                Title
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right text-gray-700">
                Description
              </Label>
              <Input
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className='text-right'>
            <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
              Add Todo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
