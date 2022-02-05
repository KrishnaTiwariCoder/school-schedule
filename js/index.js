const { generateSampleData, randomSubject, checks } = require("./functions.js");
const fs = require("fs");

const createScheduleForSchool = (classesNo, subjects, periods, days) => {
  let result = generateSampleData(classesNo, subjects, days);

  for (let i = 0; i < result.length; i++) {
    console.log("-----", result[i].name);
    const element = result[i];

    for (let j = 0; j < days.length; j++) {
      console.log("-----", days[j]);
      for (let k = 0; k < periods; k++) {
        element.schedule[days[j]].push(
          checks(
            element.schedule[days[j]],
            randomSubject(subjects),
            subjects,
            result.filter((item) => item.id !== element.id),
            k,
            days[j]
          )
        );
      }
    }
  }

  return result;
};

let out = createScheduleForSchool(
  1,
  {
    Math: 10,
    English: 7,
    SST: 7,
    Physics: 5,
    Hindi: 5,
    Games: 2,
    Chemistry: 6,
    Biology: 6,
  },
  8,
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
);

// console.log(out);

fs.writeFileSync("./output.js", JSON.stringify(out));
