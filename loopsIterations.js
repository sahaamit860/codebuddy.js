// level 3

let objToArray = (obj) => {
  let { liked, disliked, loved } = obj;
  let tempArr = [];
  for (let i of liked) {
    let tempObj = i;
    tempObj["reaction"] = "liked";
    tempArr = tempArr.concat(tempObj);
  }
  for (let i of disliked) {
    let tempObj = i;
    tempObj["reaction"] = "disliked";
    tempArr = tempArr.concat(tempObj);
  }
  for (let i of loved) {
    let tempObj = i;
    tempObj["reaction"] = "loved";
    tempArr = tempArr.concat(tempObj);
  }

  return tempArr;
};
