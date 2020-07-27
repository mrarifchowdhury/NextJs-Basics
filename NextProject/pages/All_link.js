import About from './About'
import Contact from './Contact'
import Link from 'next/link'

function All_link()
	{
	 return <div> 

				
				<Link href="./About"> About</Link>
				 ||
				<Link href="./Contact"> Contact</Link>
				 ||
				<Link href="./index"> Index</Link>
				
				

			</div> 
	       
	}

export default All_link;