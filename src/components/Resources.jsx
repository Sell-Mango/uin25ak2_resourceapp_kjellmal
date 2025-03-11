import '../styles/resources.scss';

import { useParams } from "react-router";

import PageTitle from "./PageTitle";

export default function Resources({ resources }) {

    const { category } = useParams();

    return (
        <article>
            <PageTitle category={category} />
            <ul>
                {
                    resources.map((resource, index) => (
                        resource.category === category ? <li key={`resource_${index}`}>
                            <a href={resource.url} target="_blank">{resource.title}</a>
                        </li> : ""
                    ))
                }
            </ul>
        </article>
    );
}