import React from "react";
import Schedule from "./Schedule";
import Clock from "./Clock";
import OutStanding from "./OutStanding";
import HeaderSection from "./Header";
import FooterSection from "./Footer";

export default class StartSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [
        {
          date: "Thu Feb 15 2023",
          tasks: [
            {
              taskId: 1,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "To Do",
            },
            {
              taskId: 2,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "To Do",
            },
          ],
          idTracker: 0,
        },
        {
          date: "Thu Feb 14 2023",
          tasks: [
            {
              taskId: 1,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "To Do",
            },
            {
              taskId: 2,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "Complete",
            },
          ],
          idTracker: 0,
        },
        {
          date: "Thu Feb 13 2023",
          tasks: [
            {
              taskId: 1,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "Complete",
            },
            {
              taskId: 2,
              taskName: "Do shit",
              startTime: {
                label: "12 am",
                value: 0,
              },
              endTime: {
                label: "1 am",
                value: 1,
              },
              status: "Complete",
            },
          ],
          idTracker: 0,
        },
      ],
      todaySchedule: false,
      status: "Things to do",
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

  updatePage = (s) => {
    this.setState(
      {
        status: s,
      },
      () => this.storeLocally()
    );
  };
  storeLocally = () => {
    // you can only store json strings inside local storage - this function creates json strings

    let storedJson = JSON.stringify(this.state);

    // set the new item into local storage
    localStorage.setItem("schedule", storedJson);
  };

  updateTask = (obj) => {
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
    const statusThingsToDo = (
      <div>
        {this.state.schedules.map((schedules) =>
          schedules.date === currentDate ? (
            <Schedule
              key={schedules.date}
              {...schedules}
              updateTask={this.updateTask}
              status={this.state.status}
            />
          ) : schedules.tasks.filter((task) => task.status === "To Do")
              .length !== 0 ? (
            <OutStanding
              key={schedules.date}
              {...schedules}
              updateTask={this.updateTask}
            />
          ) : null
        )}
      </div>
    );

    const statusSchedule = (
      <div>
        {this.state.schedules.map((schedules) =>
          schedules.date === currentDate ? (
            <Schedule
              key={schedules.date}
              {...schedules}
              updateTask={this.updateTask}
              status={this.state.status}
            />
          ) : null
        )}
      </div>
    );

    const statusOutstanding = (
      <div>
        {this.state.schedules.map((schedules) =>
          schedules.date !== currentDate ? (
            schedules.tasks.filter((task) => task.status === "To Do").length !==
            0 ? (
              <OutStanding
                key={schedules.date}
                {...schedules}
                updateTask={this.updateTask}
              />
            ) : null
          ) : null
        )}
      </div>
    );
    let display = "";

    switch (this.state.todaySchedule) {
      case true:
        switch (this.state.status) {
          case "Things to do":
            display = statusThingsToDo;
            break;
          case "Schedule":
            display = statusSchedule;
            break;
          case "Outstanding":
            display = statusOutstanding;
            break;
          default:
            break;
        }

        break;

      default:
        switch (this.state.status) {
          case "Outstanding":
            break;

          default:
            display = (
              <div>
                <div className="fira text-left w-full text-xl">Today is : </div>
                <Clock />
                <button onClick={this.createNewDay}> Start the day</button>
              </div>
            );
            break;
        }
    }

    return (
      <div className="App">
        <HeaderSection updatePage={this.updatePage} />

        <div className=" flex items-center justify-center w-full">
          <div className="w-full h-4/6 flex items-center justify-center flex-col p-5 text-white">
            {display}
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }
}
