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

const food_amount_label = document.querySelector(".food_c_label");
const ore_amount_label = document.querySelector(".ore_c_label");
const oil_amount_label = document.querySelector(".oil_c_label");
const gems_amount_label = document.querySelector(".gems_c_label");
const hazardite_amount_label = document.querySelector(".hazardite_c_label");
const aluminium_amount_label = document.querySelector(".aluminium_c_label");

const build1_button = document.querySelector(".buy_building1");
const build2_button = document.querySelector(".buy_building2");
const build3_button = document.querySelector(".buy_building3");
const build4_button = document.querySelector(".buy_building4");
const build5_button = document.querySelector(".buy_building5");
const build6_button = document.querySelector(".buy_building6");
const build7_button = document.querySelector(".buy_building7");
const build8_button = document.querySelector(".buy_building8");
const build9_button = document.querySelector(".buy_building9");
const build10_button = document.querySelector(".buy_building10");
const build11_button = document.querySelector(".buy_building11");
const build12_button = document.querySelector(".buy_building12");
const build13_button = document.querySelector(".buy_building13");
const build14_button = document.querySelector(".buy_building14");
const build15_button = document.querySelector(".buy_building15");
const build16_button = document.querySelector(".buy_building16");
const build17_button = document.querySelector(".buy_building17");
const build18_button = document.querySelector(".buy_building18");

const unit1_button = document.querySelector(".buy_unit1");
const unit2_button = document.querySelector(".buy_unit2");
const unit3_button = document.querySelector(".buy_unit3");
const unit4_button = document.querySelector(".buy_unit4");
const unit5_button = document.querySelector(".buy_unit5");
const unit6_button = document.querySelector(".buy_unit6");
const unit7_button = document.querySelector(".buy_unit7");
const unit8_button = document.querySelector(".buy_unit8");
const unit9_button = document.querySelector(".buy_unit9");

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

let player_food = 0;
let player_ore = 0;
let player_oil = 0;
let player_hazardite = 0;
let player_aluminium = 0;
let player_gems = 0;
let player_faction;

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
function update_resource_counters(){
    food_amount_label.innerText= player_food;
    ore_amount_label.innerText= player_ore;
    gems_amount_label.innerText= player_gems;
    oil_amount_label.innerText= player_oil;
    hazardite_amount_label.innerText= player_hazardite;
    aluminium_amount_label.innerText= player_aluminium;
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
    faction_choose.style.display="block";
    choose_yox_empire.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "yox_empire";
        root.style.setProperty("--player-color-pale", "#8855ee");
        root.style.setProperty("--player-color-light", "#9966ff");
        generate_map();
    }
    choose_humans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "humans";
        root.style.setProperty("--player-color-pale", "#66ccee");
        root.style.setProperty("--player-color-light", "#77ddff");
        generate_map();
    }
    choose_pastans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "pastans";
        root.style.setProperty("--player-color-pale", "#55eeaa");
        root.style.setProperty("--player-color-light", "#66ffbb");
        generate_map();
    }
    choose_scrapbots.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "scrapbots";
        root.style.setProperty("--player-color-pale", "#ee9955");     
        root.style.setProperty("--player-color-light", "#ffaa66");
        generate_map();
    }
}

function generate_map(){

    //HQ
    if(player_faction==="humans"){
        unit1_button.innerText="Labourer - 10 food";
        unit2_button.innerText="Spearman - 10 food, 5 ore";
        unit3_button.innerText="Warrior - 20 food, 10 ore";
        unit4_button.innerText="Horseman - 20 food, 10 ore";
        unit5_button.innerText="Archer - 10 food, 15 ore";
        unit6_button.innerText = "Musketeer - 20 food, 20 ore";
        unit7_button.innerText = "Gun car - 15 food, 30 ore, 1 aluminium";
        unit8_button.innerText = "Juggernaut - 30 food, 30 ore, 1 hazardite";
        unit9_button.innerText = "Tank - 25 food, 50 ore, 1 oil, 1 gem";

        build3_button.innerText = "Barracks - 10 food, 10 ore";
        build6_button.innerText = "Stables - 20 food, 20 ore";
        build7_button.innerText = "Archery Range - 20 food, 20 ore";
        build11_button.innerText = "Shooting Range - 25 food, 25 ore";
        build15_button.innerText = "Garage - 35 food, 35 ore";
        build16_button.innerText = "Elite Bootcamp - 40 food, 30 ore";
        build18_button.innerText = "Tank Park - 45 food, 55 ore";
    } 
    else if (player_faction === "pastans") {
        unit1_button.innerText = "Fusilli - 10 food";
        unit2_button.innerText = "Penne - 10 food, 5 ore";
        unit3_button.innerText = "Rigatoni - 20 food, 10 ore";
        unit4_button.innerText = "Lasagna - 15 food, 15 ore";
        unit5_button.innerText = "Orechiette - 15 food, 20 ore";
        unit6_button.innerText = "Spaghetti - 25 food, 20 ore";
        unit7_button.innerText = "Tagliatelle - 20 food, 30 ore, 1 hazardite";
        unit8_button.innerText = "Farfalle - 30 food, 15 ore, 1 gem";
        unit9_button.innerText = "Macaroni - 30 food, 30 ore, 1 oil, 1 aluminium";
        
        build3_button.innerText = "Spoon - 10 food, 10 ore";
        build6_button.innerText = "Stables - 20 food, 20 ore";
        build7_button.innerText = "Archery Range - 20 food, 20 ore";
        build11_button.innerText = "Sieve - 25 food, 25 ore";
        build15_button.innerText = "Grater - 35 food, 35 ore";
        build16_button.innerText = "Plate - 40 food, 30 ore";
        build18_button.innerText = "Pot - 45 food, 55 ore";
    } 
    else if (player_faction === "scrapbots") {
        unit1_button.innerText = "Worker - 10 ore";
        unit2_button.innerText = "Fodder - 5 food, 5 ore";
        unit3_button.innerText = "Fighter - 10 food, 10 ore";
        unit4_button.innerText = "Sprinter - 10 food, 15 ore";
        unit5_button.innerText = "Shooter - 10 food, 15 ore";
        unit6_button.innerText = "Skirmisher - 15 food, 15 ore";
        unit7_button.innerText = "Pursuer - 20 food, 20 ore, 1 aluminium";
        unit8_button.innerText = "Destroyer - 25 food, 25 ore, 1 oil";
        unit9_button.innerText = "Annihilator - 25 food, 50 ore, 1 gem, 1 hazardite";
    } 
    else{
        unit1_button.innerText = "Gnome - 10 food";
        unit2_button.innerText = "Kobold - 10 food, 10 ore";
        unit3_button.innerText = "Hoplite - 15 food, 15 ore";
        unit4_button.innerText = "Strider - 20 food, 15 ore";
        unit5_button.innerText = "Slingslime - 20 food, 15 ore";
        unit6_button.innerText = "Lich - 30 food, 20 ore";
        unit7_button.innerText = "Cerberus - 20 food, 20 ore, 1 aluminium";
        unit8_button.innerText = "Leviathan - 30 food, 30 ore, 1 oil";
        unit9_button.innerText = "Reaper - 40 food, 40 ore, 1 gem, 1 hazardite";
    }

    //MAIN MAP
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