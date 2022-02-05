const generateSampleData = (classesNo, subjects, days) => {
  let result = [];
  for (let i = 0; i < classesNo; i++) {
    const classData = {
      id: i,
      name: `Class ${i + 1}`,
      schedule: sampleScheduleForClass(subjects, days),
    };
    result.push(classData);
  }
  return result;
};

const sampleScheduleForClass = (subjects, days) => {
  let result = {};
  for (let i = 0; i < Object.keys(subjects).length; i++) {
    result[days[i]] = [];
  }
  return result;
};

const checks = (day, subject, subjects, classes, period, dayName) => {
  if (
    checkForSubjectAlreadyInDay(day, subject) &&
    !checkForSubjectInAnyClass(subject, classes, period, dayName)
  ) {
    return checks(
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
  return day.includes(subject);
};

const checkForSubjectInAnyClass = (subject, classes, period, day) => {
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].schedule[day][period] == subject) {
      return true;
    }
  }
  return false;
};

const randomSubject = (subjects) => {
  const keys = Object.keys(subjects);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};

module.exports = {
  generateSampleData,
  sampleScheduleForClass,
  randomSubject,
  checks,
};
