(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{J3:()=>A,Gs:()=>T});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-20",headers:{authorization:"b2f588d9-1718-4c54-bf0c-460d107d7029","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function o(e,t,n,o){var r=document.querySelector("#card-template").content.cloneNode(!0),a=r.querySelector(".card__delete-button"),c=r.querySelector(".card__like-button"),i=r.querySelector(".card__image"),u=r.querySelector(".card__like-counter"),l=e.owner._id,s=r.querySelector(".card");return r.querySelector(".card__title").textContent=e.name,i.src=e.link,i.alt=e.name,s._id=e._id,l!==A&&(a.style.display="none"),u.textContent=e.likes.length,e.likes.some((function(e){return e._id===A}))&&c.classList.add("card__like-button_is-active"),a.addEventListener("click",t),c.addEventListener("click",n),i.addEventListener("click",o),r}function r(e){var o;(o=e.target.closest(".card")._id,fetch("".concat(t.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(){e.target.closest(".card").remove()})).catch((function(e){console.log(e)}))}function a(e){var o,r=e.target.closest(".card").querySelector(".card__like-counter");e.target.classList.contains("card__like-button_is-active")?(o=e.target.closest(".card")._id,fetch("".concat(t.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(t){r.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(e.target.closest(".card")._id).then((function(t){r.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")}))}var c=function(){document.querySelector(".popup_is-opened").classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)},i=function(e){"Escape"===e.key&&c()},u=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)},l=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(T.inputErrorClass),t.setCustomValidity(""),n.classList.remove(T.errorClass),n.textContent=""},s=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(T.inactiveButtonClass),t.disabled=!1):(t.classList.add(T.inactiveButtonClass),t.disabled=!0)},d=function(e){var t=Array.from(e.querySelectorAll(T.inputElement)),n=e.querySelector(T.buttonElement);s(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(T.inputErrorClass),o.textContent=n,o.classList.add(T.errorClass)}(e,t,t.validationMessage)})(e,o),s(t,n)}))}))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputElement));n.forEach((function(t){l(e,t)})),s(n,e.querySelector(t.buttonElement))},_=document.querySelector(".profile"),f=document.querySelector(".places__list"),m=document.querySelector(".popup_type_image"),y=m.querySelector(".popup__image"),v=m.querySelector(".popup__caption"),h=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_user_avatar"),E=document.forms.editAvatar,C=_.querySelector(".profile__image"),k=g.querySelector(".popup__input_type_user_avatar"),L=document.forms.editProfile,x={name:L.querySelector(".popup__input_type_name"),about:L.querySelector(".popup__input_type_description")},P={name:_.querySelector(".profile__title"),about:_.querySelector(".profile__description")},U=document.forms.newPlace,w={name:U.querySelector(".popup__input_type_card-name"),link:U.querySelector(".popup__input_type_url")},A="";function O(e){y.src=e.target.src,y.alt=e.target.alt,v.textContent=e.target.alt,u(m)}document.getElementById("popupsContainer").addEventListener("click",(function(e){var t=e.target.classList;(t.contains("popup_is-opened")||t.contains("popup__close"))&&c()})),h.addEventListener("click",(function(){u(S),x.about.value=P.about.textContent,x.name.value=P.name.textContent,p(L,T)})),b.addEventListener("click",(function(){u(q)})),C.addEventListener("click",(function(){u(g)})),E.addEventListener("submit",(function(e){var o;e.preventDefault(),E.querySelector(".popup__button").textContent="Сохранение...",(o=k.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o})}).then((function(e){return n(e)}))).then((function(){c(),_.querySelector(".profile__image").style="background-image: url(".concat(k.value,");")})).catch((function(e){console.log(e)})).finally((function(){E.querySelector(".popup__button").textContent="Сохранить"}))})),L.addEventListener("submit",(function(e){var o;e.preventDefault(),L.querySelector(".popup__button").textContent="Сохранение...",(o=x,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:o.name.value,about:o.about.value})}).then((function(e){return n(e)}))).then((function(){P.name.textContent=x.name.value,P.about.textContent=x.about.value,c()})).catch((function(e){console.log(e)})).finally((function(){L.querySelector(".popup__button").textContent="Сохранить"}))})),U.addEventListener("submit",(function(e){e.preventDefault(),U.querySelector(".popup__button").textContent="Сохранение...";var i,u={name:"",link:"",owner:{_id:""},likes:[],_id:""};u.name=w.name.value,u.link=w.link.value,u.owner._id=A,(i=u,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:i.name,link:i.link})}).then((function(e){return n(e)}))).then((function(e){u._id=e._id;var t=o(u,r,a,O);f.prepend(t),U.reset(),c(),p(U,T)})).catch((function(e){console.log(e)})).finally((function(){L.querySelector(".popup__button").textContent="Сохранить"}))}));var T={formElement:".popup__form",inputElement:".popup__input",buttonElement:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error_active"};!function(e){Array.from(document.querySelectorAll(e.formElement)).forEach((function(e){d(e)}))}(T),Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t=e[0],n=e[1];!function(e){_.querySelector(".profile__title").textContent=e.name,_.querySelector(".profile__description").textContent=e.about,_.querySelector(".profile__image").style="background-image: url(".concat(e.avatar,");")}(t),A=t._id,n.forEach((function(e){var t=o(e,r,a,O);f.append(t)}))})).catch((function(e){console.log(e)}))})();