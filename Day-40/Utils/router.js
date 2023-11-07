import Navigo from "navigo";

const app = document.querySelector("#root");
const navigator = new Navigo("/");

export const router = (paths, DefaultLayout) => {
  const render = (app, html) => {
    app.innerHTML = html;
  };
  if (paths.length) {
    paths.forEach((path) => {
      navigator.on(path.path, (item) => {
        let renderingHTML;
        if (DefaultLayout) {
          renderingHTML = DefaultLayout();
          const regex = /\{body\}/g;
          renderingHTML = renderingHTML.replace(regex, path.component(item));
        } else {
          renderingHTML = path.component(item);
        }
        render(app, renderingHTML);
      });
    });
  }

  navigator.resolve();
};

window.navigateTo = (path) => {
  navigator.navigate(path);
};
