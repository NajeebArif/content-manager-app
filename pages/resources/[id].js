
import { useRouter } from "next/router";


const ResourceDetail = ({resourceId, resource}) => {

    const router = useRouter();

    if(router.isFallback()){
        return <div>Loading Data.</div>
    }

    return (
        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section  className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">Date Here: {resourceId}</h2>
                                        <h1 className="title">{resource.title}</h1>
                                        <p>{resource.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

// export async function getStaticProps(context){
//     const {params, query} = context;
//     console.log(query)

//     const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
//     const data = await dataRes.json();
//     return{
//         props:{
//             resourceId: params.id,
//             resource: data
//         },
//         revalidate: 60
//     }
// }

// export async function getStaticPaths(){
//     const response = await fetch("http://localhost:3001/api/resources")
//     const data = await response.json();
//     const paths = data.map(resource=> {return {params: {id: resource.id}}})
//     return {
//         paths,
//         fallback: true
//     }
// }

export async function getServerSideProps(context){
    const {params, query} = context;
    console.log(query)

    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json();
    return{
        props:{
            resourceId: params.id,
            resource: data
        }
    }
}

export default ResourceDetail;