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
      <div>
        <p className="text-4xl pt-[30px] text-white">{this.state.date}</p>
        <div className="w-[90%] mx-auto  my-[30px]  p-[50px] place-content-center flex flex-col bg-[#D9D9D9] rounded-lg">
          <p className="text-5xl pb-[30px] text-black">OUTSTANDING</p>
          <table className="w-full my-[20px]">
            <tbody>
              {this.props.tasks.map((tasks) =>
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
                      <button onClick={() => this.completeTask(tasks.taskId)}>
                        &#10004;
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
