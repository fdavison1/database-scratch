import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import Project from './Project'

const Hidden = styled.div`
display: none`


export default class Dash extends React.Component {
    state = {
        tasks: [],
        taskOrder: [],
        projects: []
    }

    componentDidMount() {
        this.getProjects()
        this.getTasks()
        this.getTaskOrder()
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

    getTaskOrder() {

        axios.get('/api/taskOrder')
            .then(res => {

                res.data.map((el, index) => {
                    res.data.splice(index, 1, el.task_id)
                    // console.log(res.data)

                })

                // console.log(res.data)
                this.state.taskOrder = res.data



                this.setState({
                    taskOrder: this.state.taskOrder
                })
                // console.log(this.state.taskOrder)
            })


    }

   

    onDragEnd =  result => {
        // console.log(result)
        const { destination, source, draggableId } = result
        // this.getTaskOrder()

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        // console.log(draggableId)
        // console.log(this.state.tasks)
        // const task = this.state.tasks.find(el => el.droppable_id === draggableId)
        // console.log(task)

        // task.droppable_id = destination.index + 1
        // console.log(task)

        // if (source.index < destination.index) {
        //     for (let i = 0; i < task.droppable_id; i++ ){
        //         console.log(i)
        //     }
        // this.getTaskOrder()


        // console.log(this.state.taskOrder)

            this.state.taskOrder.splice(source.index, 1)
            this.state.taskOrder.splice(destination.index, 0, +draggableId)

        // console.log(this.state.taskOrder)

        for (let i=0; i < this.state.taskOrder.length; i++){
            // console.log(i)
            this.state.tasks[i].droppable_id = this.state.taskOrder[i]
        }
        console.log(this.state.tasks)

        this.setState({
            tasks: this.state.tasks,
            taskOrder: this.state.taskOrder
        })

        for (let i=0; i < this.state.tasks.length; i++){
            if (this.state.tasks[i].task_id !== 
                this.state.tasks[i].droppable_id){
                   axios.put('/api/tasks', this.state.tasks[i])
                   .then(res => {
                       this.setState({
                           tasks: res.data
                       })
                   }) 
                }
        }
        this.getTasks()
       
    }





    render() {
        return (
            <div>

                <DragDropContext
                    onDragEnd={this.onDragEnd}>

                    {(this.state.projects.length > 0) &&

                        // <h1>test:{this.state.projects.length}</h1>}

                        <div>

                            {this.state.projects.map((projectID, index) => {
                                //const project ?
                                const project = this.state.projects[index]
                                //    console.log(project)

                                //const tasks ?
                                const tasks = this.state.tasks.map((taskId, index) => this.state.tasks[index])
                                // console.log(index)
                                return <Project key={project.project_id} project={project} tasks={tasks} />
                            })}

                        </div>}
                </DragDropContext>



                <button

                    onClick={() => this.getTaskOrder()}>taskOrder</button>
                <br />
                {/* test: {this.state.taskOrder.map(el => el.task_id)} */}
                {/* test: {this.state.taskOrder.map((el, index) => {
                    this.state.taskOrder.splice(index, 1, el.task_id)
                    console.log(this.state.taskOrder)
                })} */}

                test: {this.state.taskOrder}

                <Hidden>
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
                </Hidden>





            </div>




        )
    }
}