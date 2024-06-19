import Navbar from "./components/navbar"
import Categories from "./components/categorie"
import Sale from "./components/sale"
import Recommend from "./components/recommend"
import Topic from "./components/topic"
import Section from "./components/section"
import Footer from "./components/footer"


function  App() 
{
    return(<>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommend></Recommend>
    <Topic></Topic>
    <Section></Section>
    <Footer></Footer></>)
}

export default App