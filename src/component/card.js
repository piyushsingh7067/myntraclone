function Card(props){
    return (
       <div className="card" style={{border:"4px solid black",padding:"5px"}}>
           <img src="https://www.shutterstock.com/editorial/image-editorial/MfTfA1z0OeDbA61bMjA5ODA=/ms-dhoni-india-using-wicket-keeping-gloves-440nw-10299317eg.jpg" height="200px" width="200px" />
           <div style={{testAlign:"center"}}>
               <h2>{props.cloth}</h2>
               <h1>{props.offer}</h1>
               <h2>shop now</h2>
               <h2>Price: {props.price}</h2>
           </div>
      </div>
    )
}

export default Card;