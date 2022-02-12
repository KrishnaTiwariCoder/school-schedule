const { generateSampleData, randomSubject, checks } = require("./functions.js");
const fs = require("fs");

console.log(
  "---------------------------------------------------------------------------------------------------"
);
const createScheduleForSchool = (classesNo, subjects, periods, days) => {
  let result = generateSampleData(classesNo, days);

  for (let i = 0; i < result.length; i++) {
    console.log("-----", result[i].name);
    const element = result[i];

    for (let j = 0; j < days.length; j++) {
      console.log("---", days[j]);
      for (let k = 0; k < periods; k++) {
        let period = checks(
          element.schedule,
          element.schedule[days[j]],
          randomSubject(subjects),
          subjects,
          result.filter((item) => item.id !== element.id),
          k,
          days[j]
        );
        console.log(period);
        element.schedule[days[j]].push(period);
      }
    }
  }

  return result;
};

let out = createScheduleForSchool(
  1,
  {
    Math: 7,
    English: 6,
    SST: 7,
    Physics: 7,
    Hindi: 5,
    Games: 2,
    Chemistry: 7,
    Biology: 7,
  },
  8,
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
);

let obj = {
  Monday: [
    "SST",
    "Math",
    "Biology",
    "English",
    "Hindi",
    "Physics",
    "Chemistry",
    "Games",
  ],
  Tuesday: ["Games", "Chemistry", "Biology", "Math", "Hindi", "Physics"],
};

fs.writeFileSync("./output.js", JSON.stringify(out));
