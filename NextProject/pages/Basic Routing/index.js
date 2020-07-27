import About from './About'
import Contact from './Contact'
import Link from 'next/link'

function Home()
	{
	 return <div> 

				<h1> Basic Routing Example  </h1>
				<Link href="./About"> About</Link>
				<br/>
				<Link href="./Contact"> Contact</Link>
				<br/>
				

			</div> 
	       
	}

export default Home;