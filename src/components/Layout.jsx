import Nav from "./Nav"

export default function Layout({ children, resources }) {
    
    return( 
        <main>
        <section>
            <Nav resources={resources}/>
            {children}
        </section>
    </main>
    )
}