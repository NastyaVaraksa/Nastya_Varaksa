
// Компоненты
const components = {
  navbar: HomePage,
};
 
// Роуты
const routes = {
	main: HomePage,
	game: GamePage,
  rules: Rules,
  records: Records,
  registration: Registration,
  default: HomePage,
  error: ErrorPage,
};



  /* ----- spa init module --- */
const mySPA = (function() {
  
  /* ------- begin view -------- */

  function ModuleView() {
    let contentContainer = null;
    let menu = null;
    let routes = null;
    let flagStop = false;


    this.init = function (_container, _routes) {
      contentContainer = _container;
      routes = _routes;
      menu = contentContainer.querySelector("#mainmenu");
    }

    this.renderContent = function(_hashPageName) {
      let routeName = "default";

      if (_hashPageName.length > 0) {
        routeName = _hashPageName in routes ? _hashPageName : "error";
      }

      window.document.title = routes[routeName].title;
      contentContainer.innerHTML = routes[routeName].render();

      window.document.title = routes[routeName].title;
      contentContainer.innerHTML = routes[routeName].render(`${routeName}-page`);
        if (routeName === "game") this.showCanvas();
        if (routeName === "records") this.showRecords() ;
        if(_hashPageName === 'registration'){
          const input = document.querySelector('.input__name');
          const btn = document.querySelector('.btn');
          btn.addEventListener('click', function (e){
              e.preventDefault();
              localStorage.setItem('PlayerName', input.value)
              location.hash = '#main';
          });
        }
    }
  

    this.showCanvas = function() {

      const canvas = document.querySelector("#canvas");
      const ctx = canvas.getContext("2d");
    
      const myCar = new Image();
      myCar.src = './img/mycar3.png';
      myCar.width = 50;
      myCar.height = 100;

      const obsCar= new Image();
      obsCar.src = './img/car5.png';
      const obsStone = new Image();
      obsStone.src = './img/kamen.png';
      const obs3 = new Image();
      obs3.src = './img/obs3.png';
      const obsCoin = new Image();
      obsCoin.src = './img/coins.png';
      const road = new Image();
      road.src = './img/road!!!!!!.png';
      
     
      let flagSound = false;
      let loadedImages = 0;
      let distance = 0.0;
      let lives = 5;
      let points = 0;
      let countStones = 4;
      let countCoins = 7;
      let countCars = 4;
      let obsSpeed = 3;
      let roadSpeed = 3;
      let roadY1 = 0;
      let roadY2 = -canvas.height;
      let myCarWidth = 50;
      let myCarHeihgt = 100;
      let myCarX = canvas.width/2;
      let myCarY = canvas.height/2;
      let obstaclesCars = [];
      let obstaclesStones = [];
      let obstaclesCoins = [];
      let bulletsArray = [];
      let countBullets = 0;
      let myCarTop = false;
      let myCarBottom = false;
      let myCarLeft = false;
      let myCarRight = false;
      let pressedCtrl = false;
      let requestId = undefined;
      let pause = false;
      

      class ObstaclesCars{
            constructor(order) {
              this.order = order;
              this.x = (Math.random()*(canvas.width-this.width));
              this.y = -200*this.order;
              this.width = 50;
              this.height = 100;
            }
            draw() {
              this.y += obsSpeed;
              if(this.y >= canvas.height){
                while(true) {
                  this.x = (Math.random()*(canvas.width-this.width));
                  this.y = -200*this.order;
                  let overlapping = false;
                  for(let i=0;i<countCars ;i++){
                    if(i!=this.order){
                      if((Math.abs(obstaclesCars[i].x-this.x) < 50) && 
                        (Math.abs(obstaclesCars[i].y-this.y) < 100)){
                        overlapping = true;
                        break;
                      }
                    }
                  }
                  if(overlapping == false){
                    break;
                  }
                }
              }
              ctx.drawImage(obsCar,this.x,this.y, this.width, this.height);  
            }   
      }

      class ObstaclesStones{
        constructor(order) {
          this.order = order;
          this.x = (Math.random()*(canvas.width-this.width));
          this.y = -200*this.order;
          this.width = 55;
          this.height = 30;
        }
        draw() {
          this.y += obsSpeed;
          if(this.y >= canvas.height){
            while(true) {
              this.x = (Math.random()*(canvas.width-this.width));
              this.y = -200*this.order;
              let overlapping = false;
              for(let i=0;i<countStones ;i++){
                if(i!=this.order){
                  if((Math.abs(obstaclesStones[i].x - this.x)<55) && 
                    (Math.abs(obstaclesStones[i].y - this.y)<50)){
                    overlapping = true;
                    break;
                  }
                }
              }
              if(overlapping == false){
                break;
              }
            }
          }
          ctx.drawImage(obsStone,this.x,this.y,this.width,this.height);
        }   
  }

      class Sprite {
          constructor(order) {
            this.order = order;
            this.image = obsCoin;
            this.frameIndex = 0;
            this.tickCount = 0;
            this.ticksPerFrame = 4 || 0;
            this.numberOfFrames = 10 || 1;
            this.width = 500;
            this.height = 50;
            this.x = (Math.random()*(canvas.width-this.width));
            this.y = -200*this.order;
          }

          update() {
            this.tickCount++;
            this.y += obsSpeed;
              if (this.tickCount > this.ticksPerFrame) {
                  this.tickCount = 0;
                  if (this.frameIndex < this.numberOfFrames - 1) {
                      this.frameIndex++;
                  } else {
                      this.frameIndex = 0;
                  }
              }
            if(this.y >= canvas.height){
              while(true) {
                this.x = (Math.random()*(canvas.width-this.width));
                this.y = -200*this.order;
                let overlapping = false;
                for(let i=0; i<countCoins;i++){
                  if(i!=this.order){
                    if((Math.abs(obstaclesCoins[i].x-this.x)<50) && 
                      (Math.abs(obstaclesCoins[i].y-this.y)<50)){
                      overlapping = true;
                      break;
                    }
                  }
                }
            if(overlapping == false){
              break;
                }
              }
            }
          }
          render() {
              ctx.drawImage(
                  this.image,
                  this.frameIndex * this.width / this.numberOfFrames,
                  0,
                  this.width / this.numberOfFrames,
                  this.height,
                  this.x,
                  this.y,
                  this.width / this.numberOfFrames,
                  this.height
              )
          }
      }

      class Bullets{
        constructor(order) {
          this.order = order;
          this.x = myCarX + 23;
          this.y = myCarY;
          this.radius = 7;
          this.width = 20;
          this.height = 20;

        }
        draw() {
            this.y -= obsSpeed;
            ctx.beginPath();
            ctx.arc(this.x, this.y,  this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.lineWidth = 1;
	          ctx.strokeStyle = 'red';
            ctx.stroke(); 
        }   
      }

      road.onload = function() {
        loadedImages++;
      }
      myCar.onload = function() {
        loadedImages++;
      }
      obsCoin.onload = function() {
        loadedImages++;
        for(let i=0; i<countCoins; i++){
          obstaclesCoins[i] = new Sprite(i);
        }
      }
      obsCar.onload = function() {
        loadedImages++;
        for(let i=0; i<countCars; i++){
          obstaclesCars[i] = new ObstaclesCars(i);
        } 
      }
      obsStone.onload = function() {
        loadedImages++;
        for(let i=0; i<countStones; i++){
          obstaclesStones[i] = new ObstaclesStones(i);
        }
      }

     
      function update(){

        if(loadedImages == 5){
          
          roadY1 += roadSpeed;
          roadY2 += roadSpeed;
          
          if(myCarLeft == true && (myCarX > 0)){
            myCarX -= 4;
          }
          if(myCarRight == true && (myCarX + myCarWidth < canvas.width)){
            myCarX += 4;
          }
          if(myCarTop == true && (myCarY > 0) ){
            myCarY -= 4;
          }
          if(myCarBottom == true && (myCarY + myCarHeihgt < canvas.height)){
            myCarY += 4;
          }
          
          ctx.clearRect(0,0,canvas.width,canvas.height);
          distance += 0.1;

          if(distance > 100){
            roadSpeed = 5;
            obsSpeed = 5;
          }
          if(distance > 200){
            roadSpeed = 6;
            obsSpeed = 6;
          }
          if(distance > 300){
            roadSpeed = 7;
            obsSpeed = 7;
          }

          if(roadY2 >= 0 ) {
            roadY1 = 0;
            roadY2 = -canvas.height;
          }
        
          ctx.drawImage(road,0,roadY1,canvas.width,canvas.height);
          ctx.drawImage(road,0,roadY2,canvas.width,canvas.height);
          ctx.drawImage(myCar,myCarX,myCarY,myCar.width,myCar.height);
        

          if(pressedCtrl === true){
            countBullets ++;
            for(let i=0; i<countBullets; i++){
              bulletsArray[i] = new Bullets(i);
            } 
          }
          for(let i=0; i<countBullets; i++){
            bulletsArray[i].draw();
          } 
          for(let i=0; i<countBullets; i++){
            if(bulletsArray[i].y < 0){
              bulletsArray[i].x = -100;
            }
          }
        
          for(let i=0; i<countCoins; i++){
            obstaclesCoins[i].render();
            obstaclesCoins[i].update();
          }

          for(let i=0; i<countStones; i++){
            obstaclesStones[i].draw();
          }
        
          for(let i=0; i<countCars; i++){
            obstaclesCars[i].draw();
          }
    
          for(let i=0; i<countCars; i++){
            if(collision(obstaclesCars[i], myCar)){
                obstaclesCars[i].y = -300;
              lives -= 1;
              if(flagSound === true){
                audioAccidentPlay();
              }
              break;        
            }
          }

          for(let i=0; i<countBullets && i<countStones; i++){
            if((bulletsArray[i].x + bulletsArray[i].width > obstaclesStones[i].x) && (bulletsArray[i].x < obstaclesStones[i].x + obstaclesStones[i].width) && (bulletsArray[i].y + bulletsArray[i].height > obstaclesStones[i].y) && (bulletsArray[i].y < obstaclesStones[i].y + obstaclesStones[i].height)){
              obstaclesStones[i].x = -200;
              bulletsArray[i].x = -200;
              points += 3;
              break;
                      
            }
          }

          for(let i=0;i<countCoins ;i++){
            if((obstaclesCoins[i].x + 50 > myCarX) && (obstaclesCoins[i].x < myCarX + myCar.width) && (obstaclesCoins[i].y + obstaclesCoins[i].height > myCarY) && (obstaclesCoins[i].y < myCarY + myCar.height)){
                obstaclesCoins[i].y = -200;
              points += 1;
              if(flagSound === true){
                audioCoinPlay();
              }
              break;
                      
            }
          }
          for(let i=0;i<countStones ;i++){
            if(collision(obstaclesStones[i], myCar)){
                obstaclesStones[i].y = -200;
              points -= 1;
              break;
                      
            }
          }
          if(lives === 0){
            gameOver();
          }
          
	      } 
    }

      function collision(objA, myCar){
        if ((objA.x + objA.width > myCarX) && (objA.x < myCarX + myCar.width) && (objA.y + objA.height > myCarY) && (objA.y < myCarY + myCar.height)){
             return true;
            }
        else {return false;}
    }


      const spanDistance = document.querySelector("#distance");
      spanDistance.innerHTML = distance;
      const spanPoints = document.querySelector("#points");
      spanPoints.innerHTML = points;
      const spanLives = document.querySelector("#lives");
      spanLives.innerHTML = lives;

      const btnPausaGame = document.querySelector("#btnPauseGame");
      btnPausaGame.addEventListener("click", animatePause);
      const btnRestartGame = document.querySelector("#btnRestartGame");
      btnRestartGame.addEventListener("click", animateRestart);   
      let btnSoundOff = document.querySelector("#btnSoundOff");
      btnSoundOff.addEventListener("click", soundOnOff);
      let btnSoundOn = document.querySelector("#btnSoundOn");
      btnSoundOn.addEventListener("click", soundOnOff);

      function showPoints(){
        spanDistance.innerHTML = "Distance: " + parseInt(distance);
        spanLives.innerHTML = "Points: " + parseInt(points);
        spanPoints.innerHTML = "lives: " + parseInt(lives);
      }

      function soundOnOff(){
        if(flagSound === false){
          flagSound = true;
          btnSoundOn.style.display = 'block';
          btnSoundOff.style.display = 'none';
        } else{
          flagSound = false;
          btnSoundOn.style.display = 'none';
          btnSoundOff.style.display = 'block';
        }
      }
     
      function audioAccidentPlay() {
        let audioAccident = new Audio();
        audioAccident.src = "./audio/avariya.mp3";
        audioAccident.volume = 0.5;
        audioAccident.play();
      };
      
      function audioCoinPlay() {
        let audioCoin = new Audio();
        audioCoin.src = `./audio/coins.mp3`;
        audioCoin.play();
        };

      function audioFonPlay() {
        let audioFon=new Audio();
        audioFon.src = `./audio/fonSound.mp3`;
        audioFon.play();
      }
      if(flagSound === true){
        audioFonPlay()
      }
      
      
      function gameOver(){
        pause = true;
        flagSound = false;
        ctx.font = "50px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Game over", canvas.width/2 - 100, canvas.height/2 - 100);
        ctx.fillText("Distance: " + parseInt(distance), canvas.width/2 - 100, canvas.height/2 - 50);
        ctx.fillText("Points: " + parseInt(points), canvas.width/2 - 100, canvas.height/2);
        if(points >= 1){
          sendServer()
        }
      }

      
      // отправка данных на сервер
      function sendServer(){
        let name = localStorage.getItem(`PlayerName`);
        let user = {
          "name": name,
          "score": points
        };
        const url = " http://localhost:9090";
        async function addNewUser(userNew){
          try {
            const response = await fetch(`${url}/users`, {
              method: 'POST',
              body: JSON.stringify(userNew),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            console.log(data);
            // getUsers();
          } catch(err) {
            console.log("Error:", err);
          }
        }
        addNewUser(user);
      }


      function loop() {
        requestId = undefined;
        update();
        showPoints();
        if(pause) return;
        // if(restart) return;
        start();
        if(flagSound === true){
          audioFon.play();
        }
      }
      
      function start() {
        if (!requestId) {
          requestId = window.requestAnimationFrame(loop); 
        }
      }
      start()

      function stop() {
        if (requestId) {
          window.cancelAnimationFrame(requestId);
          requestId = undefined;
        }
      }

      function animatePause() {
        if(pause === false){
          pause = true;
          btnPausaGame.style.backgroundColor = "yellow";
        } else{
          pause = false;
          btnPausaGame.style.backgroundColor = "green";
          start();
        }
      }

      function animateRestart() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pause = false;
        distance = 0;
        lives = 5;
        points = 0;
        myCarX = canvas.width/2;
        myCarY = canvas.height/2;
        obsSpeed = 3;
        roadSpeed = 3;
        obstaclesCars = [];
        obstaclesStones = [];
        obstaclesCoins = [];
        for(let i=0; i<countCoins; i++){
          obstaclesCoins[i] = new Sprite(i);
        }
        for(let i=0; i<countCars; i++){
          obstaclesCars[i] = new ObstaclesCars(i);
        } 
        for(let i=0; i<countStones; i++){
          obstaclesStones[i] = new ObstaclesStones(i);
        }
        for(let i=0; i<countCoins; i++){
          obstaclesCoins[i].render();
          obstaclesCoins[i].update();
        }
        for(let i=0; i<countStones; i++){
          obstaclesStones[i].draw();
        }
        for(let i=0; i<countCars; i++){
          obstaclesCars[i].draw();
        }  
        stop();
        start();
      }


      document.addEventListener("keydown", keyDown, false);
      document.addEventListener("keyup", keyUp, false);

      function keyDown(event){
        switch (event.keyCode) {
            case 17:
              pressedCtrl = true;
            break;
            case 37:
              myCarLeft = true;
            break;
            case 39: 
              myCarRight = true;
            break;
            case 38: 
              myCarTop = true;
            break; 
            case 40: 
              myCarBottom = true;
            break;  
        }
      }  

      function keyUp(event){
        switch (event.keyCode) {
            case 17:
              pressedCtrl = false;
            break;
            case 37:
              myCarLeft = false;
            break;
            case 39: 
              myCarRight = false;
            break;
            case 38: 
              myCarTop = false;
            break; 
            case 40: 
              myCarBottom = false;
            break;  
        }
      } 

  
   
// остановка игры при нажатии кнопки BACKHome
      game.onclick = function(event) {
        function handleLink(href) {
          let isLeaving = confirm(`Вы хотите уйти со страницы игры? Данные могут быть не сохранены.`);
          if (!isLeaving) {
            return false
          } else{
            stop() 
            location.hash = '#main';
          };
        }
        let target = event.target.closest('a');
        if (target && game.contains(target)) {
          return handleLink(target.getAttribute('href'));
        }
      };

// остановка игры при нажатии браузерной стрелки `назад`
      let popHandler = () => {
        if (confirm('Вы хотите уйти со страницы игры? Данные могут быть не сохранены.')) {
          stop()
          location.hash = '#main'
        } else {
          window.history.forward()
          setTimeout(() => {
            window.addEventListener('popstate', popHandler, {once: true})
          }, 50) 
          return false;
        }
      }
      window.addEventListener('popstate', popHandler, {once: true})
      window.history.pushState(null,null,null)

 }  
  

this.showRecords = function (){

  const url = " http://localhost:9090";
  let usersContainer = document.createElement('div');

  contentContainer.appendChild(usersContainer);

  async function getUsers(){
    console.log("start");
    try{
       const response = await fetch(`${url}/users?_sort=score&_order=DESC`); 
       const data = await response.json();
       listUsers(data);
    }catch(error){
        console.log("Error:", error);
    } finally {
      console.log("Finished");
    }
  }

function listUsers(users){
  console.log(users);
  if(users.length) {
    let userList = usersContainer.querySelector("ol");
    if(userList){
      userList.innerHTML = "";
    } else {
      userList = document.createElement("ol");
    }
    for (let i=0; i < users.length && i < 10; i++){
      let li = document.createElement("li");
      li.dataset.userId = users[i].id;
      li.innerHTML = `${users[i].name} набрал(а) ${users[i].score} очков`;
      userList.appendChild(li);
    }
    usersContainer.appendChild(userList);
    usersContainer.style.display = "block";
  } else {
    usersContainer.style.display = "none";
  }
  }
    getUsers();

}


};

    /* -------- end view --------- */



    /* ------- begin model ------- */
    function ModuleModel () {
      let myModuleView = null;
  
      this.init = function(view) {
        myModuleView = view;
      }
  
      this.updateState = function(_pageName) {
        if(localStorage.getItem('PlayerName') === null){
          location.hash = '#registration';
          _pageName = 'registration';
        }else if(localStorage.getItem('PlayerName') !== null && sessionStorage.getItem("is_reloaded")){
          location.hash = '#main';
          _pageName = 'main';
        }
  
        myModuleView.renderContent(_pageName);
      }

    }
   
    /* -------- end model -------- */



    /* ----- begin controller ---- */

    function ModuleController () {
      let myModuleModel = null;
      let myModuleContainer = null;

    this.init = function (content, model) {
      myModuleModel = model;
      myModuleContainer = content;

      window.addEventListener("hashchange", this.updateState);

      window.addEventListener('click', function (){
        sessionStorage.removeItem("is_reloaded");
      });

      myModuleContainer.querySelector("#mainmenu").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.hash = event.target.getAttribute("href");
      });

      window.onbeforeunload = function() {
        return false;
      };

      this.updateState();
    }
  
          this.updateState = function() {
          const hashPageName = location.hash.slice(1).toLowerCase();
          myModuleModel.updateState(hashPageName);
        }
    };
    /* ------ end controller ----- */
  
    return {
      init: function (root, routes, components) {
        sessionStorage.setItem("is_reloaded", true);
        
        this.renderComponents(root, components);
  
        const view = new ModuleView();
        const model = new ModuleModel();
        const controller = new ModuleController();
  
        view.init(document.getElementById(root), routes);
        model.init(view);
        controller.init(document.getElementById(root), model);
      },
  
      renderComponents: function (root, components) {
        const container = document.getElementById(root);
        for (let item in components) {
          if (components.hasOwnProperty(item)) {
            container.innerHTML += components[item].render();
          }
        }
      },
    };

  }());



  /* ------ end app module ----- */
  

  /*** --- init module --- ***/
  
  mySPA.init("content", routes, components);