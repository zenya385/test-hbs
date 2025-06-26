import Handlebars from "handlebars";
import { context } from "./data/user.js";
import templateString from "bundle-text:../templates/greeting.handlebars";

// console.log("context:", context);
// console.log("template string:", templateString);

const template = Handlebars.compile(templateString);
document.getElementById("app").innerHTML = template(context);
