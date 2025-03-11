import { useParams } from "react-router";

import PageTitle from "./PageTitle";

export default function Resources({ resources }) {

    const { category } = useParams();

    return (
        <article>
            <PageTitle category={category} />
            <p>Demo tekst</p>
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