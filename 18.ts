// Question 52

type MobDetail = {
  Device: String;
  storage: String;
  SCreenSize: String;
  Battery: String;
};

let mobdata: MobDetail = {
  Device: "Samsungs20",
  storage: "32GB",
  SCreenSize: "6.78 inches",
  Battery: "4000MAH",
};

console.log(
  `The device is ${mobdata.Device}\n The storage is ${mobdata.storage}\n The screen size is ${mobdata.SCreenSize}\n The battery MAH is ${mobdata.Battery}`
);

// Question 53
console.log("___________________________________________________");

let Objective = [
  [
    ["JavaScript", "Next.Js", "Flutter"],
    ["Compiler", "Text Editor", "Debugger"],
    ["Angular.JS", "Laravell", "Express.JS"],
  ],
];

console.log(
  "This is programming languages\n",
  Objective[0][0],
  "\nThis is Tools \n",
  Objective[0][1],
  "\nThis is Software FrameWork \n",
  Objective[0][2]
);

// Question 54

console.log("___________________________________________________");
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark");

console.log(userPreference);