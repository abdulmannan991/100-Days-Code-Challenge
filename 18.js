// Question 52
var mobdata = {
    Device: "Samsungs20",
    storage: "32GB",
    SCreenSize: "6.78 inches",
    Battery: "4000MAH",
};
console.log("The device is ".concat(mobdata.Device, "\n The storage is ").concat(mobdata.storage, "\n The screen size is ").concat(mobdata.SCreenSize, "\n The battery MAH is ").concat(mobdata.Battery));
// Question 53
console.log("___________________________________________________");
var Objective = [
    [
        ["JavaScript", "Next.Js", "Flutter"],
        ["Compiler", "Text Editor", "Debugger"],
        ["Angular.JS", "Laravell", "Express.JS"],
    ],
];
console.log("This is programming languages\n", Objective[0][0], "\nThis is Tools \n", Objective[0][1], "\nThis is Software FrameWork \n", Objective[0][2]);
// Question 54
console.log("___________________________________________________");
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
