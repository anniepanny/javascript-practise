const arr = [];

function addIfNotExist(data) {
  if (arr.indexOf(data) == -1) {
    arr.push(data)
    console.log("sucessfully added");
  } else {
    console.log("already exist");
  }
}
addIfNotExist(1);
addIfNotExist(1);
addIfNotExist(200);
