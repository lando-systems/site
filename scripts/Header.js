export const Header = (elem) => {

  // TODO - remove this, it's for making webstorm http server urls and hrefs match
  const base_path = '/lando.systems-site';

  elem.innerHTML = `
    <h1 class="title">
      <a href="${base_path}/index.html">Lando Systems</a>
    </h1>
    
    <nav role="navigation">
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#games">games</a></li>
        <li><a href="${base_path}/posts/post.html">posts</a></li>
      </ul>
    </nav>
    
    <div class="controls">
      <span class="icon">🌞</span>
      <span class="icon">🌙</span>
    </div>
  `;

};
