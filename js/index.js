import { context } from "./data/user.js";
import { loadTemplate } from "./render.js";

const app = document.getElementById("app");

loadTemplate("../templates/greeting.hbs", context, (html) => {
  app.innerHTML = html;
});
