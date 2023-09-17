var tablinks=document.querySelectorAll('.tab-links');
var tabcontents=document.querySelectorAll('.tab-contents');



function opentab(tabname)
{
for(tab of tablinks)
{
    console.log(tab);
     tab.classList.remove("active-link");
}

for(tab of tabcontents)
{
     tab.classList.remove("active-tab");
}


document.getElementById(tabname).classList.add("active-tab");
}