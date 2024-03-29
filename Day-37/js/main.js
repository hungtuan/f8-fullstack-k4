import { client } from "./client.js";
import { config } from "./config.js";
const { SERVER_API_AUTH } = config;

client.setUrl(SERVER_API_AUTH);

const app = {
  root: document.querySelector("#root"),
  loginForm: document.querySelector(".login"),
  isLogin: function () {
    const status =
      localStorage.getItem("access_token") ||
      localStorage.getItem("refresh_token")
        ? true
        : false;
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

      html = `${await this.goHomePage()}${postsElement.innerHTML}`;
    }

    this.root.innerHTML = html;
  },

  renderPosts: async function () {
    const { response, data: posts } = await client.get("/blogs");
    console.log(response, posts);

    if (response.ok) {
      const self = this;
      const postsEl = document.createElement("div");

      postsEl.classList.add("posts");
      posts.data.forEach(function (post) {
        //
        post.content = self.handleLine(post.content);
        post.content = self.handleEmail(post.content);
        post.content = self.handlePhone(post.content);
        post.content = self.handleLink(post.content);
        post.content = self.handleSpace(post.content);
        post.content = self.handleVideo(post.content);
        //
        const time = new Date(post.createdAt);
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
      <div class="posts">
      <div class="post-item">
          <div class="time">
              <div class="time-detail">
                  <span class="preiod">
                      <span>${self.handleTime(post.createdAt)}</span>
                  </span>
                  <div class="time-post">
                      <span class="hours">${time.getHours()} h</span>
                       <span class="minutes">${time.getMinutes()} minutes</span>
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
              <div class="post-content">
              <p class="short-content">
                ${post.content}
              </p>
              <div class="full-content">
               <p>${post.content}</p>
              </div>
              <button class="read-more">Xem thêm</button>
            </div>
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
            <button  class="btn btn-primary">Đăng ký</button>
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
        console.log(name, email, password);
        this.signUp({ name, email, password });
      }
    });

    this.root.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("post-form")) {
        const titleEl = e.target.querySelector("#title");
        const contentEl = e.target.querySelector("#content");
        console.log(e.target);
        const title = titleEl.value;
        const content = contentEl.value;

        console.log(title, content);
        this.post({ title, content });
      }
    });

    // Button Xem thêm
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("read-more")) {
        const postContent = e.target.parentElement;
        const shortContent = postContent.querySelector(".short-content");
        const fullContent = postContent.querySelector(".full-content");

        if (fullContent.style.display === "none") {
          fullContent.style.display = "block";
          shortContent.style.display = "none";
          e.target.innerText = "Ản";
        } else {
          fullContent.style.display = "none";
          shortContent.style.display = "block";
          e.target.innerText = "Xem Thêm";
        }
      }
    });
  },

  loading: function (status = true) {
    const buttonLogin = this.root.querySelector(".login .btn");

    if (buttonLogin) {
      if (status) {
        buttonLogin.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
        buttonLogin.disabled = true;
      } else {
        buttonLogin.innerHTML = `Đăng nhập`;
        buttonLogin.disabled = false;
      }
    }
  },

  showError: function (msgText) {
    const msg = this.root.querySelector(".login .msg");
    msg.textContent = msgText;
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

      if (response.ok) {
        localStorage.setItem("access_token", token.data.accessToken);
        localStorage.setItem("refresh_token", token.data.refreshToken);
        client.setToken(token.data.accessToken);
        this.render();
      }
    } catch (e) {
      this.showError(e.message);
    }
  },

  handleRefreshToken: async function () {
    let refresh_token = localStorage.getItem("refresh_token");
    console.log(refresh_token);
    const { response, data: tokens } = await client.post(
      "/auth/refresh-token",
      {
        refreshToken: refresh_token,
      }
    );
    console.log(response, tokens);
    if (response.ok) {
      localStorage.setItem("access_token", tokens.data.token.accessToken);
      localStorage.setItem("refresh_token", tokens.data.token.refreshToken);
      client.setToken(tokens.data.token.accessToken);
    } else {
      alert("Vui lòng đăng nhập lại");
      setTimeout(async () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        await this.goHomePage();
      }, 3000);
    }
  },

  signUp: async function (userdata) {
    const msgElement = this.root.querySelector(".msg");
    try {
      // call API

      const { response, data } = await client.post("/auth/register", userdata);

      console.log(response, data);
      if (response.ok) {
        msgElement.textContent = "Đăng ký thành công!";
        msgElement.classList.remove("text-danger");
        msgElement.classList.add("text-success");
      } else {
        msgElement.textContent = "Đăng ký thất bại: " + data.message;
        msgElement.classList.remove("text-success");
        msgElement.classList.add("text-danger");
      }
    } catch (e) {
      console.error(e.message);
    }
  },

  post: async function (postdata) {
    try {
      // Lấy giá trị ngày từ trường ngày
      const postDate = this.root.querySelector("#post-date").value;
      console.log(postDate);

      // call API
      const { response, data } = await client.post("/blogs", postdata);

      console.log(response, data);

      if (response.ok) {
        alert("Thêm bài viết thành công");
        this.render();
      } else if (response.status === 401) {
        // Nếu token không hợp lệ hoặc đã hết hạn, làm mới token
        await this.handleRefreshToken();

        // Sau khi làm mới token, thử gọi lại phương thức post với token mới
        const { response, data } = await client.post("/blogs", postdata);

        console.log(response, data);

        if (response.ok) {
          alert("Thêm bài viết thành công");
          this.render();
        } else {
          // Xử lý lỗi khi không thể thêm bài viết ngay cả khi đã làm mới token
          console.error("Không thể thêm bài viết:", response.status, data);
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  },

  getProfile: async function () {
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        throw new Error("accessToken not available");
      }

      client.setToken(accessToken);

      const { response, data: user } = await client.get("/users/profile");

      if (response.ok) {
        const profileEl = this.root.querySelector(".profile");
        const container = this.root.querySelector(".container");
        const profileName = profileEl.querySelector(".name");
        profileName.innerText = user.data.name;

        if (!container.querySelector(".post-form")) {
          const htmlPostNew = `
  <div class="form-container form-post">
    <h1>Create a New Post</h1>
    <form class="post-form">
      <div class="form-group">
        <label for="title">Enter Your Title</label>
        <input type="text" id="title" name="title" placeholder="Title" required>
        <p class="error" id="title-error">Please enter the title</p>
      </div>
      <div class="form-group">
        <label for="content">Enter Your Content</label>
        <textarea id="content" name="content" placeholder="Content" required></textarea>
        <p class="error" id="content-error">Please enter your content</p>
      </div>
      <div class="form-group">
        <label for="post-date">Choose Date</label>
        <input type="date" id="post-date" name="post-date" required>
      </div>
      <div class="form-group">
        <button type="submit" id="submit-button-post">Write New!</button>
      </div>
    </form>
  </div>
`;
          profileEl.insertAdjacentHTML("afterend", htmlPostNew);
        }

        const postsElement = await this.renderPosts();
        container.append(postsElement);
      } else {
        this.handleRefreshToken().then(async () => {
          const { response, data: user } = await client.get("/users/profile");
          if (response.ok) {
            this.render();
          }
        });
      }
    } catch (e) {
      console.error("Error in getProfile:", e);
    }
  },

  logout: async function () {
    try {
      const { response } = await client.post("/auth/logout", {});
      if (response.ok) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        client.token = null;
        this.render();
      } else {
        this.handleRefreshToken().then(async () => {
          const { response } = await client.post("/auth/logout", {});
          if (response.ok) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            client.token = null;
            this.render();
          }
        });
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng xuất:", error);
    }
  },

  handleTime: function (time) {
    const currentTime = new Date();
    const postedTime = new Date(time);
    const secondSub = (currentTime.getTime() - postedTime.getTime()) / 1000;
    // console.log(secondSub);
    if (secondSub < 60) {
      return `${Math.floor(secondSub)} giây trước`;
    } else if (secondSub < 3600) {
      return `${Math.floor(secondSub / 60)} phút trước`;
    } else if (secondSub < 3600 * 60) {
      return `${Math.floor(secondSub / 3600)} giờ trước`;
    } else if (secondSub < 3600 * 60 * 31) {
      return `${Math.floor(secondSub / (3600 * 60))} ngày trước`;
    } else if (secondSub < 3600 * 60 * 31 * 12) {
      return `${Math.floor(secondSub / (3600 * 60 * 31))} tháng trước`;
    } else if (secondSub < 3600 * 60 * 31 * 12 * 5) {
      return `${Math.floor(secondSub / (3600 * 60 * 31 * 12))} năm trước`;
    } else {
      return `Vài năm trước`;
    }
  },

  handlePhone: function (content) {
    const pattern = /((0|\+84)\d{9})/gi;
    return content.replace(
      pattern,
      ` <a href="tel:$1" target="_blank" class="phone-regex">$1</a> `
    );
  },
  handleEmail: function (content) {
    const pattern = /(([\w\.-]{3,})@([\w\.-]{1,}\.[a-z]{2,}))/gi;
    return content.replace(
      pattern,
      `<a href="mailto:$1" target="_blank" class="mail-regex">$1</a>`
    );
  },

  handleVideo: function (content) {
    const pattern =
      /<span>www.youtube.com\/watch\?v\=([a-zA-Z0-9]+)(\&?[a-z0-9A-Z\=\-\_\.\/\+\?]+|)<\/span>/g;
    return content.replace(
      pattern,
      `<iframe src="https://www.youtube.com/embed/$1" width="500" height="300"></iframe>`
    );
  },

  handleLink: function (content) {
    const pattern =
      /((?:http|https):\/\/(((?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(?::\d{2,}|))(\/|)[a-zA-Z0-9\?\=\-\_\.\+]*))(\&[^<]*|)/g;
    return content.replace(
      pattern,
      `<a href="$1" target="_blank" class="link-regex"><span>$2</span></a>`
    );
  },
  handleSpace: function (content) {
    const pattern = /\s+/g;
    return content.replace(pattern, " ");
  },
  handleLine: function (content) {
    const pattern = /\n+/g;
    return content.replace(pattern, "\n");
  },

  start: function () {
    // Khởi động ứng dụng
    this.render();
    this.addEvent();
  },
};
app.start();
