const start_menu = document.querySelector(".start_menu");
const smenu_play = document.querySelector(".smenu_play");
const smenu_settings = document.querySelector(".smenu_settings");
const smenu_help = document.querySelector(".smenu_help");

const settings = document.querySelector(".settings");
const set_close = document.querySelector(".set_close");

const help = document.querySelector(".help");
const help_close= document.querySelector(".help_close");

const d = new Date
let time = d.getTime();

function show_settings(){
    const e = new Date
    if ((time+178)==e.getTime()){
        settings.style.background="linear-gradient(#ff0000, #00ff00)";
    }
    else{
        settings.style.background="#44ee44";
    }
    settings.style.display="block";
}
function hide_settings(){
    settings.style.display="none";
}
function show_help(){
    help.style.display="block";
}
function hide_help(){
    help.style.display="none";
}
smenu_settings.onclick = show_settings;
set_close.onclick = hide_settings;
smenu_help.onclick = show_help;
help_close.onclick = hide_help;

