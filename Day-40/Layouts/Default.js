import "../Assets/css/style.css";

export const DefaultLayout = () => {
  return `
    <header class="header">
        <div class="container-header">
            <h1><a href="/">HEADER</a></h1>
        </div>
    </header>

    <main class="main">
        <div class="container-main">
   <div class="nav">
   <h2>Menu</h2>
           
   <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/products">Product</a></li>
   </ul>
   </div>

                <div class="detail">
                {body}
            </div>
        </div>
       
    </main>
    <footer>
        <div class="container-footer">
            <h1 class="footer">FOOTER</h1>
        </div>
    </footer>
    `;
};
