// ==UserScript==
// @name         read arxiv paper with HTML5
// @updateURL       https://raw.githubusercontent.com/nanguoyu/read-arxiv-paper-with-HTML5/main/read-arxiv-paper-with-HTML5.user.js
// @downloadURL     https://raw.githubusercontent.com/nanguoyu/read-arxiv-paper-with-HTML5/main/read-arxiv-paper-with-HTML5.user.js
// @version      0.1
// @description  Read ar5iv papers with HTML5 webviewer in ar5iv.
// @author       Dong Wang
// @match        *://arxiv.org/abs/*
// @grant        none
// @license      GPL-3.0
// @copyright       2024, Dong Wang, AKA nanguoyu, (https://wangdongdong.wang and https://www.nanguoyu.com)
// ==/UserScript==

(function() {
    'use strict';


    var button = document.createElement("button");
    button.textContent = "Open in ar5iv";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.zIndex = "1000";
    button.style.padding = "10px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.cursor = "pointer";


    button.onclick = function() {
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("arxiv.org/abs", "ar5iv.org/abs");
        window.open(newUrl, '_blank').focus();
    };


    document.body.appendChild(button);
})();
