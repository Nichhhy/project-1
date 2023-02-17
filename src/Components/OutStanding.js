import React from "react";

export default class OutStanding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
      tasks: props.tasks,
      idTracker: props.idTracker,
    };
  }
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
      <div className=" w-full min-h-[30%]">
        <div> this is OutStanding</div>
        <div>{this.state.date}</div>
        <table className="w-full">
          <tbody>
            {this.props.tasks.map((tasks) =>
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
        </table>
      </div>
    );
  }
}
