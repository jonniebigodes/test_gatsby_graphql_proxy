import React,{Component} from "react"
import Axios from 'axios'

class SecondPage extends Component{
  state={
    users:[],
    isLoading:true,
    isError:false
  }
  async componentDidMount(){
    try {
      const request= await Axios('/api');
      console.log('====================================');
      console.log(`response data:${JSON.stringify(request.data)}`);
      console.log('====================================');
      this.setState({users:request.data,isLoading:false})
    } catch (error) {
      this.setState({isLoading:false,isError:true})
      console.log(`error fetching dummy data:\n${error}`);
    }
  }
  render(){
    const {isLoading,isError,users}= this.state
    if (isLoading){
      return <h3>Loading</h3>
    }
    if (isError){
      return <h3>Error</h3>
    }
    return(
      <div>
        {
          users.map(item=>{
            return (
              <div>
                <h1>{item.name}</h1>
                <h2>{item.age}</h2>
                <h3>{item.email}</h3>
              </div>
            )
          })
        }
      </div>
    )
    
  }
}


export default SecondPage
