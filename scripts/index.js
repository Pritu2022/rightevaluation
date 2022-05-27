//store the products array in localstorage as "products"
// document.getElementById("add_product").addEventListener("click", storeData())



function storeData(e){
    e.preventDefault()

    function Thing(i,t,p,d){
        this.image=i;
        this.type=t;
        this.price=p;
        this.desc=d
    }

    let form=document.getElementById("products")

      let image=form.image.value;
       let type=form.type.value;
       let price=form.price.value;
       let des=form.desc.value

      let p1=new Thing(image,type,price,des)
       console.log(p1)
       //console.log(image,type,price,des)

       let arr=JSON.parse(localStorage.getItem("products")) || []

       arr.push(p1)

       localStorage.setItem("products",JSON.stringify(arr))


 
}
