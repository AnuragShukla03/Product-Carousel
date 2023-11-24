const image=[
  {'img':"https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=600",'name':"BodySpary"},
  {'img':"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","name":"Watch Ultra"},
  {'img':"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","name":"Boat HeadPhone"},
  {'img':"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","name":"Sony Camera"},
  {'img':"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","name":"Rayban SunGlasses"},
  {'img':"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600","name":"Apple MacBook"},
  {'img':"https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=600","name":"Pine Forest"},
  {'img':"https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600","name":"Queen Perfume"},
  {'img':"https://images.pexels.com/photos/3657928/pexels-photo-3657928.jpeg?auto=compress&cs=tinysrgb&w=600","name":"Binoid Juices"},
  {'img':"https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=600","name":"BodySpray"},
]
const card=document.querySelector(".card")
imgTemplate=""
image.forEach((val)=>{
  imgTemplate+=`<img src=${val.img}>`
  
})
console.log(imgTemplate)
card.innerHTML=imgTemplate;

let btnRight=document.querySelector("#btnRight")
let btnLeft=document.querySelector("#btnLeft")

btnRight.addEventListener("click",()=>{
  card.scrollLeft+=320;
})

btnLeft.addEventListener("click",()=>{
  card.scrollLeft-=320;
})