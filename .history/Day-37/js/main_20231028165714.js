import { client } from "./client.js";
import { config } from "./config.js";
const { SERVER_API_AUTH } = config;

const app = {
  root: document.querySelector("#root"),
  loginForm: document.querySelector(".login"),
  isLogin: function () {
    return false;
  },
  render: function () {
    let html;
    if (this.isLogin()) {
      html = ` <div class="container py-3">
      <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
      <ul class="profile list-unstyled d-flex gap-3">
        <li>Chào bạn: <span class="name">Hoàng An</span></li>
        <li><a href="#" class="text-decoration-none">Đăng xuất</a></li>
      </ul>
    </div>`;
    } else {
      html = `<div class="container py-3">
    <div class="row justify-content-center">
    <div class="col-12 col-lg-6">
    <h2 class="text-center">Đăng nhập</h2>
    <form action="" class="login">
    <div class="mb-3">
      <label for="">Email</label>
      <input
        type="email"
        name="email"
        class="form-control email"
        placeholder="Email..." 
        required/>
    </div>
    <div class="mb-3">
      <label for="">Password</label>
      <input
        type="password"
        name="password"
        class="form-control password"
        placeholder="Password..."
        required/>
    </div>
    <div class="d-grid">
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </div>
    <div class="msg mt-3 text-center text-danger">123</div>
  </form>
      </div>
      </div>
      </div>`;
    }

    this.root.innerHTML = html;
  },

  addEvent: function () {
    this.root.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("login")) {
        const emailEl = e.target.querySelector(".email");
        const passwordEl = e.target.querySelector(".password");

        const email = emailEl.value;
        const password = passwordEl.value;
        console.log(email, password);
      }
    });
  },

  start: function () {
    // Khởi động ứng dụng
    this.render();
    this.addEvent();
  },
};
app.start();
