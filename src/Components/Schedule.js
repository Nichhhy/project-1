import React from "react";
import AddTask from "./addTask";
import Clock from "./Clock";
export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
      tasks: props.tasks,
      idTracker: props.idTracker,
    };
  }

  addTask = (task) => {
    let newTasks = [...this.state.tasks, task];

    this.setState(
      (state) => ({
        tasks: newTasks,
        idTracker: state.idTracker + 1,
      }),
      () => {
        const newDate = this.state;
        this.props.updateTask(newDate);
      }
    );
  };

  deleteTask = (task) => {
    let editedTask = [...this.state.tasks].findIndex(
      (tasks) => tasks.taskId === task
    );
    let newArray = [...this.state.tasks];
    newArray[editedTask].status = "Cancelled";

    this.setState(
      () => ({
        tasks: newArray,
      }),
      () => {
        const newDate = this.state;
        this.props.updateTask(newDate);
      }
    );
  };

  completeTask = (task) => {
    let editedTask = [...this.state.tasks].findIndex(
      (tasks) => tasks.taskId === task
    );
    let newArray = [...this.state.tasks];
    newArray[editedTask].status = "Complete";

    this.setState(
      () => ({
        tasks: newArray,
      }),
      () => {
        const newDate = this.state;
        this.props.updateTask(newDate);
      }
    );
  };

  render() {
    return (
      <div>
        <Clock />

        <div className="w-[90%] mx-auto h-[50vh] my-[30px] max-[768px]:overflow-x-auto  max-[768px]:px-[20px] p-[50px] place-content-center flex flex-col justify-center bg-[#D9D9D9] rounded-lg">
          <p className="text-5xl pb-[30px]">{this.props.status}</p>

          {this.props.status === "Things to do" ? (
            <table className="w-full my-[20px] ">
              <thead>
                <tr>
                  <td className="w-[5%]"></td>
                  <td className="tdStyle">Task Name</td>
                  <td className="tdStyle">Start Time</td>
                  <td className="tdStyle">End Time</td>
                  <td className="tdStyle">Status</td>
                  <td className="w-[5%]"></td>
                </tr>
              </thead>
              <tbody>
                {this.props.tasks
                  .sort((a, b) => a.startTime.value - b.startTime.value)
                  .map((tasks) =>
                    tasks.status === "To Do" ? (
                      <tr key={tasks.taskId}>
                        <td className="w-[5%]">
                          <button onClick={() => this.deleteTask(tasks.taskId)}>
                            X
                          </button>
                        </td>
                        <td className="tdStyle">{tasks.taskName}</td>
                        <td className="tdStyle">{tasks.startTime.label}</td>
                        <td className="tdStyle">{tasks.endTime.label}</td>
                        <td className="tdStyle">{tasks.status}</td>
                        <td className="w-[5%]">
                          <button
                            onClick={() => this.completeTask(tasks.taskId)}
                          >
                            &#10004;
                          </button>
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          ) : (
            <table className="w-full my-[20px]">
              <tbody>
                {this.props.tasks
                  .sort((a, b) => a.startTime.value - b.startTime.value)
                  .map((tasks) => (
                    <tr key={tasks.taskId}>
                      <td>
                        {tasks.status === "Complete" ||
                        tasks.status === "Cancelled" ? null : (
                          <button onClick={() => this.deleteTask(tasks.taskId)}>
                            X
                          </button>
                        )}
                      </td>
                      <td className="tdStyle">{tasks.taskName}</td>
                      <td className="tdStyle">{tasks.startTime.label}</td>
                      <td className="tdStyle">{tasks.endTime.label}</td>
                      <td className="tdStyle">{tasks.status}</td>
                      <td>
                        {tasks.status === "Complete" ||
                        tasks.status === "Cancelled" ? null : (
                          <button
                            onClick={() => this.completeTask(tasks.taskId)}
                          >
                            &#10004;
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          {this.props.tasks.length === 0 ? (
            <p className="text-black">Please add a task</p>
          ) : null}
          {this.props.tasks.filter((task) => task.status === "To Do").length ===
          0 ? (
            <p className="text-black">No Tasks Left To Do Today</p>
          ) : null}

          {this.props.status === "Things to do" ? (
            <AddTask addTask={this.addTask} idTracker={this.state.idTracker} />
          ) : null}
        </div>
      </div>
    );
  }
}
