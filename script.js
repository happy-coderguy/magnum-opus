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
    //choose faction
    choose_faction();
}
function choose_faction(){
    let player_faction;
    faction_choose.style.display="block";

    choose_yox_empire.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "yox_empire";
        generate_map();
    }
    choose_humans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "humans";
        generate_map();
    }
    choose_pastans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "pastans";
        generate_map();
    }
    choose_scrapbots.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "scrapbots";
        generate_map();
    }

}
function generate_map(){
    let tiletype;
    for (let x = 1; x<26; x++){
        for (let y = 1; y<26; y++){
            const tile = document.createElement("img");
            tile.classList.add("tile");
            tile.style.left = (x-1)*64+"px";
            tile.style.top = (y-1)*64+"px";
            if (x===2 && y===2){
                //player hq 
            }
        }
    }
}



/**ONCLICK ASSIGNMENTS**/
smenu_settings.onclick = show_settings;
set_close.onclick = hide_settings;
smenu_help.onclick = show_help;
help_close.onclick = hide_help;
smenu_play.onclick= game_start;
