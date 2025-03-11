import '../styles/resources.scss';

import { useParams } from "react-router";

import PageTitle from "./PageTitle";

export default function Resources({ resources, currentCategory }) {

    const { category = currentCategory } = useParams();

    return (
        <article>
            <PageTitle category={currentCategory} />
            <ul>
                    {
                        resources.map((value, index) => (
                            value.category === category ? <li key={`resource_${index}`}><a href={value.url}>{value.title}</a></li> : ""
                        ))
                    }
            </ul>
        </article>
    );
}