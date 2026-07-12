import React from 'react'
import { useState,useEffect } from 'react';
import TaskCard from './TaskCard';
const AddTaskModal = (props) => {
 

 const initialFormData = {
  title: "",
  description: "",
  priority: "Low",      
  status: "Todo",
  date: "",
  label: "",
  }
const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
   if (props.editingTask !== null) {
     setFormData(props.editingTask)
   }
   else{
     setFormData(initialFormData)
   }
}, [props.editingTask])
const handleChnage = (e)=> {
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleForm = (e) => {
    e.preventDefault();
   if (props.editingTask !== null) {
    props.handleUpdateTask(formData);
} else {
    props.onAddTask(formData);
}
    props.onClose();
}


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Add New Task
          </h2>

          <button
            onClick={props.onClose}
            className="text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleForm} className="space-y-4">

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              task
            </label>
            <input
             value={formData.title}
              name='title'
              required
              onChange={handleChnage}
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Description
            </label>
            <textarea
            value={formData.description}
             required
              onChange={handleChnage}
              name='description'
              rows="4"
              placeholder="Enter description"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Priority
              </label>

              <select value={formData.priority} required name='priority' onChange={handleChnage} className="w-full rounded-lg border border-gray-300 px-4 py-2">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Status
              </label>

              <select value={formData.status} required name='status' onChange={handleChnage} className="w-full rounded-lg border border-gray-300 px-4 py-2">
                <option value="todo">Todo</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>

          </div>


          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Due Date
            </label>

            <input
            required
            value={formData.date}
              onChange={handleChnage}
              name='date'
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Label
            </label>

            <input
              onChange={handleChnage}
              value={formData.label}
              name='label'
              required
              type="text"
              placeholder="React / Backend / UI"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={props.onClose}
              className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Add Task
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddTaskModal;
