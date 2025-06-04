import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/taskSlice";

export default function TaskEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.find((t) => t.id === parseInt(id))
  );

  const [formData, setFormData] = useState(task);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(formData));
    navigate("/");
  };

  if (!task) return <p>Task not found</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Assigned To</label>
        <input
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Open</option>
          <option>In-Progress</option>
          <option>Under-review</option>
          <option>Done</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Start Date</label>
        <input
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">End Date</label>
        <input
          name="endDate"
          value={formData.endDate || ""}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Save
      </button>
    </form>
  );
}