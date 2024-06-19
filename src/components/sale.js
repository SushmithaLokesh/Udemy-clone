import pic from "../assets/images/sale-image.jpg"
// Sale Image
function Sale()
{
  return(
  <>
  <div class="sale-image">
        <img src={pic} alt="sale image"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses for just 499. Just one day to save but life to learn...</p>
        </div>
    </div>
  </>)
}

export default Sale