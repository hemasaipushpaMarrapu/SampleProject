//function loadjson(file,callback)
//{
 //var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange=function()
 // {
  	//if(xhr.readyState===4 && xhr.status===200)
  	//{
       // callback(xhr.responseText);
  	//}
  //};
  //xhr.send(null);
//}
//loadjson("data.json",function(text){
   // var data=JSON.parse(text);
    //console.log(data);
   // basics(data.details);
//})//
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject (new Error('error') );     }
    })
  })
}
var newfile=loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
})
var ch=document.querySelector(".child1");
function basics(det)
{
var img=document.createElement("img");
img.src="pic.jpg";
img.alt="Picture";
ch.appendChild(img);
var email=document.createElement("a");
email.href="mailto:hemasaipushpa90@gmail.com";
email.textContent="hemasaipushpa90@gmail.com";
ch.appendChild(email);
}

