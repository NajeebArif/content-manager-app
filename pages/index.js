
import Newsletter from "component/Newsletter"
import ResourceHighlight from "component/ResourceHighlight"
import ResourceList from "component/ResourceList"

export default function Home({resources}) {
  return (
    <>
      <ResourceHighlight resources={resources.slice(0,2)}/>
      <Newsletter />
      <ResourceList resources={resources.slice(2)}/>  
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch("http://localhost:3001/api/resources")
  const data = await response.json();
  return{
    props:{
      resources: data
    }
  }
}
