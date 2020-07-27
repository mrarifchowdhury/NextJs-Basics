
import All_link from './All_link'

function Layout(props)
	{
	 return <div> 
				<All_link/>
				{props.content}

			</div> 
	       
	}

export default Layout;