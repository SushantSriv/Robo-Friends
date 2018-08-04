import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';

class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield:''
		}
	}
	onSearchChange=(event)=> {
		this.setState({searchfield:event.target.value} );
	}
	render(){
		const filteredRobots=this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
		  <div className='tc'>
			 <h1>Robo Friends</h1>
			 <Searchbox searchChange={this.onSearchChange}/>
			<Scroll> 
			 <Cardlist robots={filteredRobots}/>
			</Scroll> 
		   </div>
		);
	}	
}
export default App;