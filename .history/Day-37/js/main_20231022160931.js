import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const app = {
  rootEl: document.querySelector(".posts"),
  query: {
    _sort: "id",
    _order: "desc",
    _limit: PAGE_LIMIT,
    _page: 1,
  },
  modalEl: document.querySelector("#post-detail"),

  render: function (posts) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    this.rootEl.innerHTML = `<div class="row g-3">
    ${posts
      .map(
        ({ id, title, excerpt }) => `<div class="col-6 col-md-4">
    <div class="post-item border p-3">
    <h3><a href="#" data-bs-toggle="modal" data-bs-target="#post-detail" data-id=${id}>${stripHtml(
          title
        )}</a></h3>
     
      <p>
        ${stripHtml(excerpt)}
      </p>
    </div>
  </div>`
      )
      .join("")}
  </div>`;
  },

  pagination: function (totalPage) {
    const paginationRoot = document.querySelector(".page");

    //Tạo 1 array từ 0 đến totalPage
    const range = [...Array(totalPage).keys()];

    paginationRoot.innerHTML = `<nav class="d-flex justify-content-end mt-3">
    <ul class="pagination pagination-sm">
      <li class="page-item"><a class="page-link" href="#">Trước</a></li>
      
      ${range
        .map(
          (index) =>
            `<li class="page-item ${
              +this.query._page === index + 1 ? "active" : ""
            }"><a class="page-link" href="#">${index + 1}</a></li>`
        )
        .join("")}
      
      
      <li class="page-item"><a class="page-link" href="#">Sau</a></li>
    </ul>
  </nav>`;
  },

  // handleGoPage: function () {
  //   this.pageEl.addEventListener("click", () => {});
  // },

  //Call API
  getPosts: async function (query = {}) {
    console.log(query);

    let queryString = Object.entries(query)
      .map((item) => {
        return item.join("=");
      })
      .join("&")
      .replaceAll(" ", "+");

    queryString = queryString ? "?" + queryString : "";

    const { data: posts, response } = await client.get(`/posts${queryString}`);
    this.render(posts);
    window.scroll({
      top: 0,
    });

    // Tổng số trang
    // ToalPage = Math.ceil("Tổng số bài viết/limit")
    const totalPosts = response.headers.get("x-total-count");
    const totalPage = Math.ceil(totalPosts / PAGE_LIMIT);
    this.pagination(totalPage);
  },

  handleSearch: function () {
    const searchForm = document.querySelector(".search");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const keywordEl = e.target.querySelector(".keyword");
      const keyword = keywordEl.value;

      this.query.q = keyword;
      this.getPosts(this.query);
    });
  },

  handleSort: function () {
    const sortBy = document.querySelector(".sort-by");
    sortBy.addEventListener("change", (e) => {
      const value = e.target.value;
      this.query._order = value;

      this.getPosts(this.query);
    });
  },

  handleShowDetail: function () {
    let postId = null;

    this.rootEl.addEventListener("click", (e) => {
      if (e.target.dataset.bsTarget === "#post-detail") {
        postId = e.target.dataset.id;
      }
    });
    this.modalEl.addEventListener("shown.bs.modal", () => {
      if (postId) {
        this.getPost(postId);
      }
    });
  },

  handleCloseModal: function () {
    this.modalEl.addEventListener("hidden.bs.modal", () => {
      const titleEl = this.modalEl.querySelector(".modal-title");
      const bodyEl = this.modalEl.querySelector(".modal-body");
      titleEl.innerText = "";
      bodyEl.innerText = "";
    });
  },

  getPost: async function (id) {
    const titleEl = this.modalEl.querySelector(".modal-title");
    const bodyEl = this.modalEl.querySelector(".modal-body");

    const { data: post, response } = await client.get(`/posts/${id}`);
    console.log(post);
    if (response.ok) {
      const { title, content } = post;
      titleEl.innerText = title;
      bodyEl.innerText = content;
    } else {
      titleEl.innerText = `404 Not Found`;
      bodyEl.innerText = `Khong tim thay bai viet`;
    }
  },

  //Khởi động app
  start: function () {
    this.getPosts(this.query);
    this.handleSearch();
    this.handleSort();
    // this.handleGoPage();
    this.handleShowDetail();
    this.handleCloseModal();
  },
};

//Chạy app
app.start();
