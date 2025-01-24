import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span>
              {task.task} - <span className="font-bold">{task.priority}</span>
            </span>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="text-red-600"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
