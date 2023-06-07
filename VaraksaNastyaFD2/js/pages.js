
  const Registration = {
    title: "Registration",
    render: () => {
      return `
        <section id="registration" class="registration">
          <h1>Регистрация пользователя</h1>
          <form class="form" method="post">
            <label class="form__label" for="userName">Введите ваше имя</label>
              <input class="input__name form__input" id="userName" type="text" placeholder="ваше имя" autofocus>
            <div class="form__buttons">
            <button type="submit" class="btn button" id="btnSignup">Сохранить</button>
            </div>			
          </form>
        </section>
      `;
    }
  };


const HomePage = {
  title: "HomePage",
  render: () => {
    return `
      <section class="menu" id="menu">
      <p class="name_game">Racing game</p>    
        <ul id="mainmenu">
          <li id="game"><a class="list" href="#game">Игра</a></li>
          <li id="rules"><a class="list" href="#rules">Описание игры</a></li>
          <li id="records"><a class="list" href="#records">Топ лучших результатов</a></li>
        </ul>        
      </section>
    `;
  }
};


const GamePage = {
    id: "game",
    title: "game",
    render: () => {
      return `
	  <section class="game" id="game">
    <div class="divBackНоме"><a href="#main" class="backНоме" id="backНоме">backНоме</a></div>
    <div class="canvasWrapper">
    <div class="divBtnGame">
    <button class="btnGame btnPauseGame" value="btnPauseGame" id="btnPauseGame" title="button btnPauseGame">Pause/Start</button>
    <button class="btnGame btnRestartGame" value="btnRestartGame" id="btnRestartGame" title="button btnRestartGame">Restart</button>
    <div class="btnGame btnSoundOff" id="btnSoundOff"></div>
    <div class="btnGame btnSoundOn" id="btnSoundOn"></div>
    </div>
    <div class="divSpan">
    <span class="score distance" id="distance"></span>
    <span class="score points" id="points"></span>
    <span class="score lives" id="lives"></span>
    </div>
    </div>
    <canvas class="canvas" id="canvas"  width="1300px" height="650px"></canvas>
  </section>
	`;
    }
}; 
  
  
const Rules = {
    id: "rules",
    title: "rules",
    render: () => {
      return `
        <section>
        <div class="divBackНоме"><a href="#main" class="backНоме" id="backНоме">backНоме</a></div>
        <div class="rules">
        <p> Суть игры &mdash; необходимо управлять движением машинки, собирать монетки и избегать наезда на другие машинки и камни.<br>
            Управлять машинкой можно будет при помощи стрелок:  &#8595; &#8593; &#8594; &#8592;.<br>
            На дороге будут появляться другие машинки, которые необходимо объезжать. При столкновении с одной машинкой, игрок теряет одну жизнь. Всего будет предусмотрено 5 жизней. <br>
            Также на дороге будут появляться монетки и камни. Игроку необходимо собирать монетки, то есть соприкасаться с ними, за это он будет получать очки&colon; 1 монетка &ndash; 1 очко. А при наезде на 1 камень &ndash; будет уменьшение на 1 очко.<br>
            Машинка игрока может стрелять &colon;&rpar; при нажатии на клавишу  &Prime;Ctrl&Prime;. Этой пулей можно разбить камень и получить за это 3 очка!<br>
            На экране будет показано расстояние, которое проехала машина игрока. И в зависимости от значения расстояния, скорость движения всех элементов будет увеличиваться. <br>
            Игра закончиться, когда количество жизней будет равно 0. <br>
            Цель игры &mdash; как можно больше набрать очков, то есть наехать на монетки и разбивая камни пулей, объезжая при этом другие машины и не наезжая на камни.<br>
        </p>
        </div>
        </section>
      `;
    }
};
   
const Records = {
    id: "records",
    title: "records",
    render: () => {
      return `
        <section id="records">
        <div class="divBackНоме"><a href="#main" class="backНоме" id="backНоме">backНоме</a></div>
        <h2 class="toplist-page__title">Топ лучших результатов</h2>
        <div id="usersList2"></div>
        </section>
      `;
    }
};
  
const ErrorPage = {
    id: "error",
    title: "Achtung, warning, kujdes, attenzione, pozornost...",
    render: () => {
      return `
        <section>
          <h1>Ошибка 404</h1>
          <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
        </section>
      `;
    }
};
 





