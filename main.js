(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{G:()=>w});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-20",headers:{authorization:"b2f588d9-1718-4c54-bf0c-460d107d7029","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function o(e){var o;o=e.target.closest(".card")._id,fetch("".concat(t.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)})),e.target.closest(".card").remove()}function r(e){e.target.classList.toggle("card__like-button_is-active");var o,r=e.target.closest(".card").querySelector(".card__like-counter");e.target.classList.contains("card__like-button_is-active")?(o=e.target.closest(".card")._id,fetch("".concat(t.baseUrl,"/cards/likes/").concat(o),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))).then((function(e){r.textContent=e.likes.length})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))}(e.target.closest(".card")._id).then((function(e){r.textContent=e.likes.length}))}var c=function(){document.querySelector(".popup_is-opened").classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)},a=function(e){"Escape"===e.key&&c()},u=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)},i=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(w.inputErrorClass),t.setCustomValidity(""),n.classList.remove(w.errorClass),n.textContent=""},l=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(w.inactiveButtonClass),t.disabled=!1):(t.classList.add(w.inactiveButtonClass),t.disabled=!0)},s=function(e){var t=Array.from(e.querySelectorAll(w.inputElement)),n=e.querySelector(w.buttonElement);l(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(w.inputErrorClass),o.textContent=n,o.classList.add(w.errorClass)}(e,t,t.validationMessage)})(e,o),l(t,n)}))}))},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputElement));n.forEach((function(t){i(e,t)})),l(n,e.querySelector(t.buttonElement))},p=document.querySelector(".profile"),_=document.querySelector(".places__list"),f=document.querySelector(".popup_type_image"),m=f.querySelector(".popup__image"),y=f.querySelector(".popup__caption"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),q=document.querySelector(".popup_type_user_avatar"),g=document.forms.editAvatar,C=p.querySelector(".profile__image"),E=q.querySelector(".popup__input_type_user_avatar"),k=document.forms.editProfile,L={name:k.querySelector(".popup__input_type_name"),about:k.querySelector(".popup__input_type_description")},x={name:p.querySelector(".profile__title"),about:p.querySelector(".profile__description")},U=document.forms.newPlace,A={name:U.querySelector(".popup__input_type_card-name"),link:U.querySelector(".popup__input_type_url")};function P(e){m.src=e.target.src,m.alt=e.target.alt,y.textContent=e.target.alt,u(f)}document.getElementById("popupsContainer").addEventListener("click",(function(e){var t=e.target.classList;(t.contains("popup_is-opened")||t.contains("popup__close"))&&c()})),v.addEventListener("click",(function(){u(b),L.about.value=x.about.textContent,L.name.value=x.name.textContent,d(k,w)})),h.addEventListener("click",(function(){u(S)})),C.addEventListener("click",(function(){u(q)})),g.addEventListener("submit",(function(e){var o;e.preventDefault(),g.querySelector(".popup__button").textContent="Сохранение...",(o=E.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o})}).then((function(e){return n(e)}))).catch((function(e){console.log(e)})),g.querySelector(".popup__button").textContent="Сохранить",c(),d(k,w)})),k.addEventListener("submit",(function(e){var o;e.preventDefault(),k.querySelector(".popup__button").textContent="Сохранение...",x.name.textContent=L.name.value,x.about.textContent=L.about.value,(o=L,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:o.name.value,about:o.about.value})}).then((function(e){return n(e)}))).catch((function(e){console.log(e)})),k.querySelector(".popup__button").textContent="Сохранить",c()})),U.addEventListener("submit",(function(e){e.preventDefault(),U.querySelector(".popup__button").textContent="Сохранение...";var o,r={name:"",link:""};r.name=A.name.value,r.link=A.link.value,(o=r,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:o.name,link:o.link})}).then((function(e){return n(e)}))).catch((function(e){console.log(e)})),U.reset(),U.querySelector(".popup__button").textContent="Сохранить",c(),d(U,w)}));var w={formElement:".popup__form",inputElement:".popup__input",buttonElement:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error_active"};!function(e){Array.from(document.querySelectorAll(e.formElement)).forEach((function(e){s(e)}))}(w),fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})).then((function(e){var t;t=e,p.querySelector(".profile__title").textContent=t.name,p.querySelector(".profile__description").textContent=t.about,p.querySelector(".profile__image").style="background-image: url(".concat(t.avatar,");")})).catch((function(e){console.log(e)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)})).then((function(e){e.forEach((function(e){var t=function(e,t,n,o){var r=document.querySelector("#card-template").content.cloneNode(!0),c=r.querySelector(".card__delete-button"),a=r.querySelector(".card__like-button"),u=r.querySelector(".card__image"),i=r.querySelector(".card__like-counter"),l=e.owner._id,s="df0af4163426169488ebfcd5",d=r.querySelector(".card");return r.querySelector(".card__title").textContent=e.name,u.src=e.link,u.alt=e.name,d._id=e._id,l!==s&&(c.style.display="none"),i.textContent=e.likes.length,e.likes.some((function(e){return e._id===s}))&&a.classList.add("card__like-button_is-active"),c.addEventListener("click",t),a.addEventListener("click",n),u.addEventListener("click",o),r}(e,o,r,P);_.append(t)}))})).catch((function(e){console.log(e)})),console.log(document.querySelector(".popup__button").textContent)})();