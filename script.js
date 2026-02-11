//WARNING: this code isnt family friendly
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
let hq_naming_list = [];

const tile_container = document.querySelector(".tiles");

const hotbar = document.querySelector(".hotbar");
const next_turn = document.querySelector(".next_turn");
const unit_hotbar = document.querySelector(".unit_hotbar");
const unit_chealth_text = document.querySelector(".unit_chealth_text");
const unit_mhealth_text = document.querySelector(".unit_mhealth_text");
const unit_cmove_text = document.querySelector(".unit_cmove_text");
const unit_mmove_text = document.querySelector(".unit_mmove_text");
const unit_name_text = document.querySelector(".unit_name_text");
const unit_rattack_text = document.querySelector(".unit_rattack_text");
const unit_battack_text = document.querySelector(".unit_battack_text");
const unit_hotbar_closer = document.querySelector(".unit_hotbar_closer");
const unit_move_text_cont = document.querySelector(".unit_move_text");
const unit_attack_text_cont = document.querySelector(".unit_attack_text_container");

const damage_text_container = document.querySelector(".damage_effect");
const damage_text = document.querySelector(".damage_text");

const hq_menu = document.querySelector(".hq_menu");
const hq_close = document.querySelector(".hq_close");
const hq_encycl = document.querySelector(".hq_info");
const hq_popup_div = document.querySelector(".hq_popup");
const hq_popup_text = document.querySelector(".hq_popup_text");
const hq_popup_ok = document.querySelector(".hq_popup_ok");
const hq_market = document.querySelector(".hq_market");
const hq_research = document.querySelector(".hq_research");

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
const food_amount_label3 = document.querySelector(".food_c_label3");
const ore_amount_label3 = document.querySelector(".ore_c_label3");
const oil_amount_label3 = document.querySelector(".oil_c_label3");
const gems_amount_label3 = document.querySelector(".gems_c_label3");
const hazardite_amount_label3 = document.querySelector(".hazardite_c_label3");
const aluminium_amount_label3 = document.querySelector(".aluminium_c_label3");

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

const hq_widget = document.querySelector(".hq_widget");
const hq_widget_move_button = document.querySelector(".move_hq_widget");
let hq_widget_state = 0;
const hq_healthbar=document.querySelector(".hq_widget_healthbar");
const hq_health_current_text = document.querySelector(".hqw_health_current_text");
const hq_health_max_text = document.querySelector(".hqw_health_max_text");

const encycl = document.querySelector(".encycl");
const encycl_close = document.querySelector(".encycl_close");
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
let encycl_infobox_data;

const marketplace=document.querySelector(".marketplace");
const marketplace_close = document.querySelector(".marketplace_close");
const marketplace1 = document.querySelector(".marketplace1");
const marketplace2 = document.querySelector(".marketplace2");
const ore_to_food = document.querySelector(".ore_to_food");
const food_to_ore = document.querySelector(".food_to_ore");
const otf_price_label = document.querySelector(".otf_price");
const fto_price_label = document.querySelector(".fto_price");
let otf_price = 15;
let fto_price = 15;
let premiums_price = 15;
let premiums_yield = 10;
const food_to_oil = document.querySelector(".food_to_oil");
const fti_price_label = document.querySelector(".fti_price");
const food_to_hazardite = document.querySelector(".food_to_hite");
const fth_price_label = document.querySelector(".fth_price");
const ore_to_gems = document.querySelector(".ore_to_gems");
const otg_price_label = document.querySelector(".otg_price");
const ore_to_aluminium = document.querySelector(".ore_to_alu");
const ota_price_label = document.querySelector(".ota_price");
const oil_to_food = document.querySelector(".oil_to_food");
const itf_yield_label = document.querySelector(".itf_yield");
const hazardite_to_food = document.querySelector(".hite_to_food");
const htf_yield_label = document.querySelector(".htf_yield");
const gems_to_ore = document.querySelector(".gems_to_ore");
const gto_yield_label = document.querySelector(".gto_yield");
const aluminium_to_ore = document.querySelector(".alu_to_ore");
const ato_yield_label = document.querySelector(".ato_yield");

const research = document.querySelector(".research");
const research_close = document.querySelector(".research_close");
const research_row1 = document.querySelector(".research_row1");
const research_row2 = document.querySelector(".research_row2");
const research_row3 = document.querySelector(".research_row3");
const research_row4 = document.querySelector(".research_row4");
const r1r1 = document.querySelector(".r1r1");
const r1r2 = document.querySelector(".r1r2");
const r1r3 = document.querySelector(".r1r3");
const r1r4 = document.querySelector(".r1r4");
const r2r1 = document.querySelector(".r2r1");
const r2r2 = document.querySelector(".r2r2");
const r2r3 = document.querySelector(".r2r3");
const r2r4 = document.querySelector(".r2r4");
const r3r1 = document.querySelector(".r3r1");
const r3r2 = document.querySelector(".r3r2");
const r3r3 = document.querySelector(".r3r3");
const r3r4 = document.querySelector(".r3r4");
const r4r1 = document.querySelector(".r4r1");
const r4r2 = document.querySelector(".r4r2");
const r4r3 = document.querySelector(".r4r3");
const r4r4 = document.querySelector(".r4r4");

const loading_images = ["backgrounds/black.jpg","backgrounds/menu.png","humans/archer.png","humans/gun_car.png","humans/horseman.png","humans/juggernaut.png","humans/labourer.png","humans/musketman.png","humans/spearman.png","humans/warrior.png","humans/tank.png","pastans/farfalle.png","pastans/fusilli.png","pastans/lasagna.png","pastans/macaroni.png","pastans/orechiette.png","pastans/penne.png","pastans/rigatoni.png","pastans/spaghetti.png","pastans/tagliatelle.png","scrapbots/annihilator.png","scrapbots/builder.png","scrapbots/destroyer.png","scrapbots/fighter.png","scrapbots/fodder.png","scrapbots/pursuer.png","scrapbots/shooter.png","scrapbots/skirmisher.png","scrapbots/sprinter.png","tiles/yox_empire_hq.png","tiles/scrapbots_hq.png","tiles/pastans_hq.png","tiles/oil.png","tiles/oil_developed.png","tiles/mine.png","tiles/mine_developed.png","tiles/land.png","tiles/humans_hq.png","tiles/hazardite.png","tiles/hazardite_developed.png","tiles/gems.png","tiles/gems_developed.png","tiles/food.png","tiles/food_developed.png","tiles/aluminium.png","tiles/aluminium_developed.png","yox_empire/strider.png","yox_empire/slingslime.png","yox_empire/reaper.png","yox_empire/lich.png","yox_empire/leviathan.png","yox_empire/kobold.png","yox_empire/hoplite.png","yox_empire/gnome.png","yox_empire/cerberus.png"
];
let global_units=[];
let global_resources=[];

let player = {
    food:5000, ore:5000, oil:500, hazardite:500, aluminium:500, gems:500,
    food_gain:5, ore_gain:5, oil_gain:0, hazardite_gain:0, aluminium_gain:0, gems_gain:0,
    faction:"",
    buildings:[],
    research:[],
    units:[],
    hq_health:100, hq_maxhealth:100, hq_pcenthealth:100,
    color:"",
};
let bot1 = {
    food:0, ore:0, oil:0, hazardite:0, aluminium:0, gems:0,
    food_gain:5, ore_gain:5, oil_gain:0, hazardite_gain:0, aluminium_gain:0, gems_gain:0,
    faction:"",
    buildings:[],
    research:[],
    units:[],
    hq_health:100, hq_maxhealth:100,
    color:"",
};
let bot2 = {
    food:0, ore:0, oil:0, hazardite:0, aluminium:0, gems:0,
    food_gain:5, ore_gain:5, oil_gain:0, hazardite_gain:0, aluminium_gain:0, gems_gain:0,
    faction:"",
    buildings:[],
    research:[],
    units:[],
    hq_health:100, hq_maxhealth:100,
    color:"",
};
let bot3 = {
    food:0, ore:0, oil:0, hazardite:0, aluminium:0, gems:0,
    food_gain:5, ore_gain:5, oil_gain:0, hazardite_gain:0, aluminium_gain:0, gems_gain:0,
    faction:"",
    buildings:[],
    research:[],
    units:[],
    hq_health:100, hq_maxhealth:100,
    color:"",
};
let building_inq;
let current_id=456;
let correct_x;
let active_unit=null;
let research_32_status=0;
let rename_this_variable;
let damage_text_animation_counter=0;
let bs_variable;
let linknum;

/**UNIT STUFF AND UNIT FUNCTIONS**/
function assign_id(){
    current_id+=1;
    return current_id;
}
function get_unit_by_pos(x, y){
    for(let unit of global_units){
        if(unit.x===x && unit.y===y){
            return unit;
        }   
    }
    return null;
}
function get_resource_tile_by_pos(x,y){
    for(let tile of global_resources){
        if(tile.x==x && tile.y==y){
            return tile;
        }
    }
    return null;
}
//find empty spot by player hq
function FESBP(){
    if(get_unit_by_pos(3,3)===null){return [3,3];}
    else if(get_unit_by_pos(2,3)===null){return [2,3];}
    else if(get_unit_by_pos(3,2)===null){return [3,2];}
    else if(get_unit_by_pos(1,3)===null){return [1,3];}
    else if(get_unit_by_pos(3,1)===null){return [3,1];}
    else if(get_unit_by_pos(1,2)===null){return [1,2];}
    else if(get_unit_by_pos(2,1)===null){return [2,1];}
    else if(get_unit_by_pos(1,1)===null){return [1,1];}
    else{return null;}
}

class Unit{
    constructor(name, maxhealth, movement, attack, range, x, y, type, filepath, owner){
        this.name=name;
        this.id=assign_id();
        this.filepath=filepath;
        this.owner=owner;

        global_units.push(this);
        if(owner==="player"){this.owner_obj=player;}
        else if(owner==="bot1"){this.owner_obj=bot1;}
        else if(owner==="bot2"){this.owner_obj=bot2;}
        else{this.owner_obj=bot3;}
        this.owner_obj.units.push(this);

        this.type=type;    
        this.maxhealth=maxhealth;
        this.health=maxhealth;
        this.x=x;
        this.y=y;
        this.attack=attack;
        this.canattack="yes";
        this.range=range;
        this.movement=movement;
        this.maxmovement=movement;
        if(this.owner_obj.research.includes("31") && this.type==="worker"){this.movement+=1; this.maxmovement+=5;}
        if(this.owner_obj.research.includes("14") && this.type==="worker"){this.movement+=1; this.maxmovement+=5;}
        if(this.owner_obj.research.includes("22") && this.type==="melee"){this.maxhealth+=5; this.health+=5;}
    }
    render_unit(state){
        const existing=document.querySelector(`.u${this.id}`);
        if(existing){existing.remove();}
        const tile_parent = document.querySelector(`.tile[data-x="${this.x}"][data-y="${this.y}"]`);
        this.unit_render=document.createElement("img");
        this.unit_render.classList.add("unit");
        this.unit_render.classList.add(`u${this.id}`);
        this.unit_render.src=this.filepath;
        this.unit_render.style.width="128px";
        this.unit_render.style.height="128px";
        if(this.owner==="player"){this.unit_render.onclick=this.activate_unit.bind(this);}
        else{this.unit_render.onclick=this.get_attacked.bind(this);}
        if(state==="exhausted"){this.unit_render.style.filter="brightness(80%) opacity(80%)";}
        else if(state==="outofrange"){this.unit_render.style.filter="brightness(10%) opacity(100%)";}
        else{this.unit_render.style.filter="brightness(100%) opacity(100%)";}
        tile_parent.appendChild(this.unit_render);
    }
    check_for_opps(){
        bs_variable=false;
        global_units.forEach((unit => {
            if(unit.owner_obj!==this.owner_obj && ((Math.abs(this.x-unit.x)+Math.abs(this.y-unit.y)) <= this.range)){
                bs_variable=true;
            }
        }))
        if(!bs_variable){
            return "no";    
        }
        else{
            return "yes";
        }
    }
    check_if_exhausted(){
        if(this.movement<=0 && (this.canattack==="no" || this.check_for_opps()==="no")){this.render_unit("exhausted");}
        else{this.render_unit("normal");}
    }
    take_damage(damage){
        this.health-=damage;
        damage_text.innerText="-"+damage;
        damage_text_container.style.display="block";
        rename_this_variable = document.querySelector(`.tile[data-x="${this.x}"][data-y="${this.y}"]`);
        damage_text_container.style.top=(parseInt(rename_this_variable.style.top)+ 56)+"px";
        damage_text_container.style.left=parseInt(rename_this_variable.style.left)+"px";
        damage_text_container.style.filter="opacity(100%)";
        damage_text_animation_counter=0;
        setTimeout(damage_text_animation, 10);

        if(this.health<=0){
            //DEATH
            const existing=document.querySelector(`.u${this.id}`);
            if(existing){existing.remove();}
            global_units.splice(global_units.indexOf(this), 1);
            this.owner_obj.units.splice(this.owner_obj.units.indexOf(this), 1);
        }
    }
    deal_damage(damage, target_x, target_y){
        let target=get_unit_by_pos(target_x, target_y);
        target.take_damage(damage);
    }
    move_unit(dest_x, dest_y){
        let distance_gone = Math.abs(this.x-dest_x)+Math.abs(this.y-dest_y)
        if(get_unit_by_pos(dest_x, dest_y)===null){
            this.x=dest_x;
            this.y=dest_y;
            this.movement-=distance_gone;
            this.check_if_exhausted();
            this.activate_unit();
            if(this.type==="worker"){this.worker_buildcheck();}
        }  
    }
    worker_buildcheck(){
        if(this.type==="worker" && get_resource_tile_by_pos(this.x, this.y)!==null){
            const the_resources_in_question=get_resource_tile_by_pos(this.x, this.y);
            console.log(the_resources_in_question);
            if(the_resources_in_question.owner==="unoccupied"){
                the_resources_in_question.owner=this.owner;
                the_resources_in_question.tileimg.src="images/tiles/"+the_resources_in_question.resource+"_developed.png";
                the_resources_in_question.tileimg.style.border="2px solid";
                the_resources_in_question.tileimg.style.borderColor=this.owner_obj.color;
                this.take_damage(52);
            }
        }
    }
    update_unit_hotbar(){
        unit_chealth_text.innerText=this.health;
        unit_mhealth_text.innerText=this.maxhealth;
        unit_cmove_text.innerText=this.movement;
        unit_mmove_text.innerText=this.maxmovement;
        unit_name_text.innerText=this.name;
        unit_rattack_text.innerText=this.attack;
        unit_battack_text.innerText="";
        unit_move_text_cont.style.display="block";
        unit_attack_text_cont.style.display="block";
        if(this.owner_obj.research.includes("44")){unit_battack_text.innerText="+5";}
    }
    activate_unit(){
        const all_tiles=document.querySelectorAll(".tileimg");
        if(active_unit===this){
            all_tiles.forEach((tile => {
                tile.style.filter="brightness(100%)";
                tile.onclick=nothing;
                let change_the_name=get_resource_tile_by_pos(tile.getAttribute("data-x"), tile.getAttribute("data-y"));
                if(change_the_name !== null){
                    change_the_name.tileimg.onclick = change_the_name.update_u_hotbar.bind(change_the_name);
                }
            }))
            global_units.forEach((unit => {
                unit.check_if_exhausted();
            }))

            active_unit=null;
            hotbar.style.display="block";
            unit_hotbar.style.display="none";
        }
        else if(active_unit===null){
            active_unit=this;
            hotbar.style.display="none";
            unit_hotbar.style.display="flex";
            this.update_unit_hotbar();
            
            all_tiles.forEach((tile => {
                const tilex=parseInt(tile.getAttribute("data-x"));
                const tiley=parseInt(tile.getAttribute("data-y"));
                //distance checker
                //Math.abs(this.x-tilex)+Math.abs(this.y-tiley)
                if( ((Math.abs(this.x-tilex)+Math.abs(this.y-tiley))>this.movement) || ((tilex===2 || tilex===24) && (tiley===2 || tiley===24)) || (get_unit_by_pos(tilex, tiley)!==null)){
                    tile.style.filter="brightness(10%)";
                }
                else{
                    tile.onclick = () =>this.move_unit(tilex, tiley);
                }
                if(this.x===tilex && this.y===tiley){
                    tile.style.filter="brightness(100%)";
                }
                
            }))
            global_units.forEach((unit => {
                if((Math.abs(this.x-unit.x)+Math.abs(this.y-unit.y))>this.range || this.canattack==="no"){unit.render_unit("outofrange");}
                if(this.type==="ranged" && (Math.abs(this.x-unit.x)+Math.abs(this.y-unit.y))===1){unit.render_unit("outofrange");}
                if(this.owner_obj===unit.owner_obj){unit.render_unit("outofrange");}
                if(unit===this){unit.render_unit("no");}
            }))
        }
    }
    get_attacked(){
        //get fucking attacked
        if(active_unit===null){
            unit_hotbar.style.display="flex";
            hotbar.style.display="none";
            this.update_unit_hotbar();
        }
        else if(active_unit.type==="melee" && (Math.abs(this.x-active_unit.x)+Math.abs(this.y-active_unit.y) == 1) && active_unit.canattack==="yes"){
            this.take_damage(active_unit.attack);
            active_unit.canattack="no";
            active_unit.check_if_exhausted();
            active_unit.activate_unit();
        }
        else if(active_unit.type==="ranged" && (Math.abs(this.x-active_unit.x)+Math.abs(this.y-active_unit.y) !== 1) && (Math.abs(this.x-active_unit.x)+Math.abs(this.y-active_unit.y) <= active_unit.range)){
            this.take_damage(active_unit.attack);
            active_unit.canattack="no";
            active_unit.check_if_exhausted();
            active_unit.activate_unit();
        }

    }
}
function render_all_units(){
    global_units.forEach((unit => unit.check_if_exhausted()));
}
class Resource_tile{
    constructor(resource, x, y, owner, tileimg){
        this.resource=resource;
        this.x=x;
        this.y=y;
        this.owner=owner;
        this.tileimg=tileimg;
        this.health=25;
        this.maxhealth=25;
        this.tileimg.onclick=this.update_u_hotbar.bind(this);

        if(owner==="player"){this.owner_obj=player;}
        else if(owner==="bot1"){this.owner_obj=bot1;}
        else if(owner==="bot2"){this.owner_obj=bot2;}
        else{this.owner_obj=bot3;}
    }
    produce_resources(){
        switch(this.resource){
            case "food":
                break;
            case "mine":
                break;
            case "hazardite":
                break;
            case "oil":
                break;
            case "gems":
                break;
            case "aluminium":
                break;
        }
    }
    update_u_hotbar(){
        unit_hotbar.style.display="flex";
        hotbar.style.display="none";
        unit_chealth_text.innerText=this.health;
        unit_mhealth_text.innerText=this.maxhealth;
        unit_name_text.innerText=this.resource + " (" + this.owner + ")";
        unit_attack_text_cont.style.display="none";
        unit_move_text_cont.style.display="none";
    }
}

//this is for goofy easter egg
const d = new Date
let time = d.getTime();

/**GENERAL FUNCTIONS**/
function print(item){
    console.log(item);
    //chat is this shitty coding
}
function show_settings(){
    //code for goofy easter egg
    const e = new Date
    if ((time+178)==e.getTime()){settings.style.background="linear-gradient(#ff0000, #00ff00)";}
    else{settings.style.background="#44ee44";}
    //actual code for showing settings
    settings.style.display="block";
}
function unit_hotbar_close_do(){
    if(active_unit!==null){
        active_unit.activate_unit();
    }
    else{
        unit_hotbar.style.display="none";
        hotbar.style.display="flex";
    }
}
function open_hq(){
    if(active_unit===null){hq_menu.style.display="block";}
    else{hq_menu.style.display="none";}
}
function open_encycl(){
    encycl.style.display = "block";
    encycl_infobox_title.innerText="Click something to see information";
    encycl_infobox_image.src="images/backgrounds/black.jpg";
    encycl_infobox_text.innerText="Click something to see information";
}
function open_marketplace(){
    if(player.buildings.includes("Marketplace")){
        marketplace.style.display="block";
        if(player.buildings.includes("Shopping Center")){marketplace2.style.display="flex";}
        else{marketplace2.style.display="none";}
    }
    else{hq_popup("You need to build the Marketplace first")}
}
function open_research(){
    if(player.buildings.includes("University")){
        research.style.display="flex";
        if (player.buildings.includes("Research Facility")){
            research_row3.style.display="flex";
            research_row4.style.display="flex";
        }
        else{
            research_row3.style.display="none";
            research_row4.style.display="none";
        }
    }
    else{
        hq_popup("You need to build the University first")
    }
}
function move_hq_widget(){
    if(hq_widget_state===0){
        hq_widget_move_button.style.animation="hq_widget_opener_rise 0.5s forwards";
        hq_widget.style.animation="hq_widget_rise 0.5s forwards";
        hq_widget_move_button.innerText="DOWN";
        hq_widget_state=1;
    }
    else{
        hq_widget_move_button.style.animation="hq_widget_opener_lower 0.5s forwards";
        hq_widget.style.animation="hq_widget_lower 0.5s forwards";
        hq_widget_move_button.innerText="UP";
        hq_widget_state=0;
    }
}
function damage_text_animation(){
    if(damage_text_animation_counter===100){
        damage_text_container.style.display="none";
    }
    else{
        damage_text_animation_counter+=1;
        damage_text_container.style.filter="opacity("+(100-damage_text_animation_counter)+"%)";
        damage_text_container.style.top=(parseInt(rename_this_variable.style.top)+ (56-damage_text_animation_counter))+"px";
        setTimeout(damage_text_animation, 10);

    }
}
function update_resource_counters(){
    food_amount_label.innerText= player.food;
    ore_amount_label.innerText= player.ore;
    gems_amount_label.innerText= player.gems;
    oil_amount_label.innerText= player.oil;
    hazardite_amount_label.innerText= player.hazardite;
    aluminium_amount_label.innerText= player.aluminium;
    food_amount_label2.innerText= player.food;
    ore_amount_label2.innerText= player.ore;
    gems_amount_label2.innerText= player.gems;
    oil_amount_label2.innerText= player.oil;
    hazardite_amount_label2.innerText= player.hazardite;
    aluminium_amount_label2.innerText= player.aluminium;
    food_amount_label3.innerText= player.food;
    ore_amount_label3.innerText= player.ore;
    gems_amount_label3.innerText= player.gems;
    oil_amount_label3.innerText= player.oil;
    hazardite_amount_label3.innerText= player.hazardite;
    aluminium_amount_label3.innerText= player.aluminium;
}
function update_hq_healthbar(){
    player.hq_pcenthealth=(100/player.hq_maxhealth)*player.hq_health;
    hq_healthbar.style.width=player.hq_pcenthealth+"%";
    hq_health_current_text.innerText=player.hq_health;
    hq_health_max_text.innerText=player.hq_maxhealth;
    if(player.hq_pcenthealth>75){root.style.setProperty("--hq-healthbar-color", "#00ff00");}
    else if(player.hq_pcenthealth>50){root.style.setProperty("--hq-healthbar-color", "#99ff00");}
    else if(player.hq_pcenthealth>25){root.style.setProperty("--hq-healthbar-color", "#ffff00");}
    else{root.style.setProperty("--hq-healthbar-color", "#ff9900");}
}
function open_encycl_entry(entry){
    switch(entry){
        case 1:
            encycl_infobox_data=["Labourer", "images/humans/labourer.png", "A builder unit. When it ends its turn on a resource it makes a mine for you."];
            break;
        case 2:
            encycl_infobox_data=["Spearman", "images/humans/spearman.png", "Weak melee unit. Uses sharp pointy."];
            break;
        case 3:
            encycl_infobox_data=["Warrior", "images/humans/warrior.png", "Melee unit. Likes sunshine and beef."];
            break;
        case 4:
            encycl_infobox_data=["Horseman", "images/humans/horseman.png", "Fast melee unit. Neigh neigh"];
            break;
        case 5:
            encycl_infobox_data=["Archer", "images/humans/archer.png", "Can shoot arrows (maybe)"];
            break;
        case 6:
            encycl_infobox_data=["Musketeer", "images/humans/musketeer.png", "Own a musket for home defence. Can shoot and stab"];
            break;
        case 7:
            encycl_infobox_data=["Gun Car", "images/humans/gun_car.png", "Vroom pyew"];
            break;
        case 8:
            encycl_infobox_data=["Juggernaut", "images/humans/juggernaut.png", "Real tough guy"];
            break;
        case 9:
            encycl_infobox_data=["Tank", "images/humans/tank.png", "Slow and big but deadly. Not historically accurate."];
            break;
        case 10:
            encycl_infobox_data=["Fusilli", "images/pastans/fusilli.png", "A builder unit. When it ends its turn on a resource it makes a mine for you."];
            break;
        case 11:
            encycl_infobox_data=["Penne", "images/pastans/penne.png", "Shoots lasers from its hand. Weak but cheap"];
            break;
        case 12:
            encycl_infobox_data=["Rigatoni", "images/pastans/rigatoni.png", "A bombastic stabby man."];
            break;
        case 13:
            encycl_infobox_data=["Lasagna", "images/pastans/lasagna.png", "Goes nice close to its enemies and then BLEHHH"];
            break;
        case 14:
            encycl_infobox_data=["Orechiette", "images/pastans/orechiette.png", "Ranged unit with many lasers."];
            break;
        case 15:
            encycl_infobox_data=["Spaghetti", "images/pastans/spaghetti.png", "Grandma's cooking leads to psychic awakening"];
            break;
        case 16:
            encycl_infobox_data=["Tagliatelle", "images/pastans/tagliatelle.png", "Little gremlin big gun"];
            break;
        case 17:
            encycl_infobox_data=["Farfalle", "images/pastans/farfalle.png", "It's ya boy Farfie who attacks twice. DJ Farfie OUT"];
            break;
        case 18:
            encycl_infobox_data=["Macaroni", "images/pastans/macaroni.png", "Like El Macho but so macho he doesn't die, melee"];
            break;
        case 19:
            encycl_infobox_data=["Builder", "images/scrapbots/builder.png", "A builder unit. When it ends its turn on a resource it makes a mine for you."];
            break;
        case 20:
            encycl_infobox_data=["Fodder", "images/scrapbots/fodder.png", "Melee. Lacks the intelligence to care about being fodder"];
            break;
        case 21:
            encycl_infobox_data=["Fighter", "images/scrapbots/fighter.png", "Punchy punchy boi"];
            break;
        case 22:
            encycl_infobox_data=["Sprinter", "images/scrapbots/sprinter.png", "Melee that shockingly can't run because no legs."];
            break;
        case 23:
            encycl_infobox_data=["Shooter", "images/scrapbots/shooter.png", "Most self-explanatory unit"];
            break;
        case 24:
            encycl_infobox_data=["Skirmisher", "images/scrapbots/skirmisher.png", "Forgive me for naming it skirmisher even though it's not one"];
            break;
        case 25:
            encycl_infobox_data=["Pursuer", "images/scrapbots/pursuer.png", "Be you here or be you there I shall reduce you to thin air"];
            break;
        case 26:
            encycl_infobox_data=["Destroyer", "images/scrapbots/destroyer.png", "Unstoppable melee that will touch your opponents"];
            break;
        case 27:
            encycl_infobox_data=["Annihilator", "images/scrapbots/annihilator.png", "Mike, why is the sun flying towards us?"];
            break;
        case 28:
            encycl_infobox_data=["Gnome", "images/yox_empire/gnome.png", "A builder unit. When it ends its turn on a resource it makes a mine for you."];
            break;
        case 29:
            encycl_infobox_data=["Kobold", "images/yox_empire/kobold.png", "Melee unit that somehow manages to punch"];
            break;
        case 30:
            encycl_infobox_data=["Hoplite", "images/yox_empire/hoplite.png", "Clickity click-clack, a discombobulating attack"];
            break;
        case 31:
            encycl_infobox_data=["Strider", "images/yox_empire/strider.png", "Fast and melee"];
            break;
        case 32:
            encycl_infobox_data=["Slingslime", "images/yox_empire/slingslime.png", "Shoots rocks cutely"];
            break;
        case 33:
            encycl_infobox_data=["Lich", "images/yox_empire/lich.png", "I cast big fat laser"];
            break;
        case 34:
            encycl_infobox_data=["Cerberus", "images/yox_empire/cerberus.png", "Fast, shoots you, punches you"];
            break;
        case 35:
            encycl_infobox_data=["Leviathan", "images/yox_empire/leviathan.png", "Eats kobolds for breakfast"];
            break;
        case 36:
            encycl_infobox_data=["Reaper", "images/yox_empire/reaper.png", "Deadly elite unit that will probably kill you"];
            break;
        case 37:
            encycl_infobox_data=["Farm", "images/icons/food.png", "Gives you 5 more food each turn"];
            break;
        case 38:
            encycl_infobox_data=["Quarry", "images/icons/ore.png", "Gives you 5 more ore each turn"];
            break;
        case 39:
            encycl_infobox_data=["Marketplace", "images/icons/marketplace.png", "Allows for you to trade basic resources"];
            break;
        case 40:
            encycl_infobox_data=["Walls", "images/icons/wall.png", "City health +50"];
            break;
        case 41:
            encycl_infobox_data=["Mill", "images/icons/food.png", "Gives you 5 more food each turn"];
            break;
        case 42:
            encycl_infobox_data=["Mineshafts", "images/icons/ore.png", "Gives you 5 more ore each turn"];
            break;
        case 43:
            encycl_infobox_data=["Fortifications", "images/icons/fortifications.png", "City health +50"];
            break;
        case 44:
            encycl_infobox_data=["University", "images/icons/science.png", "Unlock research"];
            break;
        case 45:
            encycl_infobox_data=["Shopping Center", "images/icons/marketplace.png", "Allows you to trade premium resources"];
            break;
        case 46:
            encycl_infobox_data=["Hospital", "images/icons/hospital.png", "Units next to your city will heal at the end of your turn"];
            break;
        case 47:
            encycl_infobox_data=["Research Center", "images/icons/science.png", "Unlock more research"];
            break;
        case 48:
            encycl_infobox_data=["Barracks", "images/humans/warrior.png", "Allows you to recuit Warriors"];
            break;
        case 49:
            encycl_infobox_data=["Stables", "images/humans/horseman.png", "Allows you to recuit Horsemen"];
            break;
        case 50:
            encycl_infobox_data=["Archery Range", "images/humans/archer.png", "Allows you to recuit Archers"];
            break;
        case 51:
            encycl_infobox_data=["Shooting Range", "images/humans/musketeer.png", "Allows you to recuit Musketeers. Not to be confused with Shooting Range"];
            break;
        case 52:
            encycl_infobox_data=["Garage", "images/humans/gun_car.png", "Allows you to recuit Gun Cars, has cool doors"];
            break;
        case 53:
            encycl_infobox_data=["Elite Bootcamp", "images/humans/juggernaut.png", "Allows you to recuit Juggernauts, includes one (1) tree"];
            break;
        case 54:
            encycl_infobox_data=["Tank Park", "images/humans/tank.png", "Allows you to recuit Tanks, includes two (2) trees"];
            break;
        case 55:
            encycl_infobox_data=["Spoon", "images/pastans/rigatoni.png", "Allows you to recuit Rigatonines"];
            break;
        case 56:
            encycl_infobox_data=["Baking Tray", "images/pastans/lasagna.png", "Allows you to recuit Lasagnae"];
            break;
        case 57:
            encycl_infobox_data=["Bowl", "images/pastans/orechiette.png", "Allows you to recuit Orechietti"];
            break;
        case 58:
            encycl_infobox_data=["Sieve", "images/pastans/spaghetti.png", "Allows you to recuit Spaghettis"];
            break;
        case 59:
            encycl_infobox_data=["Grater", "images/pastans/tagliatelle.png", "Allows you to recuit Tagliatellae"];
            break;
        case 60:
            encycl_infobox_data=["Plate", "images/pastans/farfalle.png", "Allows you to recuit Farfallae"];
            break;
        case 61:
            encycl_infobox_data=["Pot", "images/pastans/macaroni.png", "Allows you to recuit Macarone"];
            break;
        case 62:
            encycl_infobox_data=["Factory", "images/scrapbots/fighter.png", "Allows you to recuit Fighters"];
            break;
        case 63:
            encycl_infobox_data=["Racetrack", "images/scrapbots/sprinter.png", "Allows you to recuit Sprinters, is the most boring circle track possible"];
            break;
        case 64:
            encycl_infobox_data=["Shooting Range", "images/scrapbots/shooter.png", "Allows you to recuit Shooters. Not to be confused with Shooting Range"];
            break;
        case 65:
            encycl_infobox_data=["Spider Bunker", "images/scrapbots/skirmisher.png", "Allows you to recuit Skirmishers, it's not a cave."];
            break;
        case 66:
            encycl_infobox_data=["Airfield", "images/scrapbots/pursuer.png", "Allows you to recuit Pursuers"];
            break;
        case 67:
            encycl_infobox_data=["Assembly Scaffolds", "images/scrapbots/destroyer.png", "Allows you to recuit Destroyers. Looks like a spaceship launch pad"];
            break;
        case 68:
            encycl_infobox_data=["Supershell", "images/scrapbots/annihilator.png", "Allows you to recuit Annihilators, like a dyson sphere but it builds the sun"];
            break;
        case 69:
            encycl_infobox_data=["Graveyard", "images/yox_empire/hoplite.png", "Allows you to recuit Hoplites, has spiky trees"];
            break;
        case 70:
            encycl_infobox_data=["Silent Trees", "images/yox_empire/strider.png", "Allows you to recuit Striders"];
            break;
        case 71:
            encycl_infobox_data=["Damp Cave", "images/yox_empire/slingslime.png", "Allows you to recuit Slingslimes. Hat shop included"];
            break;
        case 72:
            encycl_infobox_data=["Forbidden Library", "images/yox_empire/lich.png", "Allows you to recuit Liches"];
            break;
        case 73:
            encycl_infobox_data=["Hell's Kennel", "images/yox_empire/cerberus.png", "Allows you to recuit Cerberuses"];
            break;
        case 74:
            encycl_infobox_data=["Big Pit", "images/yox_empire/leviathan.png", "Allows you to recuit Leviathans, it's very big"];
            break;
        case 75:
            encycl_infobox_data=["Tower of Souls", "images/yox_empire/reaper.png", "Allows you to recuit Reapers, has cool floating wisps"];
            break;
    }
    encycl_infobox_title.innerText=encycl_infobox_data[0];
    encycl_infobox_image.src=encycl_infobox_data[1];
    encycl_infobox_text.innerText=encycl_infobox_data[2];

}
function hq_popup(text){
    hq_popup_div.style.display="block";
    hq_popup_text.innerText=text;
}
function do_trade(tradeid){
    switch (tradeid){
        case 1:
            if(player.ore>=otf_price){
                player.ore-=otf_price;
                player.food+=10;
            }
            break;
        case 2:
            if(player.food>=fto_price){
                player.food-=fto_price;
                player.ore+=10;
            }
            break;
        case 3:
            if(player.food>=premiums_price){
                player.food-=premiums_price;
                player.oil+=1;
            }
            break;
        case 4:
            if(player.food>=premiums_price){
                player.food-=premiums_price;
                player.hazardite+=1;
            }
            break;
        case 5:
            if(player.ore>=premiums_price){
                player.ore-=premiums_price;
                player.gems+=1;
            }
            break;
        case 6:
            if(player.ore>=premiums_price){
                player.ore-=premiums_price;
                player.aluminium+=1;
            }
            break;
        case 7:
            if(player.oil>=1){
                player.oil-=1;
                player.food+=premiums_yield;
            }
            break;
        case 8:
            if(player.hazardite>=1){
                player.hazardite-=1;
                player.food+=premiums_yield;
            }
            break;
        case 9:
            if(player.gems>=1){
                player.gems-=1;
                player.ore+=premiums_yield;
            }
            break;
        case 10:
            if(player.aluminium>=1){
                player.aluminium-=1;
                player.ore+=premiums_yield;
            }
            break;
    }
    update_resource_counters();
}
function buy_building_do(building_number){
    switch(building_number){
        case 1:
            if(player.buildings.includes("Farm")){hq_popup("You already built this");}
            else if (player.food<5 || player.ore<5){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Farm");
                player.food=player.food-5;
                player.ore=player.ore-5;
                build1_button.innerText = "Built";
                player.food_gain+=5;
            }
            break;
        case 2:
            if(player.buildings.includes("Quarry")){hq_popup("You already built this");}
            else if(player.food<5 || player.ore<5){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Quarry");
                player.food=player.food-5;
                player.ore=player.ore-5;
                player.ore_gain+=5;
                build2_button.innerText = "Built";
            }
            break;
        case 3:
            if(player.faction==="humans"){building_inq="Barracks";}
            else if(player.faction==="pastans"){building_inq="Spoon";}
            else if(player.faction==="scrapbots"){building_inq="Factory";}
            else{building_inq="Graveyard";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-three-unlocked","#ffffff");
                player.food=player.food-10;
                player.ore=player.ore-10;
                build3_button.innerText = "Built";
            }
            break;
        case 4:
            if(player.buildings.includes("Marketplace")){hq_popup("You already built this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Marketplace");
                player.food=player.food-10;
                player.ore=player.ore-10;
                build4_button.innerText = "Built";
                root.style.setProperty("--hq-market-unlocked", "#000000");
                root.style.setProperty("--shopping-center-unlocked", "#ffffff");
            }
            break;
        case 5:
            if(player.buildings.includes("Walls")){hq_popup("You already built this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Walls");
                player.food=player.food-10;
                player.ore=player.ore-10;
                build5_button.innerText="Built";
                player.hq_health=player.hq_health+100;
                player.hq_maxhealth=player.hq_maxhealth+100;
            }
            break; 
        case 6:
            if(player.faction==="humans"){building_inq="Stables";}
            else if(player.faction==="pastans"){building_inq="Baking Tray";}
            else if(player.faction==="scrapbots"){building_inq="Racetrack";}
            else{building_inq="Silent Trees";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-four-unlocked","#ffffff");
                player.food=player.food-20;
                player.ore=player.ore-20;
                build6_button.innerText = "Built";
            }
            break;
        case 7:
            if(player.faction==="humans"){building_inq="Archery Range";}
            else if(player.faction==="pastans"){building_inq="Bowl";}
            else if(player.faction==="scrapbots"){building_inq="Shooting Range";}
            else{building_inq="Damp Cave";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-five-unlocked","#ffffff");
                player.food=player.food-20;
                player.ore=player.ore-20;
                build7_button.innerText = "Built";
            }
            break;
        case 8: 
            if(player.buildings.includes("Mill")){hq_popup("You already built this");}
            else if (player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Mill");
                player.food=player.food-20;
                player.ore=player.ore-20;
                player.food_gain+=5;
                build8_button.innerText = "Built";
            }
            break;
        case 9:
            if(player.buildings.includes("Mineshafts")){hq_popup("You already built this");}
            else if (player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Mineshafts");
                player.food=player.food-20;
                player.ore=player.ore-20;
                player.ore_gain+=5;
                build9_button.innerText = "Built";
            }
            break;
        case 10:
            if(player.buildings.includes("Fortifications")){hq_popup("You already built this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("Fortifications");
                player.food=player.food-20;
                player.ore=player.ore-20;
                build10_button.innerText="Built";
                player.hq_health=player.hq_health+50;
                player.hq_maxhealth=player.hq_maxhealth+50;
            }
            break; 
        case 11:
            if(player.faction==="humans"){building_inq="Shooting Range";}
            else if(player.faction==="pastans"){building_inq="Sieve";}
            else if(player.faction==="scrapbots"){building_inq="Spider Bunker";}
            else{building_inq="Forbidden Library";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<25 || player.ore<25){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-six-unlocked","#ffffff");
                player.food=player.food-25;
                player.ore=player.ore-25;
                build11_button.innerText = "Built";
            }
            break;
        case 12:
            if(player.buildings.includes("University")){hq_popup("You already built this");}
            else if(player.food<30 || player.ore<30){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push("University");
                player.food=player.food-30;
                player.ore=player.ore-30;
                build12_button.innerText="Built";
                root.style.setProperty("--hq-university-unlocked", "#000000");
                root.style.setProperty("--research-facility-unlocked", "#ffffff");
            }
            break;
        case 13:
            if(player.buildings.includes("Shopping Center")){hq_popup("You already built this");}
            else if(!(player.buildings.includes("Marketplace"))){hq_popup("Build the Marketplace first");}
            else if(player.food<30 || player.ore<30){hq_popup("You don't have enough resources");}
            else{
                player.food-=30;
                player.ore-=30;
                player.buildings.push("Shopping Center");
                build13_button.innerText="Built";
            }
            break;
        case 14:
            if(player.buildings.includes("Hospital")){hq_popup("You already built this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.food-=20;
                player.ore-=20;
                player.buildings.push("Hospital");
                build14_button.innerText="Built";
            }
            break;
        case 15:
            if(player.faction==="humans"){building_inq="Garage";}
            else if(player.faction==="pastans"){building_inq="Grater";}
            else if(player.faction==="scrapbots"){building_inq="Airfield";}
            else{building_inq="Hell's Kennel";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<35 || player.ore<35){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-seven-unlocked","#ffffff");
                player.food=player.food-35;
                player.ore=player.ore-35;
                build15_button.innerText = "Built";
            }
            break;
        case 16:
            if(player.faction==="humans"){building_inq="Elite Bootcamp";}
            else if(player.faction==="pastans"){building_inq="Plate";}
            else if(player.faction==="scrapbots"){building_inq="Assembly Scaffolds";}
            else{building_inq="Big Pit";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if((player.food<40 || player.ore<30) && (building_inq==="Elite Bootcamp" || building_inq==="Big Pit")){hq_popup("You don't have enough resources");}
            else if((player.food<30 || player.ore<40) && (building_inq==="Plate" || building_inq==="Assembly Scaffolds")){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-eight-unlocked","#ffffff");
                if(building_inq==="Elite Bootcamp" || building_inq==="Big Pit"){
                    player.food-=40;
                    player.ore-=30;
                }
                else{
                    player.food-=30;
                    player.ore-=40;
                }
                build16_button.innerText = "Built";
            }
            break;
        case 17:
            if(player.buildings.includes("Research Facility")){hq_popup("You already built this");}
            else if(player.food<40 || player.ore<40){hq_popup("You don't have enough resources");}
            else if(player.buildings.includes("University")){
                player.buildings.push("Research Facility");
                player.food=player.food-40;
                player.ore=player.ore-40;
                build17_button.innerText="Built";
            }
            else{hq_popup("Build the University first");}
            break;
        case 18:
            if(player.faction==="humans"){building_inq="Tank Park";}
            else if(player.faction==="pastans"){building_inq="Pot";}
            else if(player.faction==="scrapbots"){building_inq="Supershell";}
            else{building_inq="Tower of Souls";}
            if(player.buildings.includes(building_inq)){hq_popup("You already built this");}
            else if(player.food<45 || player.ore<55){hq_popup("You don't have enough resources");}
            else{
                player.buildings.push(building_inq);
                root.style.setProperty("--unit-nine-unlocked","#ffffff");
                player.food=player.food-45;
                player.ore=player.ore-55;
                build18_button.innerText = "Built";
            }
            break;
    }
    update_hq_healthbar();
    update_resource_counters();
}
function buy_research_do(research_id){
    switch(research_id){
        case 1:
            if (player.research.includes("11")){hq_popup("You already researched this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.food-=10;
                player.ore-=10;
                player.research.push("11");
                player.food_gain+=5;
                root.style.setProperty("--r1r1-purchased", "#00ff00");
                r1r1.innerText="Researched";
            }
            break;
        case 2:
            if (player.research.includes("12")){hq_popup("You already researched this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.food-=10;
                player.ore-=10;
                player.ore_gain+=5;
                player.research.push("12");
                root.style.setProperty("--r1r2-purchased", "#00ff00");
                r1r2.innerText="Researched";
            }
            break;
        case 3:
            if (player.research.includes("13")){hq_popup("You already researched this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.food-=10;
                player.ore-=10;
                player.research.push("13");
                root.style.setProperty("--r1r3-purchased", "#00ff00");
                player.hq_maxhealth+=25;
                player.hq_health+=25;
                r1r3.innerText="Researched";
            }
            break;
        case 4:
            if (player.research.includes("14")){hq_popup("You already researched this");}
            else if(player.food<10 || player.ore<10){hq_popup("You don't have enough resources");}
            else{
                player.food-=10;
                player.ore-=10;
                player.research.push("14");
                root.style.setProperty("--r1r4-purchased", "#00ff00");
                r1r4.innerText="Researched";
                player.units.forEach((unit) => {if(unit.type==="worker"){unit.movement+=1; unit.maxmovement+=1;}})
            }
            break;
        case 5:
            if (player.research.includes("21")){hq_popup("You already researched this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.food-=20;
                player.ore-=20;
                player.research.push("21");
                root.style.setProperty("--r2r1-purchased", "#00ff00");
                r2r1.innerText="Researched";
            }
            break;
        case 6:
            if (player.research.includes("22")){hq_popup("You already researched this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.food-=20;
                player.ore-=20;
                player.research.push("22");
                root.style.setProperty("--r2r2-purchased", "#00ff00");
                r2r2.innerText="Researched";
                player.units.forEach((unit) => {if(unit.type==="melee"){unit.health+=5; unit.maxhealth+=5;}})
            }
            break;
        case 7:
            if (player.research.includes("23")){hq_popup("You already researched this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.food-=20;
                player.ore-=20;
                player.research.push("23");
                root.style.setProperty("--r2r3-purchased", "#00ff00");
                r2r3.innerText="Researched";
                r3r2.innerText="We work to earn the right to work - 20 food 20 ore - 1 free worker every 2 turns";
                r3r4.innerText="Mercantilism - 20 food 20 ore - better market rates for premium resources";
            }
            break;
        case 8:
            if (player.research.includes("24")){hq_popup("You already researched this");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.food-=20;
                player.ore-=20;
                player.research.push("24");
                root.style.setProperty("--r2r4-purchased", "#00ff00");
                r2r4.innerText="Researched";
                r4r3.innerText="Impenetrable Walls - 10 food 40 ore - +50 city health";
                r4r4.innerText="DESTROY - 30 food 30 ore - +5 damage to all melee units";
            }
            break;
        case 9:
            if (player.research.includes("31")){hq_popup("You already researched this");}
            else if(player.research.includes("33") || player.research.includes("34")){hq_popup("how")}
            else if(player.gems<1){hq_popup("You don't have enough resources");}
            else{
                player.gems-=1;
                player.research.push("31");
                root.style.setProperty("--r3r1-purchased", "#00ff00");
                r3r1.innerText="Researched";
                r3r3.style.display="none";
                r3r4.style.display="none";
                research_row3.style.background="#ff0000";
                player.units.forEach((unit) => {if(unit.type==="worker"){unit.movement+=1; unit.maxmovement+=1;}})
            }
            break;
        case 10:
            if (player.research.includes("32")){hq_popup("You already researched this");}
            else if(!(player.research.includes("23"))){hq_popup("Locked");}
            else if(player.research.includes("33") || player.research.includes("34")){hq_popup("how");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.ore-=20;
                player.food-=20;
                player.research.push("32");
                root.style.setProperty("--r3r2-purchased", "#00ff00");
                r3r2.innerText="Researched";
                r3r3.style.display="none";
                r3r4.style.display="none";
                research_row3.style.background="#ff0000";
                research_32_status=2;
                if(player.faction==="humans"){unit1_button.innerText="Labourer - FREE";}
                else if(player.faction==="pastans"){unit1_button.innerText="Fusilli - FREE";}
                else if(player.faction==="scrapbots"){unit1_button.innerText="Builder - FREE";}
                else {unit1_button.innerText="Gnome - FREE";}
                
            }
            break;
        case 11:
            if (player.research.includes("33")){hq_popup("You already researched this");}
            else if(player.research.includes("31") || player.research.includes("32")){hq_popup("how")}
            else if(player.gems<1 || player.oil<1 || player.hazardite<1 || player.aluminium<1){hq_popup("You don't have enough resources");}
            else{
                player.gems-=1;
                player.hazardite-=1;
                player.oil-=1;
                player.aluminium-=1;
                fto_price=12;
                otf_price=12;
                fto_price_label.innerText="12";
                otf_price_label.innerText="12";
                player.research.push("33");
                root.style.setProperty("--r3r3-purchased", "#00ff00");
                r3r3.innerText="Researched";
                r3r1.style.display="none";
                r3r2.style.display="none";
                research_row3.style.background="#0000ff";
            }
            break;
        case 12:
            if (player.research.includes("34")){hq_popup("You already researched this");}
            else if(!(player.research.includes("23"))){hq_popup("Locked");}
            else if(player.research.includes("31") || player.research.includes("32")){hq_popup("how");}
            else if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
            else{
                player.ore-=20;
                player.food-=20;
                player.research.push("34");
                root.style.setProperty("--r3r4-purchased", "#00ff00");
                r3r4.innerText="Researched";
                r3r1.style.display="none";
                r3r2.style.display="none";
                research_row3.style.background="#0000ff";
                premiums_price=12;
                premiums_yield=12;
                fth_price_label.innerText=12;
                fti_price_label.innerText=12;
                ota_price_label.innerText=12;
                otg_price_label.innerText=12;
                gto_yield_label.innerText=12;
                ato_yield_label.innerText=12;
                htf_yield_label.innerText=12;
                itf_yield_label.innerText=12;
            }
            break;
        case 13:
            if (player.research.includes("41")){hq_popup("You already researched this");}
            else if(player.food<25 || player.ore<25){hq_popup("You don't have enough resources");}
            else{
                player.ore-=25;
                player.food-=25;
                player.food_gain+=5;
                player.research.push("41");
                root.style.setProperty("--r4r1-purchased", "#00ff00");
                r4r1.innerText="Researched";
            }
            break;
        case 14:
            if (player.research.includes("42")){hq_popup("You already researched this");}
            else if(player.food<25 || player.ore<25){hq_popup("You don't have enough resources");}
            else{
                player.ore-=25;
                player.food-=25;
                player.ore_gain+=5;
                player.research.push("42");
                root.style.setProperty("--r4r2-purchased", "#00ff00");
                r4r2.innerText="Researched";
            }
            break;
        case 15:
            if (player.research.includes("43")){hq_popup("You already researched this");}
            else if(!(player.research.includes("24"))){hq_popup("Locked");}
            else if(player.food<10 || player.ore<40){hq_popup("You don't have enough resources");}
            else{
                player.ore-=40;
                player.food-=10;
                player.research.push("43");
                root.style.setProperty("--r4r3-purchased", "#00ff00");
                player.hq_health+=50;
                player.hq_maxhealth+=50;
                r4r3.innerText="Researched";
            }
            break;
        case 16:
            if (player.research.includes("44")){hq_popup("You already researched this");}
            else if(!(player.research.includes("24"))){hq_popup("Locked");}
            else if(player.food<30 || player.ore<30){hq_popup("You don't have enough resources");}
            else{
                player.ore-=30;
                player.food-=30;
                player.research.push("44");
                root.style.setProperty("--r4r4-purchased", "#00ff00");
                r4r4.innerText="Researched";
            }
            break;
    }
    update_hq_healthbar();
    update_resource_counters();
}
function buy_unit_do(unit_number){
    //this function is terribly made, I know. for now I just want this game to work
    if(FESBP()===null){hq_popup("No space around HQ")}
    else{
        switch(player.faction){
            case "humans":
                switch(unit_number){
                    case 1:
                        if(player.food<10 && research_32_status!==2){hq_popup("You don't have enough resources");}
                        else{
                            if(research_32_status!==2){player.food-=10;}
                            else{research_32_status=0;}
                            let pipi = new Unit("Labourer", 10, 2, 0, 1, FESBP()[0], FESBP()[1], "worker", "images/humans/labourer.png", "player");
                            pipi.render_unit("no");
                            unit1_button.innerText="Purchased!";
                            unit1_button.onclick=nothing;
                            setTimeout(() => {
                                unit1_button.innerText="Labourer - 10 food";
                                unit1_button.onclick = () => buy_unit_do(1);
                            }, 400)
                            //    constructor(name, maxhealth, movement, attack, range, x, y, type, filepath, owner){
                        }
                        break;
                    case 2:
                        if(player.food<10 || player.ore<5){hq_popup("You don't have enough resources");}
                        else{
                            player.food-=10;
                            player.ore-=5;
                            let pipi = new Unit("Spearman", 10, 2, 5, 1, FESBP()[0], FESBP()[1], "melee", "images/humans/spearman.png", "player");
                            pipi.render_unit("no");
                            unit2_button.innerText="Purchased!";
                            unit2_button.onclick=nothing;
                            setTimeout(() => {
                                unit2_button.innerText="Spearman - 10 food, 5 ore";
                                unit2_button.onclick = () => buy_unit_do(2);
                            }, 400)
                        }
                        break;
                    case 3:
                        if(player.food<20 || player.ore<10){hq_popup("You don't have enough resources");}
                        else if(!player.buildings.includes("Barracks")){hq_popup("Build the Barracks to recruit Warriors");}
                        else{
                            player.food-=20;
                            player.ore-=10;
                            let pipi = new Unit("Warrior", 20, 2, 7, 1, FESBP()[0], FESBP()[1], "melee", "images/humans/warrior.png", "player");
                            pipi.render_unit("no");
                            unit3_button.innerText="Purchased!";
                            unit3_button.onclick=nothing;
                            setTimeout(() => {
                                unit3_button.innerText="Warrior - 20 food, 10 ore";
                                unit3_button.onclick = () => buy_unit_do(3);
                            }, 400)
                        }
                        break;
                    case 4:
                        if(player.food<20 || player.ore<10){hq_popup("You don't have enough resources");}
                        else if(!player.buildings.includes("Stables")){hq_popup("Build the Stables to recruit Horsemen");}
                        else{
                            player.food-=20;
                            player.ore-=10;
                            let pipi = new Unit("Horseman", 15, 4, 5, 1, FESBP()[0], FESBP()[1], "melee", "images/humans/horseman.png", "player");
                            pipi.render_unit("no");
                            unit4_button.innerText="Purchased!";
                            unit4_button.onclick=nothing;
                            setTimeout(() => {
                                unit4_button.innerText="Horseman - 20 food, 10 ore";
                                unit4_button.onclick = () => buy_unit_do(4);
                            }, 400)
                        }
                        break;
                    case 5:
                        if(player.food<10 || player.ore<15){hq_popup("You don't have enough resources");}
                        else if(!player.buildings.includes("Archery Range")){hq_popup("Build the Archery Range to recruit Archers");}
                        else{
                            player.food-=10;
                            player.ore-=15;
                            let pipi = new Unit("Archer", 10, 2, 5, 2, FESBP()[0], FESBP()[1], "ranged", "images/humans/archer.png", "player");
                            pipi.render_unit("no");
                            unit5_button.innerText="Purchased!";
                            unit5_button.onclick=nothing;
                            setTimeout(() => {
                                unit5_button.innerText="Archer - 10 food, 15 ore";
                                unit5_button.onclick = () => buy_unit_do(5);
                            }, 400)
                        }
                        break;
                    case 6:
                        if(player.food<20 || player.ore<20){hq_popup("You don't have enough resources");}
                        else if(!player.buildings.includes("Shooting Range")){hq_popup("Build the Shooting Range to recruit Musketeers");}
                        else{
                            player.food-=20;
                            player.ore-=20;
                            let pipi = new Unit("Musketeer", 20, 2, 7, 2, FESBP()[0], FESBP()[1], "skirmisher", "images/humans/musketman.png", "player");
                            pipi.render_unit("no");
                            unit6_button.innerText="Purchased!";
                            unit6_button.onclick=nothing;
                            setTimeout(() => {
                                unit6_button.innerText="Musketeer - 20 food, 20 ore";
                                unit6_button.onclick = () => buy_unit_do(6);
                            }, 400)
                        }
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;    
                }
                break;
            case "pastans":
                switch(unit_number){
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;    
                }
                break;
            case "scrapbots":
                switch(unit_number){
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;    
                }
                break;
            case "yox_empire":
                switch(unit_number){
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;    
                }
                break;
        }
    }
    update_resource_counters();
}
function nothing(){
    print("Have a nice day!")
}
//GAME STARTING FUNCTIONS 
function load_assets(){
    start_menu.style.display="none";
    settings.style.display="none";
    help.style.display="none";
    game_div.style.display="block";
    loader_cover.style.display="block";
    loader.style.display="block";
    linknum = 0;
    function next_image(){
        loader.src = "images/"+loading_images[linknum];
        linknum++;
        if(linknum < loading_images.length){setTimeout(next_image, 100);    }
        else{
            loader_cover.style.display="none";
            loader.style.display="none";
            root.style.setProperty("--back-image", "url(images/backgrounds/black.jpg)");
            choose_faction();
        }
    }
    next_image();
}
function choose_faction(){
    faction_choose.style.display="block";
    choose_yox_empire.onclick = function(){
        faction_choose.style.display="none";
        player.faction = "yox_empire";
        player.color="#6200ff";
        root.style.setProperty("--player-color-pale", "#9264ee");
        root.style.setProperty("--player-color-light", "#9966ff");
        root.style.setProperty("--player-color-dark", "#310080");
        root.style.setProperty("--player-color", "#6200ff");
        generate_map();
    }
    choose_humans.onclick = function(){
        faction_choose.style.display="none";
        player.faction = "humans";
        player.color="#0fc9fc";
        root.style.setProperty("--player-color-pale", "#66ccee");
        root.style.setProperty("--player-color-light", "#77ddff");
        root.style.setProperty("--player-color-dark", "#0986a9");
        root.style.setProperty("--player-color", "#0fc9fc");
        generate_map();
    }
    choose_pastans.onclick = function(){
        faction_choose.style.display="none";
        player.faction = "pastans";
        player.color="#00ff6a";
        root.style.setProperty("--player-color-pale", "#55eeaa");
        root.style.setProperty("--player-color-light", "#66ffbb");
        root.style.setProperty("--player-color-dark", "#00aa47");
        root.style.setProperty("--player-color", "#00ff6a");
        generate_map();
    }
    choose_scrapbots.onclick = function(){
        faction_choose.style.display="none";
        player.faction = "scrapbots";
        player.color="#ff8000";
        root.style.setProperty("--player-color-pale", "#ee9955");     
        root.style.setProperty("--player-color-light", "#ffaa66");
        root.style.setProperty("--player-color-dark", "#ad5a06");
        root.style.setProperty("--player-color", "#ff8000");
        generate_map();
    }
}
function generate_map(){
    //HQ
    if(player.faction==="humans"){hq_naming_list=["Labourer - 10 food", "Spearman - 10 food, 5 ore", "Warrior - 20 food, 10 ore", "Horseman - 20 food, 10 ore", "Archer - 10 food, 15 ore", "Musketeer - 20 food, 20 ore", "Gun car - 15 food, 30 ore, 1 aluminium", "Juggernaut - 30 food, 30 ore, 1 hazardite", "Tank - 25 food, 50 ore, 1 oil, 1 gem", "Barracks - 10 food, 10 ore", "Stables - 20 food, 20 ore", "Archery Range - 20 food, 20 ore", "Shooting Range - 25 food, 25 ore", "Garage - 35 food, 35 ore", "Elite Bootcamp - 40 food, 30 ore", "Tank Park - 45 food, 55 ore"];} 
    else if (player.faction === "pastans") {hq_naming_list = ["Fusilli - 10 food", "Penne - 10 food, 5 ore", "Rigatoni - 20 food, 10 ore", "Lasagna - 15 food, 15 ore", "Orechiette - 15 food, 20 ore", "Spaghetti - 25 food, 20 ore", "Tagliatelle - 20 food, 30 ore, 1 hazardite", "Farfalle - 30 food, 15 ore, 1 gem", "Macaroni - 30 food, 30 ore, 1 oil, 1 aluminium", "Spoon - 10 food, 10 ore", "Baking Tray - 20 food, 20 ore", "Bowl - 20 food, 20 ore", "Sieve - 25 food, 25 ore", "Grater - 35 food, 35 ore", "Plate - 30 food, 40 ore", "Pot - 45 food, 55 ore"];} 
    else if (player.faction === "scrapbots") {hq_naming_list = ["Worker - 10 ore", "Fodder - 5 food, 5 ore", "Fighter - 10 food, 10 ore", "Sprinter - 10 food, 15 ore", "Shooter - 10 food, 15 ore", "Skirmisher - 15 food, 15 ore", "Pursuer - 20 food, 20 ore, 1 aluminium", "Destroyer - 25 food, 25 ore, 1 oil", "Annihilator - 25 food, 50 ore, 1 gem, 1 hazardite", "Factory - 10 food, 10 ore", "Racetrack - 20 food, 20 ore", "Shooting Range - 20 food, 20 ore", "Spider Bunker - 25 food, 25 ore", "Airfield - 35 food, 35 ore", "Assembly Scaffolds - 30 food, 40 ore", "Supershell - 45 food, 55 ore"];} 
    else {hq_naming_list = ["Gnome - 10 food", "Kobold - 10 food, 10 ore", "Hoplite - 15 food, 15 ore", "Strider - 20 food, 15 ore", "Slingslime - 20 food, 15 ore", "Lich - 30 food, 20 ore", "Cerberus - 20 food, 20 ore, 1 aluminium", "Leviathan - 30 food, 30 ore, 1 oil", "Reaper - 40 food, 40 ore, 1 gem, 1 hazardite", "Graveyard - 10 food, 10 ore", "Silent Trees - 20 food, 20 ore", "Damp Cave - 20 food, 20 ore", "Forbidden Library - 25 food, 25 ore", "Hell's Kennel - 35 food, 35 ore", "Big Pit - 40 food, 30 ore", "Tower of Souls - 45 food, 55 ore"];}
    
    unit1_button.innerText=hq_naming_list[0];
    unit2_button.innerText=hq_naming_list[1];
    unit3_button.innerText=hq_naming_list[2];
    unit4_button.innerText=hq_naming_list[3];
    unit5_button.innerText=hq_naming_list[4];
    unit6_button.innerText=hq_naming_list[5];
    unit7_button.innerText=hq_naming_list[6];
    unit8_button.innerText=hq_naming_list[7];
    unit9_button.innerText=hq_naming_list[8];

    build3_button.innerText=hq_naming_list[9];
    build6_button.innerText=hq_naming_list[10];
    build7_button.innerText=hq_naming_list[11];
    build11_button.innerText=hq_naming_list[12];
    build15_button.innerText=hq_naming_list[13];
    build16_button.innerText=hq_naming_list[14];
    build18_button.innerText=hq_naming_list[15];

    //MAIN MAP
    hotbar.style.display = "block";
    for (let x = 1; x<26; x++){
        for (let y = 1; y<26; y++){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.position = "absolute";
            tile.style.left = (x-1)*128+"px";
            tile.style.top = (y-1)*128+"px";
            tile.style.width = "128px";
            tile.style.height = "128px";
            tile.setAttribute("data-x", x);
            tile.setAttribute("data-y", y);
            const tileimg = document.createElement("img");
            tileimg.classList.add("tileimg");
            tileimg.style.width="128px";
            tileimg.style.height="128px";
            tileimg.style.padding="0px";
            tileimg.style.margin="0px";
            tileimg.setAttribute("data-x", x);
            tileimg.setAttribute("data-y", y);
            if (x===1 && y===1){
                tile.classList.add("top_left_anchor");
            }
            if (x===25 && y===25){
                tile.classList.add("bottom_right_anchor");
            }
            if (player.faction === "humans"){
                bot1.faction = "scrapbots";
                bot1.color="#ff8000";
                bot2.faction = "pastans";
                bot2.color="#00ff6a";
                bot3.faction = "yox_empire";
                bot3.color="#6200ff";
            }
            else if (player.faction === "scrapbots"){
                bot1.faction = "humans";
                bot1.color="#0fc9fc";
                bot2.faction = "pastans";
                bot2.color="#00ff6a";
                bot3.faction = "yox_empire";
                bot3.color="#6200ff";
            }
            else if (player.faction === "pastans"){
                bot1.faction = "humans";
                bot1.color="#0fc9fc";
                bot2.faction = "scrapbots";
                bot2.color="#ff8000";
                bot3.faction = "yox_empire";
                bot3.color="#6200ff";
            }
            else{
                bot1.faction = "humans";
                bot1.color="#0fc9fc";
                bot2.faction = "scrapbots";
                bot2.color="#ff8000";
                bot3.faction = "pastans"; 
                bot3.color="#00ff6a";

            }
            if (x===2 && y===2){
                if (player.faction === "humans"){tileimg.src = "images/tiles/humans_hq.png";}
                else if (player.faction === "scrapbots"){tileimg.src = "images/tiles/scrapbots_hq.png";}
                else if (player.faction === "pastans"){tileimg.src = "images/tiles/pastans_hq.png";}
                else  if (player.faction === "yox_empire"){tileimg.src = "images/tiles/yox_empire_hq.png";}
                tile.onclick=open_hq;
            }
            else if (x===2 && y===24){
                tileimg.src = "images/tiles/" + bot1.faction + "_hq.png";
            }
            else if (x===24 && y===2){
                tileimg.src = "images/tiles/" + bot2.faction + "_hq.png";
            }
            else if (x===24 && y===24){
                tileimg.src = "images/tiles/" + bot3.faction + "_hq.png";
            }
            else if ((x===2 && y===4) || (x===7 && y===3) || (x===22 && y===2) || (x===23 && y===7) || (x===24 && y===22) || (x===19 && y===23) || (x===4 && y===24) || (x===3 && y===19) || (x===11 && y===11) || (x===15 && y===15)){
                tileimg.src = "images/tiles/mine.png";
                const popo = new Resource_tile("mine", x, y, "unoccupied", tileimg);
                global_resources.push(popo);
            }
            else if ((x===4 && y===2) || (x===3 && y===7) || (x==24 && y===4) || (x===19 && y===3) || (x===22 && y===24) || (x===23 && y===19) || (x===2 && y===22) || (x===7 && y===23) || (x===11 && y===15) || (x===15 && y===11)){
                tileimg.src = "images/tiles/food.png";
                const popo = new Resource_tile("food", x, y, "unoccupied", tileimg);
                global_resources.push(popo);

            }
            else if ((x===13 && y===3) || (x===18 && y===18)){
                tileimg.src="images/tiles/oil.png";
                const popo = new Resource_tile("oil", x, y, "unoccupied", tileimg);
                global_resources.push(popo);

            }
            else if ((x===3 && y===13) || (x===18 && y===8)){
                tileimg.src="images/tiles/hazardite.png";
                const popo = new Resource_tile("hazardite", x, y, "unoccupied", tileimg);
                global_resources.push(popo);
            }
            else if ((x===23 && y===13) || (x===8 && y===8)){
                tileimg.src="images/tiles/gems.png";
                const popo = new Resource_tile("gems", x, y, "unoccupied", tileimg);
                global_resources.push(popo);
            }
            else if ((x===13 && y===23) || (x===8 && y===18)){
                tileimg.src="images/tiles/aluminium.png";
                const popo = new Resource_tile("aluminium", x, y, "unoccupied", tileimg);
                global_resources.push(popo);

            }
            else{tileimg.src = "images/tiles/land.png";}
            //else{tileimg.src = "importan.png";}
        
            tile_container.appendChild(tile);
            tile.appendChild(tileimg);
        }
    }
    game_start();
}
function game_start(){
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

    //test area for #### to run at game start
    //    constructor(name, maxhealth, movement, attack, range, x, y, type, filepath, owner){
    let bubu = new Unit("bubu", 1000, 10, 10, 10, 3, 3, "melee", "images/yox_empire/kobold.png", "bot1");
    bubu.render_unit("no");
    //render_all_units();
    
    
    
    update_resource_counters();
    update_hq_healthbar();
}

//ONCLICK ASSIGNMENTS
smenu_settings.onclick = show_settings;
set_close.onclick = () => settings.style.display="none";
smenu_help.onclick = () => help.style.display="block";
help_close.onclick = () => help.style.display="none";
smenu_play.onclick= load_assets;
hq_close.onclick= () => hq_menu.style.display="none";
hq_encycl.onclick = open_encycl;
encycl_close.onclick = () => encycl.style.display="none";
hq_popup_ok.onclick= () => hq_popup_div.style.display="none";
hq_research.onclick=open_research;
research_close.onclick= () => research.style.display="none";
hq_widget_move_button.onclick=move_hq_widget;
unit_hotbar_closer.onclick=unit_hotbar_close_do;

build1_button.onclick = () => buy_building_do(1);
build2_button.onclick = () => buy_building_do(2);
build3_button.onclick = () => buy_building_do(3);
build4_button.onclick = () => buy_building_do(4);
build5_button.onclick = () => buy_building_do(5);
build6_button.onclick = () => buy_building_do(6);
build7_button.onclick = () => buy_building_do(7);
build8_button.onclick = () => buy_building_do(8);
build9_button.onclick = () => buy_building_do(9);
build10_button.onclick = () => buy_building_do(10);
build11_button.onclick = () => buy_building_do(11);
build12_button.onclick = () => buy_building_do(12);
build13_button.onclick = () => buy_building_do(13);
build14_button.onclick = () => buy_building_do(14);
build15_button.onclick = () => buy_building_do(15);
build16_button.onclick = () => buy_building_do(16);
build17_button.onclick = () => buy_building_do(17);
build18_button.onclick = () => buy_building_do(18);

unit1_button.onclick = () => buy_unit_do(1);
unit2_button.onclick = () => buy_unit_do(2);
unit3_button.onclick = () => buy_unit_do(3);
unit4_button.onclick = () => buy_unit_do(4);
unit5_button.onclick = () => buy_unit_do(5);
unit6_button.onclick = () => buy_unit_do(6);
unit7_button.onclick = () => buy_unit_do(7);
unit8_button.onclick = () => buy_unit_do(8);
unit9_button.onclick = () => buy_unit_do(9);

r1r1.onclick = () => buy_research_do(1);
r1r2.onclick = () => buy_research_do(2);
r1r3.onclick = () => buy_research_do(3);
r1r4.onclick = () => buy_research_do(4);
r2r1.onclick = () => buy_research_do(5);
r2r2.onclick = () => buy_research_do(6);
r2r3.onclick = () => buy_research_do(7);
r2r4.onclick = () => buy_research_do(8);
r3r1.onclick = () => buy_research_do(9);
r3r2.onclick = () => buy_research_do(10);
r3r3.onclick = () => buy_research_do(11);
r3r4.onclick = () => buy_research_do(12);
r4r1.onclick = () => buy_research_do(13);
r4r2.onclick = () => buy_research_do(14);
r4r3.onclick = () => buy_research_do(15);
r4r4.onclick = () => buy_research_do(16);

hq_market.onclick=open_marketplace;
marketplace_close.onclick= () =>marketplace.style.display="none";
ore_to_food.onclick = () => do_trade(1);
food_to_ore.onclick = () => do_trade(2);
food_to_oil.onclick = () => do_trade(3);
food_to_hazardite.onclick = () => do_trade(4);
ore_to_gems.onclick = () => do_trade(5);
ore_to_aluminium.onclick = () => do_trade(6);
oil_to_food.onclick = () => do_trade(7);
hazardite_to_food.onclick = () => do_trade(8);
gems_to_ore.onclick = () => do_trade(9);
aluminium_to_ore.onclick = () => do_trade(10);

for (let i = 1; i <= 75; i++) {
    const btn = document.querySelector(`.encycl_select_${i}`);
    btn.onclick = () => open_encycl_entry(i);    
}

//you used to call me on yo cell phone
