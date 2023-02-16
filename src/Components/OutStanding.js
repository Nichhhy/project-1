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
    let newTasks = [...this.state.tasks].filter((eachTask) => {
      return eachTask.taskId !== task;
    });
    this.setState(
      () => ({
        tasks: newTasks,
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
        <div>{this.state.date}</div>
        <table className="w-full">
          <tbody>
            {this.props.tasks.map((tasks) => (
              <tr key={tasks.taskId}>
                <td>{tasks.taskName}</td>
                <td>{tasks.startTime}</td>
                <td>{tasks.endTime}</td>
                <td>{tasks.status}</td>
                <td>
                  <button onClick={() => this.deleteTask(tasks.taskId)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
