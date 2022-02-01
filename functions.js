const getRandomSubject = (subjects) => {
  const keys = Object.keys(subjects);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomSubject = keys[randomIndex];
  return randomSubject;
};

const checkAllTheChecks = (subject, subjects, classObj, day, result, k) => {
  const isSubjectAlreadyInTheDay = classObj.schedule[day].includes(subject);

  let isSubjectAlreadyInAnyClass = 0;

  result.map((eachClass) => {
    const schedule = eachClass.schedule;
    const occured = schedule[day][k] === subject;
    if (occured) isSubjectAlreadyInAnyClass++;
  });

  let subjectOccuredInThisWeek = 0;

  Object.entries(classObj.schedule).map((day) => {
    if (day[1].includes(subject)) subjectOccuredInThisWeek++;
  });
  //   if (
  //     !isSubjectAlreadyInTheDay &&
  //     subjectOccuredInThisWeek >= subjects[subject] &&
  //     isSubjectAlreadyInAnyClass === 0
  //   ) {
  //     return true;
  //   }

  //   console.log(
  //     isSubjectAlreadyInTheDay,
  //     subjectOccuredInThisWeek,
  //     subjects[subject],
  //     isSubjectAlreadyInAnyClass
  //   );

  if (
    !isSubjectAlreadyInTheDay &&
    subjectOccuredInThisWeek <= subjects[subject] &&
    isSubjectAlreadyInAnyClass === 0
  ) {
    return true;
  }
};

module.exports = { getRandomSubject, checkAllTheChecks };
