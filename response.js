function navs_width_change() {
    let navs = document.getElementsByClassName('main_level');
    let body_width = document.body.clientWidth;
    let container_width = document.getElementsByClassName('container')[0].clientWidth;
    let div_width = container_width*0.96/navs.length;
    div_width = Math.ceil(div_width)+"px";
    console.log(div_width);
    if(body_width>790)
    {
        for(let i =0;i<navs.length;i++)
        {
            navs[i].style.width = div_width;
            navs[i].className='main_level';
            console.log(navs[i].clientWidth);
        }
    }
}
function logo_change(){
    let logo=document.getElementById("logo");
    let logo_width = logo.clientWidth;
    let container_width=document.getElementsByClassName('container')[0].clientWidth;

    if(logo_width>document.body.clientWidth)
    {
        logo.style.width = Math.ceil(container_width)+"px";
        logo.className="img-fluid"
    }
}
function footer_change(){
    let footer=document.getElementById("footer");
    let footer_width=footer.clientWidth;
    if(footer_width<550)
    {
        footer.style.flexWrap="wrap"
    }
}
function sm_position_change(){
    let insert = function(nodeInsert,nodeTo){
        if(nodeInsert.insertAdjacentElement)
        {
            nodeTo.insertAdjacentElement('beforeBegin',nodeInsert);
        }
        else
        {
            nodeTo.parentNode.insertBefore(nodeInsert,nodeTo);
        }
    }
    let obj= document.createElement("a");
    const sm_down = document.getElementById("sm_down");
    const sm_up = document.getElementById("sm_up");
    let body_width = document.body.clientWidth;
    if(body_width<=992){
        insert(obj,sm_up);
        insert(sm_up,sm_down);
        insert(sm_down,obj);
        document.body.removeChild(obj);
    }
}
window.onload=function () {
    navs_width_change();
    logo_change();
    footer_change();
    sm_position_change();
};

