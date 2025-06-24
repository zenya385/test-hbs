import handlebars from "handlebars";

export function loadTemplate(url, context, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((source) => {
      const template = handlebars.compile(source);
      const html = template(context);
      callback(html);
    })
    .catch((error) => {
      console.error("Помилка при завантаженні шаблону:", error);
      callback(html);
    });
}

// export function renderTemplate(template, context) {}
