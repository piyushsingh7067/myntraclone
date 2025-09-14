// import React, { useState } from "react";
// import ReactDOM from "react-dom/client"
// import Card from "./src/component/card";
// import Header from "./src/component/Header";
// import Footer from "./src/component/fotter";



// function App(){ 
   
//     let [A,setA] = useState(arr);

//     function sortArray(){
//        A.sort((a,b)=>a.price-b.price);
//        setA(A);
//        console.log(A);
//     }
    

//     return ( <>
    
//   <Header/>
//    <button onClick={sortArray}>Sort by price</button>

//     <div className="middle" style={{display:"flex", gap:"20px", flexWrap:"wrap"}} >

//         {
//             A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
//         }
//     </div>

//    <Footer/>
//     </>
//     )
// }
// const arr = [{cloth:"paijama", offer:"20-10%off",price:200},{cloth:"Lobar", offer:"20-40%off",price:300},{cloth:"Tshirt", offer:"20-40%off",price:600},{cloth:"tai", offer:"30-40%off"},{cloth:"cap", offer:"20-10%off"},{cloth:"tauliya", offer:"20-40%off"},{cloth:"pant", offer:"10-40%off"},{cloth:"kurta", offer:"20-60%off"},{cloth:"shoes", offer:"20-30%off"},{cloth:"kurti", offer:"10-30%off"}]
     

// const Root = ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<App/>); 