/**DOM stuff**/
const root = document.querySelector(":root");

const start_menu = document.querySelector(".start_menu");
const smenu_play = document.querySelector(".smenu_play");
const smenu_settings = document.querySelector(".smenu_settings");
const smenu_help = document.querySelector(".smenu_help");

const settings = document.querySelector(".settings");
const set_close = document.querySelector(".set_close");

const help = document.querySelector(".help");
const help_close= document.querySelector(".help_close");

const game_div = document.querySelector(".game");

const loader = document.querySelector(".loader");
const loader_cover = document.querySelector(".loader_cover");
const lc_text = document.querySelector(".lc_text");
const lc_image = document.querySelector(".lc_image");

const faction_choose = document.querySelector(".faction_choose");
const choose_yox_empire = document.querySelector(".choose_yox_empire");
const choose_pastans = document.querySelector(".choose_pastans");
const choose_scrapbots = document.querySelector(".choose_scrapbots");
const choose_humans = document.querySelector(".choose_humans");

const tile_container = document.querySelector(".tiles");

const hotbar = document.querySelector(".hotbar");
const next_turn = document.querySelector(".next_turn");

const hq_menu = document.querySelector(".hq_menu");
const hq_close = document.querySelector(".hq_close");

const loading_images = [
    "backgrounds/black.jpg",
    "backgrounds/menu.png",
    "humans/archer.png",
    "humans/gun_car.png",
    "humans/horseman.png",
    "humans/juggernaut.png",
    "humans/labourer.png",
    "humans/musketman.png",
    "humans/spearman.png",
    "humans/swordsman.png",
    "humans/tank.png",
    "pastans/farfalle.png",
    "pastans/fusilli.png",
    "pastans/lasagna.png",
    "pastans/macaroni.png",
    "pastans/orechiette.png",
    "pastans/penne.png",
    "pastans/rigatoni.png",
    "pastans/spaghetti.png",
    "pastans/tagliatelle.png",
    "scrapbots/annihilator.png",
    "scrapbots/builder.png",
    "scrapbots/destroyer.png",
    "scrapbots/fighter.png",
    "scrapbots/fodder.png",
    "scrapbots/pursuer.png",
    "scrapbots/shooter.png",
    "scrapbots/skirmisher.png",
    "scrapbots/sprinter.png",
    "tiles/yox_empire_hq.png",
    "tiles/scrapbots_hq.png",
    "tiles/pastans_hq.png",
    "tiles/oil.png",
    "tiles/oil_developed.png",
    "tiles/mine.png",
    "tiles/mine_developed.png",
    "tiles/land.png",
    "tiles/humans_hq.png",
    "tiles/hazardite.png",
    "tiles/hazardite_developed.png",
    "tiles/gems.png",
    "tiles/gems_developed.png",
    "tiles/food.png",
    "tiles/food_developed.png",
    "tiles/aluminium.png",
    "tiles/aluminium_developed.png",
    "yox_empire/strider.png",
    "yox_empire/slingslime.png",
    "yox_empire/reaper.png",
    "yox_empire/lich.png",
    "yox_empire/leviathan.png",
    "yox_empire/kobold.png",
    "yox_empire/hoplite.png",
    "yox_empire/gnome.png",
    "yox_empire/cerberus.png"
];

//this is for goofy easter egg
const d = new Date
let time = d.getTime();

/**FUNCTIONS**/
function show_settings(){
    //code for goofy easter egg
    const e = new Date
    if ((time+178)==e.getTime()){
        settings.style.background="linear-gradient(#ff0000, #00ff00)";
    }
    else{
        settings.style.background="#44ee44";
    }
    //actual code for showing settings
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
//actual game functions lol
function open_ya_base(){
    hq_menu.style.display="block";
}
function close_ya_base(){
    hq_menu.style.display="none";
}

//all the game starting functions lmao 
function game_start(){
    start_menu.style.display="none";
    settings.style.display="none";
    help.style.display="none";
    game_div.style.display="block";
    load_assets();
}
function load_assets(){
    loader_cover.style.display="block";
    loader.style.display="block";
    linknum = 0;
    function next_image(){
        loader.src = "images/"+loading_images[linknum];
        linknum++;
        if(linknum < loading_images.length){
            setTimeout(next_image, 100);    
        }
        else{
            setTimeout(game_init , 100);
        }
    }
    next_image();
}
function game_init(){
    loader_cover.style.display="none";
    loader.style.display="none";
    root.style.setProperty("--back-image", "url(images/backgrounds/black.jpg)");
    choose_faction();
}
function choose_faction(){
    let player_faction;
    faction_choose.style.display="block";

    choose_yox_empire.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "yox_empire";
        generate_map(player_faction);
    }
    choose_humans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "humans";
        generate_map(player_faction);
    }
    choose_pastans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "pastans";
        generate_map(player_faction);
    }
    choose_scrapbots.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "scrapbots";
        generate_map(player_faction);
    }
}
function generate_map(player_faction){
    hotbar.style.display = "block";
    for (let x = 1; x<26; x++){
        for (let y = 1; y<26; y++){
            const tile = document.createElement("img");
            tile.classList.add("tile");
            tile.style.position = "absolute";
            tile.style.left = (x-1)*128+"px";
            tile.style.top = (y-1)*128+"px";
            tile.style.width = "128px";
            tile.style.height = "128px";
            if (x===1 && y===1){
                tile.classList.add("top_left_anchor");
            }
            if (x===25 && y===25){
                tile.classList.add("bottom_right_anchor");
            }
            if (player_faction === "humans"){
                enemy1 = "scrapbots";
                enemy2 = "pastans";
                enemy3 = "yox_empire";
            }
            else if (player_faction === "scrapbots"){
                enemy1 = "humans";
                enemy2 = "pastans";
                enemy3 = "yox_empire";
            }
            else if (player_faction === "pastans"){
                enemy1 = "humans";
                enemy2 = "scrapbots";
                enemy3 = "yox_empire";
            }
            else{
                enemy1 = "humans";
                enemy2 = "scrapbots";
                enemy3 = "pastans"; 
            }
            console.log("e")
            if (x===2 && y===2){
                if (player_faction === "humans"){
                    tile.src = "images/tiles/humans_hq.png";
                }
                else if (player_faction === "scrapbots"){
                    tile.src = "images/tiles/scrapbots_hq.png";
                }
                else if (player_faction === "pastans"){
                    tile.src = "images/tiles/pastans_hq.png";
                }
                else  if (player_faction === "yox_empire"){
                    tile.src = "images/tiles/yox_empire_hq.png";
                }
                tile.onclick=open_ya_base;
            }
            else if (x===2 && y===24){
                tile.src = "images/tiles/" + enemy1 + "_hq.png";
            }
            else if (x===24 && y===2){
                tile.src = "images/tiles/" + enemy2 + "_hq.png";
            }
            else if (x===24 && y===24){
                tile.src = "images/tiles/" + enemy3 + "_hq.png";
            }
            else if ((x===2 && y===4) || (x===7 && y===3) || (x===22 && y===2) || (x===23 && y===7) || (x===24 && y===22) || (x===19 && y===23) || (x===4 && y===24) || (x===3 && y===19) || (x===11 && y===11) || (x===15 && y===15)){
                tile.src = "images/tiles/mine.png";
            }
            else if ((x===4 && y===2) || (x===3 && y===7) || (x==24 && y===4) || (x===19 && y===3) || (x===22 && y===24) || (x===23 && y===19) || (x===2 && y===22) || (x===7 && y===23) || (x===11 && y===15) || (x===15 && y===11)){
                tile.src = "images/tiles/food.png";
            }
            else if ((x===13 && y===3) || (x===18 && y===18)){
                tile.src="images/tiles/oil.png";
            }
            else if ((x===3 && y===13) || (x===18 && y===8)){
                tile.src="images/tiles/hazardite.png";
            }
            else if ((x===23 && y===13) || (x===8 && y===8)){
                tile.src="images/tiles/gems.png";
            }
            else if ((x===13 && y===23) || (x===8 && y===18)){
                tile.src="images/tiles/aluminium.png";
            }
            else{
                tile.src = "images/tiles/land.png";
            }
            tile_container.appendChild(tile);
        }
    }
    do_the_game();
}
function do_the_game(){
    const top_left_anchor = document.querySelector(".top_left_anchor");
    const bottom_right_anchor = document.querySelector(".bottom_right_anchor");
    const tiles = document.querySelectorAll(".tile");
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft" && top_left_anchor.style.left !== "0px") {
            tiles.forEach(tile => {
                tile.style.left = (parseInt(tile.style.left) + 128) + "px";
            });
        } 
        else if (e.key === "ArrowRight" &&parseInt(bottom_right_anchor.style.left) >= window.innerWidth - 128) {
            tiles.forEach(tile => {
                tile.style.left = (parseInt(tile.style.left) - 128) + "px";
            });
        } 
        else if (e.key === "ArrowUp" && top_left_anchor.style.top !== "0px") {
            tiles.forEach(tile => {
                tile.style.top = (parseInt(tile.style.top) + 128) + "px";
            });
        } 
        else if (e.key === "ArrowDown" && parseInt(bottom_right_anchor.style.top) >= window.innerHeight - 128) {
            tiles.forEach(tile => {
                tile.style.top = (parseInt(tile.style.top) - 128) + "px";
            });
        }
    });
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        // Left arrow pressed
    } else if (e.key === "ArrowRight") {
        // Right arrow pressed
    } else if (e.key === "ArrowUp") {
        // Up arrow pressed
    } else if (e.key === "ArrowDown") {
        // Down arrow pressed
    }
});
/**ONCLICK ASSIGNMENTS**/
smenu_settings.onclick = show_settings;
set_close.onclick = hide_settings;
smenu_help.onclick = show_help;
help_close.onclick = hide_help;
smenu_play.onclick= game_start;
hq_close.onclick = close_ya_base;