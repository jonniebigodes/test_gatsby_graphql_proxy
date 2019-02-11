import React from "react"
import { Link} from "gatsby"
import { Query } from 'react-apollo';
import Layout from "../components/layout"
import SEO from "../components/seo"
import gql from 'graphql-tag';
const APOLLO_QUERY=gql`
{
  user(_id: "c942e551-cae5-4cb4-a78a-ffbc22592557") {
    name
    age
    email
  }
}
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Query query={APOLLO_QUERY}>{({data,loading,error})=>{
           if (loading) return <p>Loading pupper...</p>;
           if (error) return <p>Error: ${error.message}</p>;
           const { name, age, email } = data.user ;
           return(
             <div>
               <h1>{name}</h1>
               <h2>{age}</h2>
               <h3>{email}</h3>
             </div>
           )
        }}</Query>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
