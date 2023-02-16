import React from "react";
import Schedule from "./Schedule";
import Clock from "./Clock";

export default class StartSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [
        { date: "Thu Feb 15 2023", tasks: [], idTracker: 0 },
        { date: "Thu Feb 14 2023", tasks: [], idTracker: 0 },
        { date: "Thu Feb 13 2023", tasks: [], idTracker: 0 },
      ],
      todaySchedule: false,
    };
  }

  createNewDay = () => {
    let newDateId = new Date().toDateString("en-us", {
      year: "numeric",
      month: "short",
    });

    let newDate = { date: newDateId, tasks: [], idTracker: 0 };

    const newSchedule = [...this.state.schedules.reverse(), newDate];
    newSchedule.reverse();
    this.setState(
      {
        schedules: newSchedule,
        todaySchedule: true,
      },
      () => this.storeLocally()
    );
  };

  componentDidMount = () => {
    const prevState = JSON.parse(localStorage.getItem("schedule"));

    if (prevState !== null) {
      this.setState(prevState);
      const haveToday = prevState.schedules.filter((date) =>
        date.date ===
        new Date().toDateString("en-us", {
          year: "numeric",
          month: "short",
        })
          ? true
          : false
      );

      if (haveToday.length !== 1) {
        this.setState({
          todaySchedule: false,
        });
      }
    }
  };

  storeLocally = () => {
    // you can only store json strings inside local storage - this function creates json strings

    let storedJson = JSON.stringify(this.state);
    console.log(storedJson);
    // set the new item into local storage
    localStorage.setItem("schedule", storedJson);
  };

  updateTask = (obj) => {
    console.log(this.state);
    //find the object and update the state
    const prevState = JSON.parse(localStorage.getItem("schedule"));
    const newSchedule = prevState.schedules.map((date) =>
      date.date === obj.date ? obj : date
    );
    this.setState(
      {
        schedules: newSchedule,
      },
      () => this.storeLocally()
    );
  };

  render() {
    const currentDate = new Date().toDateString("en-us", {
      year: "numeric",
      month: "short",
    });
    return (
      <div className="w-4/6 h-4/6 flex items-center justify-center flex-col p-5 text-white">
        {this.state.todaySchedule === false ? (
          <div>
            <div className="fira text-left w-full text-xl">Today is : </div>
            <Clock />
            <button onClick={this.createNewDay}> Start the day</button>
          </div>
        ) : (
          <div>
            {this.state.schedules.map(
              (schedules) =>
                schedules.date === currentDate ? (
                  <Schedule
                    key={schedules.date}
                    {...schedules}
                    updateTask={this.updateTask}
                  />
                ) : null
              /* <Schedule
                key={schedules.date}
                {...schedules}
                updateTask={this.updateTask}
              /> */
            )}
          </div>
        )}
      </div>
    );
  }
}
