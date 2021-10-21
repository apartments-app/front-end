import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import InfoGroup from "./InfoGrouping/InfoGroup";
import BottomNav from "./BottomNav";

const fakeSchedule = {
  1423: { what: "Room Tour", where: "Joyce Manor Room A", when: "11AM" },
};
const fakeTasks = {
  412: {
    action: "Confirm",
    details: "current Tenant Party for Room A in Joyce Manor",
  },
};
const fakeActivity = {
  153: {
    action: "Added to waitlist for Room A in Joyce Manor!",
    time: "5/13/21 4:15PM",
  },
  155: {
    action:
      "You sent Molly W. an invite to your Tenant Party for Room A in Joyce Manor",
    time: "5/14/21 5:27PM",
  },
  159: {
    action:
      "You sent Alex Z. an invite to your Tenant Party for Room A in Joyce Manor",
    time: "5/13/21 4:15PM",
  },
};

const Homepage = () => {
  const [schedule, setSchedule] = useState({});
  const [tasks, setTasks] = useState({});
  const [activity, setActivity] = useState({});

  useEffect(() => {
    setSchedule(fakeSchedule);
    setTasks(fakeTasks);
    setActivity(fakeActivity);
  }, []);

  //   delete this?
  // const Header = styled.h1`
  //     font-family: 'Grand Hotel', cursive, sans-serif;
  //     font-style: normal;
  //     font-weight: normal;
  //     font-size: 56px;
  //     line-height: 42px;
  //     color: #FFFFFF;
  // `

  return (
    <Wrapper background="linear-gradient(180deg, #CD77DB 0%, #A1D8FF 54.53%, #FFFFFF 88.31%, #FFFFFF 100%)">
      <InfoGroup heading="Schedule" more="view full schedule" data={schedule} />
      <InfoGroup heading="Tasks" more="read more" data={tasks} />
      <InfoGroup heading="Recent Activity" more="read more" data={activity} />
      <BottomNav />
    </Wrapper>
  );
};

export default Homepage;
