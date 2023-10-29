import { client } from "./client.js";
import { config } from "./config.js";
const { SERVER_API_AUTH } = config;

client.setUrl(SERVER_API_AUTH);

const app = {
  root: document.querySelector("#root"),
  loginForm: document.querySelector(".login"),
  isLogin: function () {
    const status = localStorage.getItem("login_token") ? true : false;
    return status;
  },
  render: function () {
    let html;
    if (this.isLogin()) {
      html = ` <div class="container py-3">
      <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
      <ul class="profile list-unstyled d-flex gap-3">
        <li>Chào bạn: <span class="name">Loading...</span></li>
        <li><a href="#" class="text-decoration-none logout">Đăng xuất</a></li>
      </ul>
    </div>`;

      this.getProfile();
    } else {
      html = ` <div class="container">
      <h1>Blogger</h1>
      <button id="loginButton">Đăng Nhập</button>
      <div id="blogPosts"></div>
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
        this.login({ email, password });
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("logout")) {
        e.preventDefault();
        this.logout();
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("loginButton")) {
        e.preventDefault();
        console.log("Nhấn");
      }
    });
  },

  loading: function (status = true) {
    const button = this.root.querySelector(".login .btn");
    if (status) {
      button.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
      button.disabled = true;
    } else {
      button.innerHTML = `Đăng nhập`;
      button.disabled = false;
    }
  },

  showError: function (msgText) {
    const msg = this.root.querySelector(".login .msg");
    msg.innerText = ``;
    msg.innerText = msgText;
  },

  login: async function (data) {
    this.loading();
    try {
      // call API
      const { response, data: token } = await client.post("/auth/login", data);
      this.loading(false); // Xóa loading

      if (!response.ok) {
        throw new Error("Email hoặc mật khẩu không hợp lệ");
      }

      // Thêm token vào Storage
      localStorage.setItem("login_token", JSON.stringify(token));

      // Render
      this.render();
    } catch (e) {
      this.showError(e.message);
    }
  },

  getProfile: async function () {
    try {
      let token = localStorage.getItem("login_token");
      let accessToken;
      if (token) {
        accessToken = JSON.parse(token).access_token;
      }

      if (!accessToken) {
        throw new Error("accessToken not null");
      }
      client.setToken(accessToken);
      const { response, data: user } = await client.get("/auth/profile");

      if (!response.ok) {
        throw new Error("Unauthorize");
      }

      console.log(user);
      const profileEl = this.root.querySelector(".profile");
      const profileName = profileEl.querySelector(".name");
      profileName.innerText = user.name;
    } catch (e) {
      if (e.message) {
        this.logout();
      }
    }
  },

  logout: function () {
    localStorage.removeItem("login_token");
    this.render();
  },

  start: function () {
    // Khởi động ứng dụng
    this.render();
    this.addEvent();
    this.getProfile();
  },
};
app.start();
