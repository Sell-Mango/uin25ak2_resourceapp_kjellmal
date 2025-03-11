import '../styles/nav.scss';

import Nav from "./Nav"

export default function Layout({ children, categories, currentCateory, setCurrentCategory }) {
    
    return( 
        <main>
        <section>
            <Nav categories={categories} currentCategory={currentCateory} setCurrentCategory={setCurrentCategory}/>
            {children}
        </section>
    </main>
    )
}