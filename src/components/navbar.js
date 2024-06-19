// Navbar
function Navbar()
{
  return(<>
  <div class="navbar">
        <div class="navbar-1">
            <h1 class="navbar-1__title">Udemy</h1>
        </div>
        <div class="navbar-2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
            <input type="text" placeholder="Search for anything here. Tech, Business, Art..."></input>
        </div>
        <div class="navbar-3">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "black"}}></i>
            <i class="fa-solid fa-bell" style={{color: "black"}}></i>
            <i class="fa-solid fa-user" style={{color: "black"}}></i>
        </div>
        <div class="navbar-4">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div></>)
}

export default Navbar