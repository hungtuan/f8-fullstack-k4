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

  goHomePage: async function () {
    const home = `
    <div class="header">
    <h1>Blogger</h1>
    <button class="loginButton">Đăng Nhập</button>
    </div>`;

    const postsElement = await this.renderPosts();
    this.root.innerHTML = `${home}${postsElement.innerHTML}`;
    return home;
  },

  render: async function () {
    let html;
    if (this.isLogin()) {
      html = `<div class="container py-3">
      <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
      <ul class="profile list-unstyled d-flex gap-3">
        <li>Chào bạn: <span class="name">Loading...</span></li>
        <li><a href="#" class="text-decoration-none logout">Đăng xuất</a></li>
      </ul>
    </div>`;

      this.getProfile();
    } else {
      const postsElement = await this.renderPosts();

      html = `${this.goHomePage()}${postsElement.innerHTML}`;
    }

    this.root.innerHTML = html;
  },

  renderPosts: async function () {
    const { response, data: posts } = await client.get("/blogs");
    console.log(response, posts);

    if (response.ok) {
      const postsEl = document.createElement("div");
      postsEl.classList.add("posts");
      posts.data.forEach(function (post) {
        //
        const currentTime = new Date();
        const createdAtTime = new Date(post.createdAt);
        const timeDifference = currentTime - createdAtTime;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const remainingMinutes = minutesDifference % 60;

        const hoursDifference = Math.floor(minutesDifference / 60);

        //
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
      <div class="posts">
      <div class="post">
          <div class="time">
              <div class="time-detail">
                  <span class="preiod">
                      <span>${hoursDifference} giờ trước</span>
                  </span>
                  <div class="time-post">
                      <span class="hours">${hoursDifference}h sáng</span>
                       <span class="minutes">${remainingMinutes} phút</span>
                  </div>
              </div>
              <span class="tag-name">@${post.userId.name}</span>
          </div>
          <div class="post-detail">
              <div class="info-user">
                  <div class="avatar"><a href="#">${post.userId.name.charAt(
                    0
                  )}</a></div>
                  <div class="user-name"><a href="#">${
                    post.userId.name
                  }</a></div>
              </div>
              <h2 class="title">${post.title}</h2>
              <p class="post-content">
                  ${post.content}
              </p>
              <div class="view-detail-post"><a href="#"># view more test...</a></div>
              <div class="post-footer">
                  <div class="user-profile"><a href="#"># admin01</a></div>
                  <div class="read-time">Khoảng 1 giây đọc</div>
              </div>
          </div>
      </div>
      </div>
      `;
        postsEl.append(postEl);
      });
      return postsEl;
    }
  },

  renderLoginForm: function () {
    let loginFormPage = `<div class="container py-3">
    <div class="row justify-content-around align-items-center">
      <div class="col-12 col-md-6 col-lg-4">
        
        <div class="mt-3 d-flex flex-column justify-content-start">
        <p>Hãy nhập email và mật khẩu của bạn để truy cập vào nền tảng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình. Nếu bạn chưa có tài khoản, hãy đăng ký ngay để tham gia cộng đồng Blogger</p>
          <a href="#" class="home">Về trang chủ</a>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
       
        <h2 class="text-center">Đăng nhập</h2>
        <form action="" class="login">
          <div class="mb-3">
            <label for="">Email</label>
            <input type="email" name="email" class="form-control email" placeholder="Email..." required />
          </div>
          <div class="mb-3">
            <label for="">Password</label>
            <input type="password" name="password" class="form-control password" placeholder="Password..." required />
          </div>
          <div class="d-grid-2 text-center">
            <button class="btn btn-primary">Đăng nhập</button>
            <button class="btn btn-primary btn-register">Đăng ký</button>
          </div>
          <div class="msg mt-3 text-danger text-center"></div>
        </form>
      </div>
    </div>
  </div>`;
    this.root.innerHTML = loginFormPage;
  },

  renderSignUpForm: function () {
    let signUpFormPage = `<div class="container py-3">
    <div class="row justify-content-around align-items-center">
      <div class="col-12 col-md-6 col-lg-4">
        
        <div class="mt-3 d-flex flex-column justify-content-start">
        <p>Hãy nhập email và mật khẩu của bạn để truy cập vào nền tảng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình. Nếu bạn chưa có tài khoản, hãy đăng ký ngay để tham gia cộng đồng Blogger</p>
          <a href="#" class="home">Về trang chủ</a>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
       
        <h2 class="text-center">Đăng Ký</h2>
        <form action="" class="register">
        <div class="mb-3">
        <label for="">Enter Your Name</label>
        <input type="text" name="name" class="form-control name-register" placeholder="Name..." required />
      </div>
          <div class="mb-3">
            <label for="">Enter Your Email</label>
            <input type="email" name="email" class="form-control email-register" placeholder="Email..." required />
          </div>
          <div class="mb-3">
            <label for="">Enter Your Password</label>
            <input type="password" name="password" class="form-control password-register" placeholder="Password..." required />
          </div>
          <div class="d-grid-2 text-center">
            <button class="btn btn-primary btn-login">Đăng nhập</button>
            <button  class="btn btn-primary btn-register">Đăng ký</button>
          </div>
          <div class="msg mt-3 text-danger text-center"></div>
        </form>
      </div>
    </div>
  </div>`;
    this.root.innerHTML = signUpFormPage;
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
        this.renderLoginForm();
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("home")) {
        e.preventDefault();
        this.goHomePage();
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-register")) {
        e.preventDefault();
        this.renderSignUpForm();
      }
    });

    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-login")) {
        e.preventDefault();
        this.renderLoginForm();
      }
    });

    this.root.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("register")) {
        const nameRegister = e.target.querySelector(".name-register");
        const emailRegister = e.target.querySelector(".email-register");
        const passwordRegister = e.target.querySelector(".password-register");

        const name = nameRegister.value;
        const email = emailRegister.value;
        const password = passwordRegister.value;
        this.signUp({ name, email, password });
      }
    });
  },

  loading: function (status = true) {
    const buttonLogin = this.root.querySelector(".login .btn");
    const buttonRigister = this.root.querySelector(".register .btn-register");
    if (status) {
      buttonLogin.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
      buttonLogin.disabled = true;
    } else {
      buttonLogin.innerHTML = `Đăng nhập`;
      buttonLogin.disabled = false;
    }

    if (status) {
      buttonRigister.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
      buttonRigister.disabled = true;
    } else {
      buttonRigister.innerHTML = `Đăng ký`;
      buttonRigister.disabled = false;
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
      console.log(response, token);
      if (!response.ok) {
        throw new Error("Email hoặc mật khẩu không hợp lệ");
      }

      // Thêm token vào Storage
      localStorage.setItem(
        "login_token",
        JSON.stringify(token.data.accessToken)
      );

      // Render
      this.render();
    } catch (e) {
      this.showError(e.message);
    }
  },

  signUp: async function (userdata) {
    try {
      if (data.status_code === "SUCCESS") {
        buttonRigister.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
        buttonRigister.disabled = true;
      } else {
        buttonRigister.innerHTML = `Đăng ký`;
        buttonRigister.disabled = false;
      }
      // call API
      const { response, data } = await client.post("/auth/register", userdata);

      console.log(response, data);
    } catch (e) {
      e.message;
    }
  },

  getProfile: async function () {
    try {
      let token = localStorage.getItem("login_token");
      let accessToken;
      if (token) {
        accessToken = JSON.parse(token);
      }

      if (!accessToken) {
        throw new Error("accessToken not null");
      }
      client.setToken(accessToken);
      const { response, data: user } = await client.get("/users/profile");

      if (!response.ok) {
        throw new Error("Unauthorize");
      }

      console.log(user);
      const profileEl = this.root.querySelector(".profile");
      const profileName = profileEl.querySelector(".name");
      profileName.innerText = user.data.name;
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
