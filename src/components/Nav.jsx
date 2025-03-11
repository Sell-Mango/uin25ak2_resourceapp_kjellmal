import { useState } from "react";
import { Link } from "react-router";

export default function Nav({ resources }) {

    const categories = resources.filter((value, index) => 
        resources.findIndex((item) => item.category === value.category) === index
    );

    return (
        <nav>
            <ul>
                <>
                {
                    categories.map((item, index) => 
                        <li key={`tab_${index}`} className="tab_active"><Link to={`/${item.category}`}>{item.category}</Link></li>
                )}
                </>
            </ul>
        </nav>
    );
}