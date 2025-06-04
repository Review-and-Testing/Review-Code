import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TaskDetailPage() {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.taskList.tasks.find((t) => t.id === parseInt(id))
  );

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Details</h2>
      <ul className="list-disc pl-6">
        <li><strong>Title:</strong> {task.title}</li>
        <li><strong>Assigned To:</strong> {task.assignedTo}</li>
        <li><strong>Status:</strong> {task.status}</li>
        <li><strong>Priority:</strong> {task.priority}</li>
        <li><strong>Start Date:</strong> {task.startDate}</li>
        <li><strong>End Date:</strong> {task.endDate || "--"}</li>
      </ul>
    </div>
  );
}