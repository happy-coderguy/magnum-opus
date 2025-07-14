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
const hq_encycl = document.querySelector(".hq_info");
const hq_popup_div = document.querySelector(".hq_popup");
const hq_popup_text = document.querySelector(".hq_popup_text");
const hq_popup_ok = document.querySelector(".hq_popup_ok");
const hq_market = document.querySelector(".hq_market");

const encycl = document.querySelector(".encycl");
const encycl_close = document.querySelector(".encycl_close");

const food_amount_label = document.querySelector(".food_c_label");
const ore_amount_label = document.querySelector(".ore_c_label");
const oil_amount_label = document.querySelector(".oil_c_label");
const gems_amount_label = document.querySelector(".gems_c_label");
const hazardite_amount_label = document.querySelector(".hazardite_c_label");
const aluminium_amount_label = document.querySelector(".aluminium_c_label");
const food_amount_label2 = document.querySelector(".food_c_label2");
const ore_amount_label2 = document.querySelector(".ore_c_label2");
const oil_amount_label2 = document.querySelector(".oil_c_label2");
const gems_amount_label2 = document.querySelector(".gems_c_label2");
const hazardite_amount_label2 = document.querySelector(".hazardite_c_label2");
const aluminium_amount_label2 = document.querySelector(".aluminium_c_label2");

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

const encycl_entry1 = document.querySelector(".encycl_select_1");
const encycl_entry2 = document.querySelector(".encycl_select_2");
const encycl_entry3 = document.querySelector(".encycl_select_3");
const encycl_entry4 = document.querySelector(".encycl_select_4");
const encycl_entry5 = document.querySelector(".encycl_select_5");
const encycl_entry6 = document.querySelector(".encycl_select_6");
const encycl_entry7 = document.querySelector(".encycl_select_7");
const encycl_entry8 = document.querySelector(".encycl_select_8");
const encycl_entry9 = document.querySelector(".encycl_select_9");
const encycl_entry10 = document.querySelector(".encycl_select_10");
const encycl_entry11 = document.querySelector(".encycl_select_11");
const encycl_entry12 = document.querySelector(".encycl_select_12");
const encycl_entry13 = document.querySelector(".encycl_select_13");
const encycl_entry14 = document.querySelector(".encycl_select_14");
const encycl_entry15 = document.querySelector(".encycl_select_15");
const encycl_entry16 = document.querySelector(".encycl_select_16");
const encycl_entry17 = document.querySelector(".encycl_select_17");
const encycl_entry18 = document.querySelector(".encycl_select_18");
const encycl_entry19 = document.querySelector(".encycl_select_19");
const encycl_entry20 = document.querySelector(".encycl_select_20");
const encycl_entry21 = document.querySelector(".encycl_select_21");
const encycl_entry22 = document.querySelector(".encycl_select_22");
const encycl_entry23 = document.querySelector(".encycl_select_23");
const encycl_entry24 = document.querySelector(".encycl_select_24");
const encycl_entry25 = document.querySelector(".encycl_select_25");
const encycl_entry26 = document.querySelector(".encycl_select_26");
const encycl_entry27 = document.querySelector(".encycl_select_27");
const encycl_entry28 = document.querySelector(".encycl_select_28");
const encycl_entry29 = document.querySelector(".encycl_select_29");
const encycl_entry30 = document.querySelector(".encycl_select_30");
const encycl_entry31 = document.querySelector(".encycl_select_31");
const encycl_entry32 = document.querySelector(".encycl_select_32");
const encycl_entry33 = document.querySelector(".encycl_select_33");
const encycl_entry34 = document.querySelector(".encycl_select_34");
const encycl_entry35 = document.querySelector(".encycl_select_35");
const encycl_entry36 = document.querySelector(".encycl_select_36");
const encycl_entry37 = document.querySelector(".encycl_select_37");
const encycl_entry38 = document.querySelector(".encycl_select_38");
const encycl_entry39 = document.querySelector(".encycl_select_39");
const encycl_entry40 = document.querySelector(".encycl_select_40");
const encycl_entry41 = document.querySelector(".encycl_select_41");
const encycl_entry42 = document.querySelector(".encycl_select_42");
const encycl_entry43 = document.querySelector(".encycl_select_43");
const encycl_entry44 = document.querySelector(".encycl_select_44");
const encycl_entry45 = document.querySelector(".encycl_select_45");
const encycl_entry46 = document.querySelector(".encycl_select_46");
const encycl_entry47 = document.querySelector(".encycl_select_47");
const encycl_entry48 = document.querySelector(".encycl_select_48");
const encycl_entry49 = document.querySelector(".encycl_select_49");
const encycl_entry50 = document.querySelector(".encycl_select_50");
const encycl_entry51 = document.querySelector(".encycl_select_51");
const encycl_entry52 = document.querySelector(".encycl_select_52");
const encycl_entry53 = document.querySelector(".encycl_select_53");
const encycl_entry54 = document.querySelector(".encycl_select_54");
const encycl_entry55 = document.querySelector(".encycl_select_55");
const encycl_entry56 = document.querySelector(".encycl_select_56");
const encycl_entry57 = document.querySelector(".encycl_select_57");
const encycl_entry58 = document.querySelector(".encycl_select_58");
const encycl_entry59 = document.querySelector(".encycl_select_59");
const encycl_entry60 = document.querySelector(".encycl_select_60");
const encycl_entry61 = document.querySelector(".encycl_select_61");
const encycl_entry62 = document.querySelector(".encycl_select_62");
const encycl_entry63 = document.querySelector(".encycl_select_63");
const encycl_entry64 = document.querySelector(".encycl_select_64");
const encycl_entry65 = document.querySelector(".encycl_select_65");
const encycl_entry66 = document.querySelector(".encycl_select_66");
const encycl_entry67 = document.querySelector(".encycl_select_67");
const encycl_entry68 = document.querySelector(".encycl_select_68");
const encycl_entry69 = document.querySelector(".encycl_select_69");
const encycl_entry70 = document.querySelector(".encycl_select_70");
const encycl_entry71 = document.querySelector(".encycl_select_71");
const encycl_entry72 = document.querySelector(".encycl_select_72");
const encycl_entry73 = document.querySelector(".encycl_select_73");
const encycl_entry74 = document.querySelector(".encycl_select_74");
const encycl_entry75 = document.querySelector(".encycl_select_75");

const encycl_infobox_title = document.querySelector(".encycl_infobox_title");
const encycl_infobox_text = document.querySelector(".encycl_infobox_text");
const encycl_infobox_image = document.querySelector(".encycl_infobox_image");

const marketplace=document.querySelector(".marketplace");
const marketplace_close = document.querySelector(".marketplace_close");
const marketplace1 = document.querySelector(".marketplace1");
const marketplace2 = document.querySelector(".marketplace2");

const ore_to_food = document.querySelector(".ore_to_food");
const food_to_ore = document.querySelector(".food_to_ore");

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

let player_food = 500;
let player_ore = 500;
let player_oil = 500;
let player_hazardite = 500;
let player_aluminium = 500;
let player_gems = 500;
let player_faction;
let player_buildings = [];
let player_hq_health = 100;
let player_hq_maxhealth = 100;
let player_hq_power = 10;

//this is for goofy easter egg
const d = new Date
let time = d.getTime();

let building_inq;

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
function open_ya_base(){
    hq_menu.style.display="block";
}
function close_ya_base(){
    hq_menu.style.display="none";
}
function open_encycl(){
    encycl.style.display = "block";
    encycl_infobox_title.innerText="Click something to see information";
    encycl_infobox_image.src="images/backgrounds/black.jpg";
    encycl_infobox_text.innerText="Click something to see information";

}
function close_encycl(){
    encycl.style.display = "none";
}
function open_marketplace(){
    if(player_buildings.includes("Marketplace")){
        marketplace.style.display="block";
        if(player_buildings.includes("Shopping Center")){
            marketplace2.style.display="block";
        }
        else{
            marketplace2.style.display="none";
        }
    }
    else{
        hq_popup("You need to build the Marketplace first")
    }

}
function close_marketplace(){
    marketplace.style.display="none";
}
function update_resource_counters(){
    food_amount_label.innerText= player_food;
    ore_amount_label.innerText= player_ore;
    gems_amount_label.innerText= player_gems;
    oil_amount_label.innerText= player_oil;
    hazardite_amount_label.innerText= player_hazardite;
    aluminium_amount_label.innerText= player_aluminium;
    food_amount_label2.innerText= player_food;
    ore_amount_label2.innerText= player_ore;
    gems_amount_label2.innerText= player_gems;
    oil_amount_label2.innerText= player_oil;
    hazardite_amount_label2.innerText= player_hazardite;
    aluminium_amount_label2.innerText= player_aluminium;
}
function open_encycl_entry(entry){
    switch(entry){
        case 1:
            encycl_infobox_title.innerText="Labourer";
            encycl_infobox_image.src="images/humans/labourer.png";
            encycl_infobox_text.innerText="A builder unit. When it ends its turn on a resource it makes a mine for you.";
            break; 
        case 2:
            encycl_infobox_title.innerText="Spearman";
            encycl_infobox_image.src="images/humans/spearman.png";
            encycl_infobox_text.innerText="Weak melee unit. Uses sharp pointy.";
            break;
        case 3:
            encycl_infobox_title.innerText="Swordsman";
            encycl_infobox_image.src="images/humans/swordsman.png";
            encycl_infobox_text.innerText="Melee unit. Likes sunshine and beef.";
            break;
        case 4:
            encycl_infobox_title.innerText="Horseman";
            encycl_infobox_image.src="images/humans/horseman.png";
            encycl_infobox_text.innerText="Fast melee unit. Neigh neigh";
            break;
        case 5:
            encycl_infobox_title.innerText="Archer";
            encycl_infobox_image.src="images/humans/archer.png";
            encycl_infobox_text.innerText="Can shoot arrows (maybe)";
            break;
        case 6:
            encycl_infobox_title.innerText="Musketeer";
            encycl_infobox_image.src="images/humans/musketeer.png";
            encycl_infobox_text.innerText="Own a musket for home defence. Can shoot and stab";
            break;    
        case 7:
            encycl_infobox_title.innerText="Gun Car";
            encycl_infobox_image.src="images/humans/gun_car.png";
            encycl_infobox_text.innerText="Vroom pyew";
            break;
        case 8:
            encycl_infobox_title.innerText="Juggernaut";
            encycl_infobox_image.src="images/humans/juggernaut.png";
            encycl_infobox_text.innerText="Real tough guy";
            break;
        case 9:
            encycl_infobox_title.innerText="Tank";
            encycl_infobox_image.src="images/humans/tank.png";
            encycl_infobox_text.innerText="Slow and big but deadly. Not historically accurate.";
            break;
        case 10:
            encycl_infobox_title.innerText="Fusilli";
            encycl_infobox_image.src="images/pastans/fusilli.png";
            encycl_infobox_text.innerText="A builder unit. When it ends its turn on a resource it makes a mine for you.";
            break;
        case 11:
            encycl_infobox_title.innerText="Penne";
            encycl_infobox_image.src="images/pastans/penne.png";
            encycl_infobox_text.innerText="Shoots lasers from its hand. Weak but cheap";
            break;
        case 12:
            encycl_infobox_title.innerText="Rigatoni";
            encycl_infobox_image.src="images/pastans/rigatoni.png";
            encycl_infobox_text.innerText="A bombastic stabby man.";
            break;
        case 13:
            encycl_infobox_title.innerText="Lasagna";
            encycl_infobox_image.src="images/pastans/lasagna.png";
            encycl_infobox_text.innerText="Goes nice close to its enemies and then BLEHHH";
            break;
        case 14:
            encycl_infobox_title.innerText="Orechiette";
            encycl_infobox_image.src="images/pastans/orechiette.png";
            encycl_infobox_text.innerText="Ranged unit with many lasers.";
            break;
        case 15:
            encycl_infobox_title.innerText="Spaghetti";
            encycl_infobox_image.src="images/pastans/spaghetti.png";
            encycl_infobox_text.innerText="Grandma's cooking leads to psychic awakening";
            break;
        case 16:
            encycl_infobox_title.innerText="Tagliatelle";
            encycl_infobox_image.src="images/pastans/tagliatelle.png";
            encycl_infobox_text.innerText="Little gremlin big gun";
            break;
        case 17:
            encycl_infobox_title.innerText="Farfalle";
            encycl_infobox_image.src="images/pastans/farfalle.png";
            encycl_infobox_text.innerText="It's ya boy Farfie who attacks twice. DJ Farfie OUT";
            break;
        case 18:
            encycl_infobox_title.innerText="Macaroni";
            encycl_infobox_image.src="images/pastans/macaroni.png";
            encycl_infobox_text.innerText="Like El Macho but so macho he doesn't die, melee";
            break;
        case 19:
            encycl_infobox_title.innerText="Builder";
            encycl_infobox_image.src="images/scrapbots/builder.png";
            encycl_infobox_text.innerText="A builder unit. When it ends its turn on a resource it makes a mine for you.";
            break;
        case 20:
            encycl_infobox_title.innerText="Fodder";
            encycl_infobox_image.src="images/scrapbots/fodder.png";
            encycl_infobox_text.innerText="Melee. Lacks the intelligence to care about being fodder";
            break;
        case 21:
            encycl_infobox_title.innerText="Fighter";
            encycl_infobox_image.src="images/scrapbots/fighter.png";
            encycl_infobox_text.innerText="Punchy punchy boi";
            break;
        case 22:
            encycl_infobox_title.innerText="Sprinter";
            encycl_infobox_image.src="images/scrapbots/sprinter.png";
            encycl_infobox_text.innerText="Melee that shockingly can't run because no legs.";
            break;
        case 23:
            encycl_infobox_title.innerText="Shooter";
            encycl_infobox_image.src="images/scrapbots/shooter.png";
            encycl_infobox_text.innerText="Most self-explanatory unit";
            break;
        case 24:
            encycl_infobox_title.innerText="Skirmisher";
            encycl_infobox_image.src="images/scrapbots/skirmisher.png";
            encycl_infobox_text.innerText="Forgive me for naming it skirmisher even though it's not one";
            break;
        case 25:
            encycl_infobox_title.innerText="Pursuer";
            encycl_infobox_image.src="images/scrapbots/pursuer.png";
            encycl_infobox_text.innerText="Be you here or be you there I shall reduce you to thin air";
            break;
        case 26:
            encycl_infobox_title.innerText="Destroyer";
            encycl_infobox_image.src="images/scrapbots/destroyer.png";
            encycl_infobox_text.innerText="Unstoppable melee that will touch your opponents";
            break;
        case 27:
            encycl_infobox_title.innerText="Annihilator";
            encycl_infobox_image.src="images/scrapbots/annihilator.png";
            encycl_infobox_text.innerText="Mike, why is the sun flying towards us?";
            break;
        case 28:
            encycl_infobox_title.innerText="Gnome";
            encycl_infobox_image.src="images/yox_empire/gnome.png";
            encycl_infobox_text.innerText="A builder unit. When it ends its turn on a resource it makes a mine for you.";
            break;
        case 29:
            encycl_infobox_title.innerText="Kobold";
            encycl_infobox_image.src="images/yox_empire/kobold.png";
            encycl_infobox_text.innerText="Melee unit that somehow manages to punch";
            break;
        case 30:
            encycl_infobox_title.innerText="Hoplite";
            encycl_infobox_image.src="images/yox_empire/hoplite.png";
            encycl_infobox_text.innerText="Clickity click-clack, a discombobulating attack";
            break;
        case 31:
            encycl_infobox_title.innerText="Strider";
            encycl_infobox_image.src="images/yox_empire/strider.png";
            encycl_infobox_text.innerText="Fast and melee";
            break;
        case 32:
            encycl_infobox_title.innerText="Slingslime";
            encycl_infobox_image.src="images/yox_empire/slingslime.png";
            encycl_infobox_text.innerText="Shoots rocks cutely";
            break;
        case 33:
            encycl_infobox_title.innerText="Lich";
            encycl_infobox_image.src="images/yox_empire/lich.png";
            encycl_infobox_text.innerText="I cast big fat laser";
            break;
        case 34:
            encycl_infobox_title.innerText="Cerberus";
            encycl_infobox_image.src="images/yox_empire/cerberus.png";
            encycl_infobox_text.innerText="Fast, shoots you, punches you";
            break;
        case 35:
            encycl_infobox_title.innerText="Leviathan";
            encycl_infobox_image.src="images/yox_empire/leviathan.png";
            encycl_infobox_text.innerText="Eats kobolds for breakfast";
            break;
        case 36:
            encycl_infobox_title.innerText="Reaper";
            encycl_infobox_image.src="images/yox_empire/reaper.png";
            encycl_infobox_text.innerText="Deadly elite unit that will probably kill you";
            break;
        case 37:
            encycl_infobox_title.innerText="Farm";
            encycl_infobox_image.src="images/icons/food.png";
            encycl_infobox_text.innerText="Gives you 5 more food each turn";
            break;
        case 38:
            encycl_infobox_title.innerText="Quarry";
            encycl_infobox_image.src="images/icons/ore.png";
            encycl_infobox_text.innerText="Gives you 5 more ore each turn";
            break;
        case 39:
            encycl_infobox_title.innerText="Marketplace";
            encycl_infobox_image.src="images/icons/marketplace.png";
            encycl_infobox_text.innerText="Allows for you to trade basic resources";
            break;
        case 40:
            encycl_infobox_title.innerText="Walls";
            encycl_infobox_image.src="images/icons/wall.png";
            encycl_infobox_text.innerText="City health +50";
            break;
        case 41:
            encycl_infobox_title.innerText="Mill";
            encycl_infobox_image.src="images/icons/food.png";
            encycl_infobox_text.innerText="Gives you 5 more food each turn";
            break;
        case 42:
            encycl_infobox_title.innerText="Mineshafts";
            encycl_infobox_image.src="images/icons/ore.png";
            encycl_infobox_text.innerText="Gives you 5 more ore each turn";
            break;
        case 43:
            encycl_infobox_title.innerText="Fortifications";
            encycl_infobox_image.src="images/icons/fortifications.png";
            encycl_infobox_text.innerText="City health +50";
            break;
        case 44:
            encycl_infobox_title.innerText="University";
            encycl_infobox_image.src="images/icons/science.png";
            encycl_infobox_text.innerText="Unlock science";
            break;
        case 45:
            encycl_infobox_title.innerText="Shopping Center";
            encycl_infobox_image.src="images/icons/marketplace.png";
            encycl_infobox_text.innerText="Allows you to trade all resources";
            break;
        case 46:
            encycl_infobox_title.innerText="Hospital";
            encycl_infobox_image.src="images/icons/hospital.png";
            encycl_infobox_text.innerText="Units next to your city will heal at the end of your turn";
            break;
        case 47:
            encycl_infobox_title.innerText="Research Center";
            encycl_infobox_image.src="images/icons/science.png";
            encycl_infobox_text.innerText="Unlock more science";
            break;
        case 48:
            encycl_infobox_title.innerText="Barracks";
            encycl_infobox_image.src="images/humans/swordsman.png";
            encycl_infobox_text.innerText="Allows you to recuit Swordsmen";
            break;
        case 49:
            encycl_infobox_title.innerText="Stables";
            encycl_infobox_image.src="images/humans/horseman.png";
            encycl_infobox_text.innerText="Allows you to recuit Horsemen";
            break;
        case 50:
            encycl_infobox_title.innerText="Archery Range";
            encycl_infobox_image.src="images/humans/archer.png";
            encycl_infobox_text.innerText="Allows you to recuit Archers";
            break;
        case 51:
            encycl_infobox_title.innerText="Shooting Range";
            encycl_infobox_image.src="images/humans/musketeer.png";
            encycl_infobox_text.innerText="Allows you to recuit Musketeers. Not to be confused with Shooting Range";
            break;
        case 52:
            encycl_infobox_title.innerText="Garage";
            encycl_infobox_image.src="images/humans/gun_car.png";
            encycl_infobox_text.innerText="Allows you to recuit Gun Cars, has cool doors";
            break;
        case 53:
            encycl_infobox_title.innerText="Elite Bootcamp";
            encycl_infobox_image.src="images/humans/juggernaut.png";
            encycl_infobox_text.innerText="Allows you to recuit Juggernauts, includes one (1) tree";
            break;
        case 54:
            encycl_infobox_title.innerText="Tank Park";
            encycl_infobox_image.src="images/humans/tank.png";
            encycl_infobox_text.innerText="Allows you to recuit Tanks, includes two (2) trees";
            break;
        case 55:
            encycl_infobox_title.innerText="Spoon";
            encycl_infobox_image.src="images/pastans/rigatoni.png";
            encycl_infobox_text.innerText="Allows you to recuit Rigatonines";
            break;
        case 56:
            encycl_infobox_title.innerText="Baking Tray";
            encycl_infobox_image.src="images/pastans/lasagna.png";
            encycl_infobox_text.innerText="Allows you to recuit Lasagnae";
            break;
        case 57:
            encycl_infobox_title.innerText="Bowl";
            encycl_infobox_image.src="images/pastans/orechiette.png";
            encycl_infobox_text.innerText="Allows you to recuit Orechietti";
            break;
        case 58:
            encycl_infobox_title.innerText="Sieve";
            encycl_infobox_image.src="images/pastans/spaghetti.png";
            encycl_infobox_text.innerText="Allows you to recuit Spaghettis";
            break;
        case 59:
            encycl_infobox_title.innerText="Grater";
            encycl_infobox_image.src="images/pastans/tagliatelle.png";
            encycl_infobox_text.innerText="Allows you to recuit Tagliatellae";
            break;
        case 60:
            encycl_infobox_title.innerText="Plate";
            encycl_infobox_image.src="images/pastans/farfalle.png";
            encycl_infobox_text.innerText="Allows you to recuit Farfallae";
            break;
        case 61:
            encycl_infobox_title.innerText="Pot";
            encycl_infobox_image.src="images/pastans/macaroni.png";
            encycl_infobox_text.innerText="Allows you to recuit Macarone";
            break;
        case 62:
            encycl_infobox_title.innerText="Factory";
            encycl_infobox_image.src="images/scrapbots/fighter.png";
            encycl_infobox_text.innerText="Allows you to recuit Fighters";
            break;
        case 63:
            encycl_infobox_title.innerText="Racetrack";
            encycl_infobox_image.src="images/scrapbots/sprinter.png";
            encycl_infobox_text.innerText="Allows you to recuit Sprinters, is the most boring circle track possible";
            break;
        case 64:
            encycl_infobox_title.innerText="Shooting Range";
            encycl_infobox_image.src="images/scrapbots/shooter.png";
            encycl_infobox_text.innerText="Allows you to recuit Shooters. Not to be confused with Shooting Range";
            break;
        case 65:
            encycl_infobox_title.innerText="Spider Bunker";
            encycl_infobox_image.src="images/scrapbots/skirmisher.png";
            encycl_infobox_text.innerText="Allows you to recuit Skirmishers, it's not a cave.";
            break;
        case 66:
            encycl_infobox_title.innerText="Airfield";
            encycl_infobox_image.src="images/scrapbots/pursuer.png";
            encycl_infobox_text.innerText="Allows you to recuit Pursuers";
            break;
        case 67:
            encycl_infobox_title.innerText="Assembly Scaffolds";
            encycl_infobox_image.src="images/scrapbots/destroyer.png";
            encycl_infobox_text.innerText="Allows you to recuit Destroyers. Looks like a spaceship launch pad";
            break;
        case 68:
            encycl_infobox_title.innerText="Supershell";
            encycl_infobox_image.src="images/scrapbots/annihilator.png";
            encycl_infobox_text.innerText="Allows you to recuit Annihilators, like a dyson sphere but it builds the sun";
            break;
        case 69:
            encycl_infobox_title.innerText="Graveyard";
            encycl_infobox_image.src="images/yox_empire/hoplite.png";
            encycl_infobox_text.innerText="Allows you to recuit Hoplites, has spiky trees";
            break;
        case 70:
            encycl_infobox_title.innerText="Silent Trees";
            encycl_infobox_image.src="images/yox_empire/strider.png";
            encycl_infobox_text.innerText="Allows you to recuit Striders";
            break;
        case 71:
            encycl_infobox_title.innerText="Damp Cave";
            encycl_infobox_image.src="images/yox_empire/slingslime.png";
            encycl_infobox_text.innerText="Allows you to recuit Slingslimes. Hat shop included";
            break;
        case 72:
            encycl_infobox_title.innerText="Forbidden Library";
            encycl_infobox_image.src="images/yox_empire/lich.png";
            encycl_infobox_text.innerText="Allows you to recuit Liches";
            break;
        case 73:
            encycl_infobox_title.innerText="Hell's Kennel";
            encycl_infobox_image.src="images/yox_empire/cerberus.png";
            encycl_infobox_text.innerText="Allows you to recuit Cerberuses";
            break;
        case 74:
            encycl_infobox_title.innerText="Big Pit";
            encycl_infobox_image.src="images/yox_empire/leviathan.png";
            encycl_infobox_text.innerText="Allows you to recuit Leviathans, it's very big";
            break;
        case 75:
            encycl_infobox_title.innerText="Tower of Souls";
            encycl_infobox_image.src="images/yox_empire/reaper.png";
            encycl_infobox_text.innerText="Allows you to recuit Reapers, has cool floating wisps";
            break;
        
        
        
        /**
         * build3_button.innerText = "Graveyard - 10 food, 10 ore";
        build6_button.innerText = "Silent Trees - 20 food, 20 ore";
        build7_button.innerText = "Damp Cave - 20 food, 20 ore";
        build11_button.innerText = "Forbidden Library - 25 food, 25 ore";
        build15_button.innerText = "Hell's Kennel - 35 food, 35 ore";
        build16_button.innerText = "Big Pit - 40 food, 30 ore";
        build18_button.innerText = "Tower of Souls - 45 food, 55 ore";
    }  **/
        
        
        
        
        
        
        
        
        

        
        
        
        
        
        
        
        
        
        
        

    }
}
function hq_popup(text){
    hq_popup_div.style.display="block";
    hq_popup_text.innerText=text;
}
function hq_popup_hide(){
    hq_popup_div.style.display="none";
}
function do_trade(tradeid){
    switch (tradeid){
        case 1:
            if(player_ore>=15){
                player_ore=player_ore-15;
                player_food=player_food+10;
                update_resource_counters();
            }
            break;
        case 2:
            if(player_food>=15){
                player_food=player_food-15;
                player_ore=player_ore+10;
                update_resource_counters();
            }
            break;
    }
}
function buy_building_do(building_number){
    switch(building_number){
        case 1:
            if(player_buildings.includes("Farm")){
                hq_popup("You already built this");
            }
            else if (player_food<5 || player_ore<5){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("Farm");
                player_food=player_food-5;
                player_ore=player_ore-5;
                build1_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 2:
            if(player_buildings.includes("Quarry")){
                hq_popup("You already built this")    
            }
            else if(player_food<5 || player_ore<5){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push("Quarry");
                player_food=player_food-5;
                player_ore=player_ore-5;
                build2_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 3:
            if(player_faction==="humans"){
                building_inq="Barracks";
            }
            else if(player_faction==="pastans"){
                building_inq="Spoon";
            }
            else if(player_faction==="scrapbots"){
                building_inq="Factory";
            }
            else{
                building_inq="Graveyard";
            }

            if(player_buildings.includes(building_inq)){
                hq_popup("You already built this")    
            }
            else if(player_food<10 || player_ore<10){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push(building_inq);
                root.style.setProperty("--unit-three-unlocked","#ffffff");
                player_food=player_food-10;
                player_ore=player_ore-10;
                build3_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 4:
            if(player_buildings.includes("Marketplace")){
                hq_popup("You already built this")    
            }
            else if(player_food<10 || player_ore<10){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push("Marketplace");
                player_food=player_food-10;
                player_ore=player_ore-10;
                build4_button.innerText = "Built";
                root.style.setProperty("--hq-market-unlocked", "#000000");
                update_resource_counters();
            }
            break;
        case 5:
            if(player_buildings.includes("Walls")){
                hq_popup("You already built this");
            }
            else if(player_food<10 || player_ore<10){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("Walls");
                player_food=player_food-10;
                player_ore=player_ore-10;
                build5_button.innerText="Built";
                update_resource_counters();
                player_hq_health=player_hq_health+100;
                player_hq_maxhealth=player_hq_maxhealth+100;
            }
            break; 
        case 6:
            if(player_faction==="humans"){
                building_inq="Stables";
            }
            else if(player_faction==="pastans"){
                building_inq="Baking Tray";
            }
            else if(player_faction==="scrapbots"){
                building_inq="Racetrack";
            }
            else{
                building_inq="Silent Trees";
            }

            if(player_buildings.includes(building_inq)){
                hq_popup("You already built this")    
            }
            else if(player_food<20 || player_ore<20){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push(building_inq);
                root.style.setProperty("--unit-four-unlocked","#ffffff");
                player_food=player_food-20;
                player_ore=player_ore-20;
                build6_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 7:
            if(player_faction==="humans"){
                building_inq="Archery Range";
            }
            else if(player_faction==="pastans"){
                building_inq="Bowl";
            }
            else if(player_faction==="scrapbots"){
                building_inq="Shooting Range";
            }
            else{
                building_inq="Damp Cave";
            }

            if(player_buildings.includes(building_inq)){
                hq_popup("You already built this")    
            }
            else if(player_food<20 || player_ore<20){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push(building_inq);
                root.style.setProperty("--unit-five-unlocked","#ffffff");
                player_food=player_food-20;
                player_ore=player_ore-20;
                build7_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 8:
            if(player_buildings.includes("Mill")){
                hq_popup("You already built this");
            }
            else if (player_food<20 || player_ore<20){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("Mill");
                player_food=player_food-20;
                player_ore=player_ore-20;
                build8_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 9:
            if(player_buildings.includes("Mineshafts")){
                hq_popup("You already built this");
            }
            else if (player_food<20 || player_ore<20){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("Mineshafts");
                player_food=player_food-20;
                player_ore=player_ore-20;
                build9_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 10:
            if(player_buildings.includes("Fortifications")){
                hq_popup("You already built this");
            }
            else if(player_food<20 || player_ore<20){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("Fortifications");
                player_food=player_food-20;
                player_ore=player_ore-20;
                build10_button.innerText="Built";
                update_resource_counters();
                player_hq_health=player_hq_health+50;
                player_hq_maxhealth=player_hq_maxhealth+50;
                player_hq_power=player_hq_power+5;
            }
            break; 
        case 11:
            if(player_faction==="humans"){
                building_inq="Shooting Range";
            }
            else if(player_faction==="pastans"){
                building_inq="Sieve";
            }
            else if(player_faction==="scrapbots"){
                building_inq="Spider Bunker";
            }
            else{
                building_inq="Forbidden Library";
            }

            if(player_buildings.includes(building_inq)){
                hq_popup("You already built this")    
            }
            else if(player_food<25 || player_ore<25){
                hq_popup("You don't have enough resources")
            }
            else{
                player_buildings.push(building_inq);
                root.style.setProperty("--unit-six-unlocked","#ffffff");
                player_food=player_food-25;
                player_ore=player_ore-25;
                build11_button.innerText = "Built";
                update_resource_counters();
            }
            break;
        case 12:
            if(player_buildings.includes("University")){
                hq_popup("You already built this");
            }
            else if(player_food<30 || player_ore<30){
                hq_popup("You don't have enough resources");
            }
            else{
                player_buildings.push("University");
                player_food=player_food-30;
                player_ore=player_ore-30;
                build12_button.innerText="Built";
                update_resource_counters();
                root.style.setProperty("--hq-university-unlocked", "#000000");
            }
            break; 

    }
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
        root.style.setProperty("--player-color-dark", "#310080");
        generate_map();
    }
    choose_humans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "humans";
        root.style.setProperty("--player-color-pale", "#66ccee");
        root.style.setProperty("--player-color-light", "#77ddff");
        root.style.setProperty("--player-color-dark", "#0986a9");
        generate_map();
    }
    choose_pastans.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "pastans";
        root.style.setProperty("--player-color-pale", "#55eeaa");
        root.style.setProperty("--player-color-light", "#66ffbb");
        root.style.setProperty("--player-color-dark", "#00aa47");
        generate_map();
    }
    choose_scrapbots.onclick = function(){
        faction_choose.style.display="none";
        player_faction = "scrapbots";
        root.style.setProperty("--player-color-pale", "#ee9955");     
        root.style.setProperty("--player-color-light", "#ffaa66");
        root.style.setProperty("--player-color-dark", "#aa5500");
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
        build6_button.innerText = "Baking Tray - 20 food, 20 ore";
        build7_button.innerText = "Bowl - 20 food, 20 ore";
        build11_button.innerText = "Sieve - 25 food, 25 ore";
        build15_button.innerText = "Grater - 35 food, 35 ore";
        build16_button.innerText = "Plate - 30 food, 40 ore";
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

        build3_button.innerText = "Factory - 10 food, 10 ore";
        build6_button.innerText = "Racetrack - 20 food, 20 ore";
        build7_button.innerText = "Shooting Range - 20 food, 20 ore";
        build11_button.innerText = "Spider Bunker - 25 food, 25 ore";
        build15_button.innerText = "Airfield - 30 food, 40 ore";
        build16_button.innerText = "Assembly Scaffolds - 30 food, 40 ore";
        build18_button.innerText = "Supershell - 45 food, 55 ore";
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

        build3_button.innerText = "Graveyard - 10 food, 10 ore";
        build6_button.innerText = "Silent Trees - 20 food, 20 ore";
        build7_button.innerText = "Damp Cave - 20 food, 20 ore";
        build11_button.innerText = "Forbidden Library - 25 food, 25 ore";
        build15_button.innerText = "Hell's Kennel - 35 food, 35 ore";
        build16_button.innerText = "Big Pit - 40 food, 30 ore";
        build18_button.innerText = "Tower of Souls - 45 food, 55 ore";
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
    update_resource_counters();
}

//ONCLICK ASSIGNMENTS
smenu_settings.onclick = show_settings;
set_close.onclick = hide_settings;
smenu_help.onclick = show_help;
help_close.onclick = hide_help;
smenu_play.onclick= game_start;
hq_close.onclick = close_ya_base;
hq_encycl.onclick = open_encycl;
encycl_close.onclick = close_encycl;
build1_button.onclick = () => buy_building_do(1);
build2_button.onclick =  () => buy_building_do(2);
build3_button.onclick =  () => buy_building_do(3);
build4_button.onclick =  () => buy_building_do(4);
build5_button.onclick =  () => buy_building_do(5);
build6_button.onclick =  () => buy_building_do(6);
build7_button.onclick =  () => buy_building_do(7);
build8_button.onclick =  () => buy_building_do(8);
build9_button.onclick =  () => buy_building_do(9);
build10_button.onclick =  () => buy_building_do(10);
build11_button.onclick =  () => buy_building_do(11);
build12_button.onclick =  () => buy_building_do(12);
build13_button.onclick =  () => buy_building_do(13);
build14_button.onclick =  () => buy_building_do(14);
build15_button.onclick =  () => buy_building_do(15);
build16_button.onclick =  () => buy_building_do(16);
build17_button.onclick =  () => buy_building_do(17);
build18_button.onclick =  () => buy_building_do(18);
hq_popup_ok.onclick=hq_popup_hide;
hq_market.onclick=open_marketplace;
marketplace_close.onclick=close_marketplace;
ore_to_food.onclick = () => do_trade(1);
food_to_ore.onclick = () => do_trade(2);
for (let i = 1; i <= 75; i++) {
    const btn = document.querySelector(`.encycl_select_${i}`);
    btn.onclick = () => open_encycl_entry(i);    
}

update_resource_counters();
//you used to call me on yo cell phone