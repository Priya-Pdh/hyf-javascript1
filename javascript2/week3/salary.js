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

let workedHours = monday.concat(tuesday);
//console.log(workedHours);
let totalEarning = workedHours.filter(workDurations =>(workDurations.duration>119)).map(workDurations =>(workDurations.duration/60*20)).reduce((sum, arr) => (sum + arr), 0);

console.log("€" + totalEarning);


//result: €160
