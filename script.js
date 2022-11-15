`Region wise URL links encoded with query parameter for recent obsercation of regions - Random 6`
let rec_al = "https://api.ebird.org/v2/data/obs/AL/recent?maxResults=6";
let rec_kz = "https://api.ebird.org/v2/data/obs/KZ/recent?maxResults=6";
let rec_na = "https://api.ebird.org/v2/data/obs/NA/recent?maxResults=6";
let rec_sa = "https://api.ebird.org/v2/data/obs/NA/recent?maxResults=6";
let rec_me = "https://api.ebird.org/v2/data/obs/ME/recent?maxResults=6";

`Region wise species - URL links encoded with query parameter for regions - Random 20`
let spec_al = "https://api.ebird.org/v2/product/spplist/AL?maxResults=20";
let spec_kz = "https://api.ebird.org/v2/product/spplist/KZ?maxResults=20";
let spec_na = "https://api.ebird.org/v2/product/spplist/NA?maxResults=20";
let spec_sa = "https://api.ebird.org/v2/product/spplist/SA?maxResults=20";
let spec_me = "https://api.ebird.org/v2/product/spplist/ME?maxResults=20";

`Nearby Observations encoded with query parameters - lattitude & longitude`
let near_al = "https://api.ebird.org/v2/data/obs/geo/recent?lat=40.08&lng=19.909&sort=species"
let near_kz = "https://api.ebird.org/v2/data/obs/geo/recent?lat=43.107&lng=76.949&sort=species"
let near_na = "https://api.ebird.org/v2/data/obs/geo/recent?lat=-23.01417&lng=14.40317&sort=species"
let near_sa = "https://api.ebird.org/v2/data/obs/geo/recent?lat=-19.31439&lng=14.40698&sort=species"
let near_me = "https://api.ebird.org/v2/data/obs/geo/recent?lat=42.42739&lng=18.76905&sort=species"

let api_key = "u6ve11f2c8n0";

`Using Aynch/await to fetch the ebird notable observations data`
let fetch_ebird = async (url, key, reg)=>{
    `Setting Background_color & Margin using DOM`
    document.body.style.backgroundColor = "rgb(185, 215, 236)";
    document.body.style.marginBottom = '2em'
    try{
    let fetched_ebird = await fetch(url, {
        method: 'GET',
        headers: {"X-eBirdApiToken": key},
        redirect: 'follow',
    });

    let ebird_json = await fetched_ebird.json();
    `Pulling data for recent observations`
    if(url.includes("recent") && !url.includes("lat")){
        for(i of ebird_json){
            if(i.howMany == undefined){
                i.howMany = 1;
            }
            content.innerHTML += `<div class="col">
                <div class="card" style="height:20em">
                    <div class="card-body">
                        <h5 class="card-title"><span>Name &nbsp;</span>${i.comName}</h5>
                        <div><span class="stylespan">No of Birds &nbsp; - &nbsp;</span>${i.howMany}</div>
                        <div><span class="stylespan">Scientific Name &nbsp; - &nbsp;</span>${i.sciName}</div>
                        <div><span class="stylespan">Species Code &nbsp; - &nbsp;</span>${i.speciesCode}</div>
                        <div><span class="stylespan">Location &nbsp; - &nbsp;</span>${i.locName}</div>
                        <div><span class="stylespan">Location ID &nbsp; - &nbsp;</span>${i.locId}</div>
                        <div><span class="stylespan">Observation Date &nbsp; - &nbsp;</span>${i.obsDt}</div>
                    </div>
                </div>
            </div>`
        }
    }
    `Pulling data for famous of all regions Species list with scientific code names`
    console.log(ebird_json);
    if(url.includes("spplist")){
        for(let i = 0; i <= 20; i++){
            console.log(ebird_json[i]);
            content.innerHTML += `<div class="col" style="height: 4em">
            <div id ="species-card" class="card" style="height:4em">
                <div class="card-body">
                    <h5 class="species-color">${ebird_json[i]}</h5>
                </div>
            </div>
        </div>`
        }
    }

    `Pulling data for Hotspots`
    if(url.includes("lat")){
        for(i of ebird_json){

        content.innerHTML += `<div class="col">
        <div class="card" style="height:20em">
            <div class="card-body">
                <h5 class="card-title"><span>Name &nbsp;</span>${i.comName}</h5>
                <div><span class="stylespan">No of Birds &nbsp; - &nbsp;</span>${i.lat}</div>
                <div><span class="stylespan">Scientific Name &nbsp; - &nbsp;</span>${i.lng}</div>
                <div><span class="stylespan">Species Code &nbsp; - &nbsp;</span>${i.sciName}</div>
                <div><span class="stylespan">Location &nbsp; - &nbsp;</span>${i.locName}</div>
                <div><span class="stylespan">Location ID &nbsp; - &nbsp;</span>${i.locName}</div>
            </div>
        </div>
    </div>`

            console.log(i.comName);
            console.log(i.lat);
            console.log(i.lng);
            console.log(i.sciName);
            console.log(i.locName);
        }
    }
}
catch(err){
    //No Operation
    console.log(err);
}}

let body_bg = document.body.style.backgroundColor;
let species = document.querySelector('#species');
let region = document.querySelector('#region');
let nearby = document.querySelector('#nearby');
species.addEventListener('click',(species)=>{
    document.body.innerHTML = `<h4 class="heading">Famous Species List with Scintific Code Names</h4> <div id="content" class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">`
    let content = document.querySelector('#content');
    fetch_ebird(spec_al,api_key);
    fetch_ebird(spec_kz,api_key);
    fetch_ebird(spec_na,api_key);
    fetch_ebird(spec_sa,api_key);
    fetch_ebird(spec_me,api_key);
    document.body.innerHTML += `<button  class="home-button" onclick=home()>Home</button></div>`
    // document.querySelector('.col').style.cssText = "height: 2em"
})

region.addEventListener('click',(region)=>{
    document.body.innerHTML = `<h4 class="heading">Recent Observation Of Birds By Region</h4> <div id="content" class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">`
    let content = document.querySelector('#content');
    fetch_ebird(rec_al,api_key);
    fetch_ebird(rec_kz,api_key);
    fetch_ebird(rec_na,api_key);
    fetch_ebird(rec_sa,api_key);
    fetch_ebird(rec_me,api_key);
    document.body.innerHTML += `<button  class="home-button" onclick=home()>Home</button></div>`
})

nearby.addEventListener('click',(nearby)=>{
    document.body.innerHTML = `<h4 class="heading">Nearby Observations (Lat/Long)</h4> <div id="content" class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">`
    let content = document.querySelector('#content');
    fetch_ebird(near_al,api_key);
    fetch_ebird(near_kz,api_key);
    fetch_ebird(near_na,api_key);
    fetch_ebird(near_sa,api_key);
    fetch_ebird(near_me,api_key);
    document.body.innerHTML += `<button  class="home-button" onclick=home()>Home</button></div>`
});

`Setting home button operation`
let home = function (){
    location.reload();
}