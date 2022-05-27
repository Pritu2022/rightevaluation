// document.getElementById("add_more_product").addEventListener("click",myfun())

// function myfun(){
//     window.location.href="./index.html"
// }

let data=JSON.parse(localStorage.getItem("products"))

data.map(function(el){
    let box=document.createElement("div")

    let i=document.createElement("img")
     i.src=el.image
      let t= document.createElement("p")
      t.innerHTML=el.type
      let d=document.createElement("p")
      d.innerText=el.desc
      let s=document.createElement("p")
      s.innerText=el.price
   let btn=document.createElement("button")
   btn.innerText="Remove"
    btn.addEventListener("click", function(){
        myfunc(el)
    })

      console.log(i,t,d,s, btn)
      box.append(i,t,d,s,btn)

      let da=document.getElementById("all_products")
      da.append(box)

      function myfunc(el){

       // console.log(el)
         let data=JSON.parse(localStorage.getItem("products"))
       //  console.log(data)
         data.filter(function(el,i){
             if(data[i]!=el){
                 return data;
             }
            
        })

      
        //  el.remove()
      }
}) 