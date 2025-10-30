import{a as u,S as p,i as l}from"./assets/vendor-BgmC94F3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="53021043-6beb26dd5ed38e7bac2943366",m="https://pixabay.com/api/";async function g(o){const t={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(m,{params:t})).data}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images from API")}}const c=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y({webformatURL:o,largeImageURL:t,tags:s,likes:i,views:e,comments:r,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${s}"
        />
      </a>
      <div class="info-block">
        <div class="info-item">
          <p class="label">Likes</p>
          <p class="value">${i}</p>
        </div>
        <div class="info-item">
          <p class="label">Views</p>
          <p class="value">${e}</p>
        </div>
        <div class="info-item">
          <p class="label">Comments</p>
          <p class="value">${r}</p>
        </div>
        <div class="info-item">
          <p class="label">Downloads</p>
          <p class="value">${a}</p>
        </div>
      </div>
    </li>
  `}function v(o){const t=o.map(y).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function L(){n&&n.classList.remove("is-hidden")}function w(){n&&n.classList.add("is-hidden")}const d=document.querySelector(".form"),S={title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",position:"topRight"};d.addEventListener("submit",E);async function E(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){l.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}b(),L();try{const i=(await g(t)).hits;if(i.length===0){l.error(S);return}v(i)}catch(s){console.error(s),l.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}finally{w(),d.reset()}}
//# sourceMappingURL=index.js.map
