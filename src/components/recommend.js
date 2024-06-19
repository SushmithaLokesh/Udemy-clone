import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

// Recommended
function Recommend()
{
  return(
  <>
    <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Peak the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={one}></img>
                <h3>2023 Python Data Visulation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={two}></img>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={three}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={four}></img>
                <h3>Basic to Advance Java Core Training</h3>
                <p>Col Steels</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
        </div>
    </div>
  </>)
}

export default Recommend