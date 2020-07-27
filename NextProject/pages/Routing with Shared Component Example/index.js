
import Layout from './Layout'

const data = <h1>Index Page - Routing With Shared Component Example </h1>


function Home()
	{
	 return <div> 
                <Layout content={data}>
				
				</Layout>
		</div> 
	       
	}

export default Home;