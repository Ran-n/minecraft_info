(()=>{function d(n,e){n.addEventListener("mouseenter",function(){e.classList.remove("hidden")}),n.addEventListener("mouseleave",function(){e.classList.add("hidden")})}function r(n,e){n.addEventListener("touchend",function(){e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")})}function s(n,e){n.addEventListener("click",async function(){try{await navigator.clipboard.writeText(e.innerText),n.blur(),n.innerText="Copied!",setTimeout(function(){n.innerText="Copy"},2e3)}catch(t){n.innerText="Error"}})}window.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("pre:not(.emgithub-pre) > code").forEach(n=>{var e=document.createElement("span");e.className="copy-code-button hidden",e.type="button",e.innerText="Copy";var t=n.parentNode;if(t.parentNode.classList.contains("highlight")){var i=t.parentNode;i.appendChild(e),d(i,e),r(t,e),s(e,n)}else if(t.parentNode.tagName==="TD"){var o=t.parentNode,c=o.parentNode;if(o===c.firstChild)return;for(var i=t.parentNode;!i.classList.contains("highlight")&&i.tagName!=="BODY";)i=i.parentNode;i.tagName!=="BODY"&&(i.appendChild(e),d(i,e),r(t,e),s(e,n))}else{var a=document.createElement("div");a.style="position: relative;",t.parentNode.insertBefore(a,t),a.appendChild(t),a.appendChild(e),d(a,e),r(t,e),s(e,n)}})});})();
