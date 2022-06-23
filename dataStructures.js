// level 3

let objToUpper = (obj) => {
  let {
    name,
    job,
    workDetails: { type, hours },
    educationQualifications,
  } = obj;

  let tempEdu = [];

  for (let i of educationQualifications) {
    let tempObj = {
      name: i.name.toUpperCase(),
      type: i.type.toUpperCase(),
    };
    tempEdu.push(tempObj);
  }

  let temp = {
    name: name.toUpperCase(),
    job: job.toUpperCase(),
    workDetails: { type: type.toUpperCase(), hours: hours.toUpperCase() },
    educationQualifications: tempEdu,
  };

  return temp;
};
