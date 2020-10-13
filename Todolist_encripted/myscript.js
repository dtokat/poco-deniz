function isUserValid() {
  const password = "str";
  let input = document.querySelector("input");
  var execute = false;
  while (input.value != password) {
    alert("Password is not correct. Please try again!");
    location.reload();
    return false;
  }
  document.write("gunaydin");
  execute = true;
  if (execute == true) {
    for (let index = 0; index < List.length; index++) {
      var item = document.createElement("ul");
      var itemContent = document.createTextNode(
        List[index].name + "   " + List[index].date + "   " + List[index].status
      );
      item.appendChild(itemContent);
      document.body.appendChild(item);
    }
  }

  var element = document.getElementById("div1");
}

var List = [
  {
    name: "Feed The Cat",
    date: "10-05-2020",
    status: "Will be done",
  },
];

// Write the HTML and declare global variables
// password:
// const password = "string";
// prompt for password
// let userPassword = prompt("What is your password?");
// add item:
// let input = document.querySelector("input");
// button:
// let btn = document.querySelector("button");
// to-do-list:
// let ul = document.querySelector("ul");
