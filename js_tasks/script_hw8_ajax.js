// //Получить данные с сервера по урлу https://trevadim.github.io/vue/data/data.json, и отобразить информацию о планетах
// const url = 'https://trevadim.github.io/vue/data/data.json';
// const body = document.querySelector('body');
// let createHeader = (text) => {
//     let header = document.createElement ('header');
//     header.innerHTML = `<h1>${text}</h1>`;
//     header.style.textAlign = 'center';
//     body.appendChild (header);
// }
// let createMain = ({head, paragraph}) => {
//     let main = document.createElement ('main');
//     main.innerHTML = `<p>${head}</p><p>${paragraph}</p>`;
//     main.style.textAlign = 'center';
//     body.appendChild (main);
// }
// let createContacts = ({author, email, skype}) => {
//     let contacts = document.createElement ('div');
//     contacts.innerHTML = `<h3>Контакты</h3><p>${author}</p><p>E-mail: ${email}</p><p>Skype: ${skype}</p><img src='http://www.youthconnect.in/wp-content/uploads/2013/12/2k_Grid_Sun_FINAL-001.jpg' alt='солнце'>`;
//     contacts.style.textAlign = 'center';
//     body.appendChild (contacts);
// }
// let createPlanets = ({title, info, url}) => {
//     let planets = document.createElement ('div');
//     let namePlanets = document.createElement ('div');
//     planets.appendChild (namePlanets);
//     namePlanets.innerHTML = `<h1>${title}</h1><p>${info}</p><img src=${url}>`;
//     planets.style.textAlign = 'center';
//     body.appendChild (planets);
// }
// let createMarkUp = ({main, planets, contacts}) => {
//     createHeader (main.cosmos);
//     createMain ({head:main.infoCosmos, paragraph:main.infoFly});
//     createPlanets ({title:planets.mercury.title, info:planets.mercury.info, url:planets.mercury.url});
//     createPlanets ({title:planets.venus.title, info:planets.venus.info, url:planets.venus.url});
//     createPlanets ({title:planets.earth.title, info:planets.earth.info, url:planets.earth.url});
//     createPlanets ({title:planets.mars.title, info:planets.mars.info, url:planets.mars.url});
//     createPlanets ({title:planets.jupiter.title, info:planets.jupiter.info, url:planets.jupiter.url});
//     createPlanets ({title:planets.saturn.title, info:planets.saturn.info, url:planets.saturn.url});
//     createPlanets ({title:planets.uran.title, info:planets.uran.info, url:planets.uran.url});
//     createPlanets ({title:planets.neptun.title, info:planets.neptun.info, url:planets.neptun.url});
//     createContacts ({author:contacts.author, email:contacts.email, skype:contacts.skype, url:planets.mercury.url});
// }
// fetch (url)
//     .then (response => response.json())
//     .then (data => createMarkUp (data))  
//     .catch (error => console.log (error));
    