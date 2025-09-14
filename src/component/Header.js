function Header(){
    return (
        <div className="heading">
            <img className="images" src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" height="100px" width="100px"/>
            <div className="option">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Kids</button>
            <button className="but">Home&Living</button>
            <button className="but">Beauty</button>
            <button className="but">Studio</button>
            </div>
      
         <input className="searchbar" placeholder="search for product brands and more"></input>

         <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bags</button> 
         </div>

        </div>
    )
}
export default Header;