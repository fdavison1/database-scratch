import React from 'react'
import axios from 'axios'
import Project from './Project'


export default class Dash extends React.Component{
    state = {
        tasks: [],
        projects: []
    }



    getTasks(){
        // console.log('fred')
        axios.get('/api/tasks')
        .then(res => {
            // console.log(res.data)
            this.setState({
                tasks: res.data
            })
        })
    }

    getProjects(){
        axios.get('/api/projects')
        .then(res => {
            // console.log(res.data)
            this.setState({
                projects: res.data
            })
        })
    }








    render(){
        return (
        

        
        <div>


        dash

        <Project />




            <div>
                <hr/>
            
            <button
            onClick={() => this.getTasks()}
            >get tasks</button>
            <br/>
            tasks:{this.state.tasks.map(el => el.content)}
            <br/>
            <button
            onClick={()=> this.getProjects()}>get projects</button>
            <br/>
            projects:{this.state.projects.map(el => el.title)}
            </div>





        </div>




        )
    }
}