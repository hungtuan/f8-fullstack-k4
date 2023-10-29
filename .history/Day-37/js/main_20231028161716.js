import { client } from "./client.js";

const app = {
  root: document.querySelector("#root"),
  isLogin: function () {
    return false;
  },
  render: function () {
    let html;
    if (this.isLogin()) {
    } else {
      html = `<div class="container py-3 justify-content-center">
<div class="row">
  <div class="col-12 col-lg-6">
    <h2 class="text-center">Đăng nhập</h2>
    <form action="" class="login">
      <div class="mb-3">
        <label for="">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Email..."
        />
      </div>
      <div class="mb-3">
        <label for="">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password..."
        />
      </div>
      <div class="d-grid">
        <button class="btn btn-primary">Đăng nhập</button>
      </div>
      <div class="msg mt-3 text-center text-danger">123</div>
    </form>
  </div>
</div>
</div>`;
    }
  },

  start: function () {
    // Khởi động ứng dụng
  },
};
app.start();
