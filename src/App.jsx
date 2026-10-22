
import Contact from "./Contact"
export default function App() {
   return (
        <div className="contacts">
            <Contact
                img="src/images/coffeecup.jfif"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="src/images/coffeecup.jfif"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="src/images/coffeecup.jfif"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="src/images/coffeecup.jfif"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}