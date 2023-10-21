import { client } from "./client.js";

const pageLoading = document.querySelector(".page-loading");
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

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.classList.add("avatar-img");
  if (user.is_pro) {
    img.classList.add("pro");
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

  const separate = document.createElement("div");
  separate.style.width = "100%";
  separate.style.height = "10px";
  separate.style.background = "red";

  postItem.append(h2, userInfo, divContent, separate);
  postsEl.append(postItem);
};

const getPosts = async (query = {}, isLoadMore = false) => {
  const queryString = new URLSearchParams(query).toString();

  try {
    const { data } = await client.get(`/posts?${queryString}`);
    if (!isLoadMore) {
      postsEl.innerHTML = "";
    }
    data.forEach(renderPost);
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
  const loadMoreText = document.createElement("p");
  loadMoreText.innerText = "Loading...";
  postsEl.append(loadMoreText);

  getPosts({ _limit: limitPostInPage, _page: page++ }, true)
    .then(() => {
      isLoading = false;
      loadMoreText.remove();
    })
    .catch((error) => {
      isLoading = false;
      loadMoreText.remove();
      console.error("Error loading more data:", error);
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
