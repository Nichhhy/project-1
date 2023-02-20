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
      startTime: {
        label: "12 am",
        value: 0,
      },
      endTime: {
        label: "12 am",
        value: 0,
      },
      status: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.endTime.value <= this.state.startTime.value) {
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
      startTime: {
        label: "12 am",
        value: 0,
      },
      endTime: {
        label: "12 am",
        value: 0,
      },
      status: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleChangeSelect = (e) => {
    const { name, value } = e.target;

    const timeValue = time.find((time) => time.value === parseInt(value));

    this.setState({
      [name]: timeValue,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="text-2xl my-[20px]">Add tasks</p>
        <table className="w-full ">
          <tbody>
            <tr>
              <td className="w-[5%]"></td>
              <td className="tdStyle">
                <input
                  className="bg-transparent w-full"
                  name="taskName"
                  type="text"
                  placeholder="Enter new task..."
                  value={this.state.taskName}
                  onChange={this.handleChange}
                  required
                ></input>
              </td>
              <td className="tdStyle">
                <select
                  className="bg-transparent w-full"
                  name="startTime"
                  value={this.state.startTime.value}
                  onChange={this.handleChangeSelect}
                >
                  {time.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td className="tdStyle">
                <select
                  className="bg-transparent w-full"
                  name="endTime"
                  value={this.state.endTime.value}
                  onChange={this.handleChangeSelect}
                >
                  {time.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td className="tdStyle">
                <input
                  className="bg-transparent w-full"
                  name="status"
                  type="text"
                  value="To Do"
                  disabled
                ></input>
              </td>
              <td className="w-[5%]">
                <input
                  className="cursor-pointer"
                  name="submit"
                  type="submit"
                  value="add"
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
