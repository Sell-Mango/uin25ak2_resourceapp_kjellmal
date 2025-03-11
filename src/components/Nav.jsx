import { Link } from "react-router";

export default function Nav({ categories, currentCategory, setCurrentCategory }) {

    const handleClick = (value) => {
        setCurrentCategory(value);
    }

    return (
        <nav>
            <ul>
                {
                    categories.map((item, index) => 
                        <li key={`tab_${index}`} className={ item.category === currentCategory ? "tab_active" : "" } onClick={() => handleClick(item.category)}>
                            <Link to={`/${item.category}`}>{item.category}</Link>
                        </li>
                )}
            </ul>
        </nav>
    );
}