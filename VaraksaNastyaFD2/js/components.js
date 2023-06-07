  
const Header = {
    render: (className = "") => {
      return `
        <header class="header ${className}" id="header">
        <div class="divHeader">
        <p class="name_game">Racing game</p>
        </div>
        </header>
      `;
    }
  };
  
  const NavBar = {
    render: (className = "") => {
      return `
      <nav class="navmenu ${className}" id="navmenu">
      <ul class="navmenu__menu navmenu__list menu_game">
        <li><a class="navmenu__link menu-link" id="main" href="#main">HOME</a></li>
      </ul>
    </nav>
   
      `;
    }
  }; 


  const Content = {
    render: (className = "") => {
      return `<main class="main-content ${className}" id="mainContent"></main>`;
    }
  };

 
  


   
