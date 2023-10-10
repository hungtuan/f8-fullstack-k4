class F8 {
  constructor() {}

  static component(name, options) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.data = options.data && options.data();
        }

        connectedCallback() {
          const template = options.template;

          if (template) {
            const updatedTemplate = this.replaceVariables(template);
            const templateNode = this.createTemplateNode(updatedTemplate);
            this.setupEventListeners(templateNode);
            this.append(templateNode);
          }
        }

        replaceVariables(template) {
          return template.replace(/{{(.+?)}}/g, (match, variable) => {
            // Lấy tên biến bên trong dấu ngoặc nhọn {{...}}
            const variableName = variable.trim();
            // Kiểm tra xem biến có tồn tại trong data không
            if (this.data && this.data.hasOwnProperty(variableName)) {
              // Trả về giá trị của biến từ data
              return this.data[variableName];
            }
            // Nếu không tìm thấy biến, trả về chuỗi rỗng
            return "";
          });
        }

        createTemplateNode(template) {
          const templateEl = document.createElement("template");
          templateEl.innerHTML = template;
          return templateEl.content.cloneNode(true);
        }

        setupEventListeners(templateNode) {
          const btnAll = templateNode.querySelectorAll("button");
          const span = templateNode.querySelector(".count-span");
          const h1 = templateNode.querySelector("h1");

          btnAll.forEach((btn) => {
            const btnAttribute = btn.getAttributeNames();
            let getEvent = btnAttribute[0].split(":");
            let eventBtn = getEvent[1];
            let checkAttribute = btn.getAttribute(`v-on:${eventBtn}`);

            btn.addEventListener(eventBtn, () => {
              if (checkAttribute === "count--") {
                this.data.count--;
                span.innerText = this.data.count;
              }
              if (checkAttribute === "count++") {
                this.data.count++;
                span.innerText = this.data.count;
              }
              if (checkAttribute.includes("title=")) {
                let contentTitle = checkAttribute.split("=");
                h1.innerHTML = contentTitle[1];
              }
            });
          });
        }
      }
    );
  }
}
