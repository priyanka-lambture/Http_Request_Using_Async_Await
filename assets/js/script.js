// const delay = setTimeout(() => {
//     console.log("10")
// }, 3000);

// console.log("6")
// console.log("4")
// console.log("1")
// console.log("2")
// console.log("3")
// console.log(delay)
// console.log("5")


// window.onload=function(){
//     fetch('https://fakestoreapi.com/products',{method : 'GET'})
//     .then(function(res){
//     //   console.log(res.json())
//       return(res.json())
//     })
//     .then(function(data){
//         //  console.log(data)
//         for(var i=0;i<data.length;i++)
// {
//     console.log(data[i])
// }    })
//     .catch(function(err){
//         console.log(err.msg)
//     })
// }


// Promise Chain
// window.onload = function () {
//     var product = document.getElementById('product');
//     var spinner = document.getElementById('spinner');
//     spinner.style.display = "block";
//     fetch("https://fakestoreapi.com/products", { method: 'GET' })
//         .then(function (response) {
//             // console.log(response.json())
//             return (response.json())
//         })
//         .then(function (data) {
//             // console.log(data)
//             for (i = 0; i < data.length; i++) {
//                 // console.log(data[i]);
//                 let pdata = data[i]
//                 //    console.log(pdata.image) 
//                 let pcard = `<div class="col-md-3">
//                      <div class="card">
//                      <img src="${pdata.image}" class="card-img-top img-fluid" >
//                      <div class="card-body">
//                     <h5 class="card-title">${pdata.title}</h5>
//                     <p class="card-text">${pdata.price}</p>
//                      <p class="card-text">${pdata.description}</p>
//                      <p class="card-text">${pdata.category}</p>
//                      <p class="card-text">${pdata.rating.rate}</p>
//                      <p class="card-text">${pdata.rating.count}</p>
//                      <a href="#" class="btn btn-primary">Go somewhere</a>
//                      </div>
//                      </div>
//                     </div>`
//                 product.innerHTML += pcard;
//                 spinner.style.display = "none";
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//         })

// }

// Exception Handling
window.onload = async function () {
    try {
        var product = document.getElementById('product');
        let res = await fetch("https://fakestoreapi.com/products", { method: 'GET' })
        var spinner = document.getElementById('spinner');
          spinner.style.display = "block";
        //  console.log(res.json());
        // let datas = await res.json();
        let data = await res.json();

        // console.log(data);.
        //  for (i = 0; i < data.length; i++) {
        //     //                 // console.log(data[i]);
        //                 let pdata = data[i]
        //                       console.log(pdata.image) 
        //                      let pcard = `<div class="col-md-3">
        //                          <div class="card">
        //                          <img src="${pdata.image}" class="card-img-top img-fluid" >
        //                          <div class="card-body">
        //                          <h5 class="card-title">${pdata.title}</h5>
        //                        <p class="card-text">${pdata.price}</p>
        //                           <p class="card-text">${pdata.description}</p>
        //                           <p class="card-text">${pdata.category}</p>
        //                           <p class="card-text">${pdata.rating.rate}</p>
        //                           <p class="card-text">${pdata.rating.count}</p>
        //                           <a href="#" class="btn btn-primary">Go somewhere</a>
        //                           </div>
        //                           </div>
        //                          </div>`
        //                      product.innerHTML += pcard;
        //                      spinner.style.display = "none";
        //                  }
        //  for(let data of datas){
        // console.log(data.title)


        data.map((item, index) => {
            console.log(item, key = index);
            
            let pcard = `<div class="col-md-3">
                                                 <div class="card animate__animated animate__fadeIn">
                                                 <img src="${item.image}" class="card-img-top img-fluid" >
                                                 <div class="card-body">
                                                 <h5 class="card-title">${item.title}</h5>
                                                  <p class="card-text">${item.description}</p>
                                                  <a href="#" class="btn btn-primary">
                                                  Go somewhere</a>
                                                  </div>
                                               </div>
                                                 </div>`
            product.innerHTML += pcard;
            spinner.style.display = "none";
        })

    }



    catch (err) {
        console.log(err.msg)
    }
    finally {

    }

}

























