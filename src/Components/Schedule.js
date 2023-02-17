import React from "react";
import AddTask from "./addTask";

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
      <div className="w-full h-full place-content-center flex flex-col">
        <div> this is schedule</div>
        <div className="text-5xl">{this.state.date}</div>

        <table className="w-full">
          {this.props.status === "Things to do" ? (
            <tbody>
              {this.props.tasks
                .sort((a, b) => a.startTime.value - b.startTime.value)
                .map((tasks) =>
                  tasks.status === "To Do" ? (
                    <tr key={tasks.taskId}>
                      <td>
                        <button onClick={() => this.deleteTask(tasks.taskId)}>
                          DELETE
                        </button>
                      </td>
                      <td>{tasks.taskName}</td>
                      <td>{tasks.startTime.label}</td>
                      <td>{tasks.endTime.label}</td>
                      <td>{tasks.status}</td>
                      <td>
                        <button onClick={() => this.completeTask(tasks.taskId)}>
                          COMPLETE
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
            </tbody>
          ) : (
            <tbody>
              {this.props.tasks
                .sort((a, b) => a.startTime.value - b.startTime.value)
                .map((tasks) => (
                  <tr key={tasks.taskId}>
                    <td>
                      {tasks.status === "Complete" ||
                      tasks.status === "Cancelled" ? null : (
                        <button onClick={() => this.deleteTask(tasks.taskId)}>
                          DELETE
                        </button>
                      )}
                    </td>
                    <td>{tasks.taskName}</td>
                    <td>{tasks.startTime.label}</td>
                    <td>{tasks.endTime.label}</td>
                    <td>{tasks.status}</td>
                    <td>
                      {tasks.status === "Complete" ||
                      tasks.status === "Cancelled" ? null : (
                        <button onClick={() => this.completeTask(tasks.taskId)}>
                          COMPLETE
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
        {this.props.status === "Things to do" ? (
          <AddTask addTask={this.addTask} idTracker={this.state.idTracker} />
        ) : null}
      </div>
    );
  }
}
