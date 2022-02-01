const fs = require("fs");

const allClasses = 10;

const { getRandomSubject, checkAllTheChecks } = require("./functions");

const subjects = {
  Hindi: 4,
  English: 5,
  Maths: 5,
  History: 3,
  Games: 2,
  Physics: 5,
  Chemistry: 4,
  Biology: 5,
  Economics: 3,
  PoliticalScience: 4,
  Geography: 5,
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const periods = 8;

const result = [];

// 1. Create a loop that runs for all the classes

for (let i = 0; i < allClasses; i++) {
  const classObj = {
    class: i + 1,
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    },
  };

  // 2. In that loop create a loop that runs for all the days
  for (let j = 0; j < days.length; j++) {
    // 3. For each day, create a loop that runs for all the periods
    for (let k = 0; k < periods; k++) {
      // 4. generate a random subject and check that subject is not already in the day and not in any other class same time and check that subject occurence in the week is less than the given subject occurence
      let subject = getRandomSubject(subjects);

      const checked = checkAllTheChecks(
        subject,
        subjects,
        classObj,
        days[j],
        result,
        k
      );

      if (!checked) subject = getRandomSubject(subjects);
      // 5. if all checks pass, add the subject to the day and add the day to the class

      classObj.schedule[days[j]].push(subject);
    }
  }
  result[i] = classObj;
}

return fs.writeFileSync("./output.js", JSON.stringify(result));
