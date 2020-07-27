import {Component} from 'react'
import Layout from './Layout'
const data = <h1>Contact Page </h1>


export default class Contact extends Component{

	render()
	{
	
		return(
				<div> 

	            <Layout content={data}>
				</Layout>

	            </div>
			)
	}
}




