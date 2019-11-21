import React from 'react'
import axios from 'axios'
import Project from './Project'


export default class Dash extends React.Component {
    state = {
        tasks: [],
        projects: []
    }

    componentDidMount() {
        this.getProjects()
        this.getTasks()
    }

    getTasks() {
        // console.log('fred')
        axios.get('/api/tasks')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    tasks: res.data
                })
            })
    }

    getProjects() {
        axios.get('/api/projects')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    projects: res.data
                })
            })
    }








    render() {
        return (
            <div>


                {(this.state.projects.length > 0) && 

                // <h1>test:{this.state.projects.length}</h1>}

                <div>

                {this.state.projects.map((projectID, index )=> {
                   //const project ?
                   const project = this.state.projects[index]
                   console.log(project)
                   //const tasks ?
                   const tasks = this.state.tasks.map(taskId => this.state.tasks)
                    
                    return <Project key={project.project_id} project={project} tasks={tasks} />
                })}

                </div>} 

                
        





                <div>
                    <hr />

                    <h1>tasks:</h1>
                    <button
                        onClick={() => this.getTasks()}
                    >get tasks</button>
                    <br />
                    {this.state.tasks.map(el => el.content)}
                    <br />
                    <h1>projects:</h1>
                    <button
                        onClick={() => this.getProjects()}>get projects</button>
                    <br />

                    {this.state.projects.map(el => el.title)}
                </div>





            </div>




        )
    }
}