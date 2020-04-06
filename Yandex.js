// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

 let yandexInput = document.getElementsByName('text')[0];
 let button = document.getElementsByClassName('button')[0];
 let link_theme = document.getElementsByClassName('link_theme_none')[4];
 let searchWords = ['Гобой','Кларнет','Саксофон','Флейта','Валторна','Фагот'];
 let searchWord = searchWords[getRandom(0,searchWords.length)];
 let i =0;
 let links = document.links;

 if ( button != undefined){

 let timerId = setInterval(()=>{
     yandexInput.value += searchWord[i];
     i++;
     if (i==searchWord.length) {
         clearInterval(timerId);
         button.click();}
   },500);
  }
 else if (location.hostname == "yandex.ru"){
      let flag = true;
      for (let i=0; i<links.length; i++){
      if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
          flag = false;
          links[i].click();
          break;
        }
   }
      if (flag){
          setTimeout(()=>{
              if(document.querySelector('.pager__item_current_yes').innerText<10)
                link_theme.click();
                     else
                        location.href = "https://yandex.ru/";
                     },3800);

      }
}
else {
        setInterval(()=>{
        if (getRandom(0,100)<30) Location.hostname = "yandex.ru/";
        let index = getRandom(0,links.length);
        links[index].click();
      },5000);
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
