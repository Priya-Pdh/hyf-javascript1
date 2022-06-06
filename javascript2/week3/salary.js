const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];
const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const mondayEarning = monday.filter(workDurations =>(workDurations.duration>119)).map(workDurations => (workDurations.duration/60*20)).reduce((sum, workDurations) => "€" +(sum + workDurations).toFixed(2))
console.log(mondayEarning)

const tuesdayEarning = tuesday.filter(workHours =>(workHours.duration>119)).map(workHours => (workHours.duration/60*20)).reduce((sum, workHours) => "€" +(sum + workHours).toFixed(2), 0)

console.log(tuesdayEarning)


//result: €100
//        €60