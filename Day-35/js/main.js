import { client } from "./client.js";

const postsEl = document.querySelector(".posts");

let isLoading = false;
let page = 1;
const limitPostInPage = 3;

const renderPost = ({ id, user, title, content }) => {
  const postItem = document.createElement("div");
  postItem.classList.add("post-item");

  const h2 = document.createElement("h2");
  h2.classList.add("post-title");
  h2.innerText = title;
  postItem.append(h2);

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.classList.add("avatar-img");

  if (user.admin) {
    img.classList.add("admin");
    const crown = document.createElement("img");
    crown.src =
      "https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg";
    crown.classList.add("crown");
    imgContainer.append(crown);
  }
  img.src = user.avatar_url;

  const h3 = document.createElement("h3");
  h3.innerText = user.name;
  imgContainer.append(img);
  userInfo.append(imgContainer);
  userInfo.append(h3);

  const divContent = document.createElement("div");
  const htmlContent = marked.parse(content);
  divContent.innerHTML = htmlContent;

  postItem.append(h2, userInfo, divContent);
  postsEl.append(postItem);
};

const getPosts = async (query = {}, isLoadMore = false) => {
  const queryString = new URLSearchParams(query).toString();

  try {
    const { data } = await client.get(`/posts?${queryString}`);

    if (!isLoadMore) {
      data.forEach(renderPost);
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchMoreData = () => {
  if (isLoading) {
    return;
  }

  isLoading = true;
  const loadingContainer = document.createElement("div");
  loadingContainer.classList.add("sk-fading-circle");
  loadingContainer.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
  `;

  postsEl.append(loadingContainer);

  getPosts({}, true).then((data) => {
    page++;
    getPosts({ _limit: limitPostInPage, _page: page });
    if (page > data.length / limitPostInPage) {
      page = 0;
    }
    isLoading = false;
    loadingContainer.remove();
  });
};

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 300) {
    fetchMoreData();
  }
});

getPosts({ _limit: limitPostInPage, _page: page });
