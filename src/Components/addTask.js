import React from "react";

const time = [
  {
    label: "12 am",
    value: 0,
  },
  {
    label: "1 am",
    value: 1,
  },
  {
    label: "2 am",
    value: 2,
  },
  {
    label: "3 am",
    value: 3,
  },
  {
    label: "4 am",
    value: 4,
  },
  {
    label: "5 am",
    value: 5,
  },
  {
    label: "6 am",
    value: 6,
  },
  {
    label: "7 am",
    value: 7,
  },
  {
    label: "8 am",
    value: 8,
  },
  {
    label: "9 am",
    value: 9,
  },
  {
    label: "10 am",
    value: 10,
  },
  {
    label: "11 am",
    value: 11,
  },
  {
    label: "12 pm",
    value: 12,
  },
  {
    label: "1 pm",
    value: 13,
  },
  {
    label: "2 pm",
    value: 14,
  },
  {
    label: "3 pm",
    value: 15,
  },
  {
    label: "4 pm",
    value: 16,
  },
  {
    label: "5 pm",
    value: 17,
  },
  {
    label: "6 pm",
    value: 18,
  },
  {
    label: "7 pm",
    value: 19,
  },
  {
    label: "8 pm",
    value: 20,
  },
  {
    label: "9 pm",
    value: 21,
  },
  {
    label: "10 pm",
    value: 22,
  },
  {
    label: "11 pm",
    value: 23,
  },
];

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskId: "",
      taskName: "",
      startTime: "",
      endTime: "",
      status: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.endTime <= this.state.startTime) {
      alert("Please enter proper end Time");
    } else {
      this.setState(
        { taskId: this.props.idTracker + 1, status: "To Do" },
        () => {
          const task = this.state;
          this.props.addTask(task);
          this.resetDate();
        }
      );
    }
  };

  resetDate = () => {
    this.setState({
      taskId: "",
      taskName: "",
      startTime: "",
      endTime: "",
      status: "",
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  name="taskName"
                  type="text"
                  value={this.state.taskName}
                  onChange={this.handleChange}
                ></input>
              </td>
              <td>
                <select
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.handleChange}
                >
                  {time.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.handleChange}
                >
                  {time.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input name="status" type="text" value="To Do" disabled></input>
              </td>
              <td>
                <input name="submit" type="submit" value="submit"></input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
