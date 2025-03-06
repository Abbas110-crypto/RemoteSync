import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  // Group tasks by their stage
  const groupedTasks = tasks?.reduce(
    (acc, task) => {
      acc[task.stage]?.push(task);
      return acc;
    },
    { todo: [], "in progress": [], completed: [] }
  );

  return (
    <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
      {/* Render task lists under their corresponding titles */}
      {["todo", "in progress", "completed"].map((stage) => (
        <div key={stage} className="flex flex-col w-full gap-4">
          {/* Task cards */}
          {groupedTasks[stage].map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardView;
