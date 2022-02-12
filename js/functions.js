const generateSampleData = (classesNo, days) => {
  let result = [];
  for (let i = 0; i < classesNo; i++) {
    const classData = {
      id: i,
      name: `Class ${i + 1}`,
      schedule: sampleScheduleForClass(days),
    };
    result.push(classData);
  }
  return result;
};

const sampleScheduleForClass = (days) => {
  let result = {};
  for (let i = 0; i < days.length; i++) {
    result[days[i]] = [];
  }
  return result;
};

const checks = (schedule, day, subject, subjects, classes, period, dayName) => {
  if (
    checkForSubjectInAnyClass(subject, classes, period, dayName) ||
    checkForSubjectAlreadyInDay(day, subject) >= 2 ||
    checkForSubjectOccuredMaxTimes(subject, schedule) >= subjects[subject]
  ) {
    return checks(
      schedule,
      day,
      randomSubject(subjects),
      subjects,
      classes,
      period,
      dayName
    );
  } else {
    return subject;
  }
};

const checkForSubjectAlreadyInDay = (day, subject) => {
  return day.filter((item) => item == subject).length;
};

const checkForSubjectInAnyClass = (subject, classes, period, day) => {
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].schedule[day][period] == subject) {
      return true;
    }
  }
  return false;
};

const checkForSubjectOccuredMaxTimes = (subject, schedule) => {
  let count = 0;
  for (let i = 0; i < Object.keys(schedule).length; i++) {
    const day = schedule[Object.keys(schedule)[i]];
    if (day.includes(subject)) {
      count++;
    }
  }

  //   console.log(
  //     Object.entries(schedule)
  //       .flat()
  //       .flat()
  //       .filter((item) => item == subject).length,
  //     subject
  //   );
  return Object.entries(schedule)
    .flat()
    .flat()
    .filter((item) => item == subject).length;
};

const randomSubject = (subjects) => {
  const keys = Object.keys(subjects);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};

// console.log(
//   checkForSubjectOccuredMaxTimes(
//     "Biology",
//     {
//       Monday: [
//         "SST",
//         "Math",
//         "Biology",
//         "English",
//         "Hindi",
//         "Physics",
//         "Chemistry",
//         "Games",
//       ],
//       Tuesday: [
//         "Games",
//         "Chemistry",
//         "Biology",
//         "Math",
//         "Hindi",
//         "Physics",
//         "English",
//         "SST",
//       ],
//       Wednesday: [
//         "Biology",
//         "Games",
//         "Chemistry",
//         "English",
//         "Hindi",
//         "Math",
//         "SST",
//         "Physics",
//       ],
//       Thursday: [
//         "Math",
//         "SST",
//         "Hindi",
//         "Chemistry",
//         "Biology",
//         "Games",
//         "Physics",
//         "English",
//       ],
//       Friday: [
//         "English",
//         "Chemistry",
//         "Biology",
//         "Hindi",
//         "Math",
//         "Games",
//         "Physics",
//         "SST",
//       ],
//       Saturday: [
//         "English",
//         "SST",
//         "Biology",
//         "Math",
//         "Hindi",
//         "Games",
//         "Chemistry",
//         "Physics",
//       ],
//     },
//     6
//   )
// );

module.exports = {
  generateSampleData,
  sampleScheduleForClass,
  randomSubject,
  checks,
};
