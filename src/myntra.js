import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/card";
import Footer from "./component/fotter";
import Header from "./component/Header";
import arr from "./utils/dummy";
// import {greet,meet} from "./utils/dummy";

 
// Header 
// Body  
// footer 


function App(){
    return ( <>
    
  <Header/>

    <div className="middle" style={{display:"flex", gap:"25px", flexWrap:"wrap"}} >

        {
            arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} />)
        }
    </div>


   <Footer/>
    
    </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
