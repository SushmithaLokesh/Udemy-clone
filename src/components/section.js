import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"
import five from "../assets/images/c1.jpg"
import six from "../assets/images/c2.jpg"
import seven from "../assets/images/c3.jpg"
import eight from "../assets/images/c4.jpg"

// Popular Section
function Section()
{
  return(
  <>
    <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">
            <div class="course-card">
                <img src={one}></img>
                <h3>2023 Python Data Visulation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={two}></img>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div className="course-card">
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
            <div className="course-card">
                <img src={five}></img>
                <h3>2023 Python Data Visulation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={six}></img>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={seven}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={eight}></img>
                <h3>Basic to Advance Java Core Training</h3>
                <p>Col Steels</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449<del>1999</del></p>
            </div>
        </div>
    </div>
  </>)
}

export default Section