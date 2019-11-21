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
        taskOrder: [1, 2, 3, 4, 5, 6],
        projects: []
    }

    componentDidMount() {
        this.getProjects()
        this.getTasks()
        // console.log(this.state.taskOrder)
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

   
   

        onDragEnd =   result => {
            const { destination, source, draggableId, type } = result
            if (!destination) {
                return
              }
          
              if (
                destination.droppableId === source.droppableId &&
                destination.index === source.index
              ) {
                return
              }

            //   console.log(source.index, destination.index)
              const newTaskOrder = Array.from(this.state.taskOrder)
            //   console.log(newTaskOrder)

              const sourceValue = newTaskOrder.splice(source.index, 1)
            //   console.log(newTaskOrder)
            //   console.log(sourceValue)


              newTaskOrder.splice(destination.index, 0, sourceValue[0])
            //   console.log(newTaskOrder)




              this.state.taskOrder = newTaskOrder


            this.setState({
                taskOrder: this.state.taskOrder
            })
           
            // console.log(this.state.taskOrder[0], 
            //     this.state.taskOrder[1],
            //     this.state.taskOrder[2],
            //     this.state.taskOrder[3],
            //     this.state.taskOrder[4] ,
            //     this.state.taskOrder[5])
            
            //     console.log(this.state.tasks[0].droppable_id,
            //         this.state.tasks[1].droppable_id,
            //         this.state.tasks[2].droppable_id,
            //         this.state.tasks[3].droppable_id,
            //         this.state.tasks[4].droppable_id,
            //         this.state.tasks[5].droppable_id)
            
            
            const newTasks = Array.from(this.state.tasks)
            // console.log(newTasks)
            
            for (let i = 0; i < this.state.taskOrder.length; i++)
            {
                newTasks[i].droppable_id = this.state.taskOrder[i]
                // newTasks[i].content = this.state.tasks[sourceValue].content

                // console.log(this.state.tasks[i].droppable_id)
            }


            this.setState({
                tasks: newTasks
            })

            // console.log(this.state.tasks[0].droppable_id, this.state.taskOrder[0])
            // console.log(this.state.tasks[1].droppable_id, this.state.taskOrder[1])
            // console.log(this.state.tasks[2].droppable_id, this.state.taskOrder[2])
            // console.log(this.state.tasks[3].droppable_id, this.state.taskOrder[3])
            // console.log(this.state.tasks[4].droppable_id, this.state.taskOrder[4])
            // console.log(this.state.tasks[5].droppable_id, this.state.taskOrder[5])
               
            

            // this.setState({
            //     tasks: this.state.tasks
            // })

            // console.log(this.state.tasks[0].droppable_id, this.state.taskOrder[0])
            // console.log(this.state.tasks[1].droppable_id, this.state.taskOrder[1])
            // console.log(this.state.tasks[2].droppable_id, this.state.taskOrder[2])
            // console.log(this.state.tasks[3].droppable_id, this.state.taskOrder[3])
            // console.log(this.state.tasks[4].droppable_id, this.state.taskOrder[4])
            // console.log(this.state.tasks[5].droppable_id, this.state.taskOrder[5])
            

                // console.log(this.state.taskOrder[0], 
                // this.state.taskOrder[1],
                // this.state.taskOrder[2],
                // this.state.taskOrder[3],
                // this.state.taskOrder[4] ,
                // this.state.taskOrder[5])
            
                // console.log(this.state.tasks[0].droppable_id,
                //     this.state.tasks[1].droppable_id,
                //     this.state.tasks[2].droppable_id,
                //     this.state.tasks[3].droppable_id,
                //     this.state.tasks[4].droppable_id,
                //     this.state.tasks[5].droppable_id)


            
            
            // for (let i = 0; i < this.state.tasks.length; i++){
            //     // console.log(i)
            //     const id = this.state.tasks[i].task_id
            //     const droppable = this.state.tasks[i].droppable_id
            //     // console.log(id, droppable)
                ////


                // axios.post('/api/tasks', {id, droppable}).then(res => 
                //     this.setState({
                //         tasks: res.data
                //     }, () => {
                //   this.getTasks()})
                //     )
                    
                // }

                // this.getTasks()

        }
                
        
        
        
        
        
        updateTasks(id, droppable){
                    axios.post('/api/tasks', {id, droppable}).then(res => 
                        this.setState({
                            tasks: res.data
                        }))
                        // this.getTasks()
                }
       





    render() {
        return (
            <div>

                <DragDropContext
                    onDragEnd={this.onDragEnd}>

                    {(this.state.projects.length > 0) &&

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



                {/* <button

                    onClick={() => this.getTaskOrder()}>taskOrder</button>
                <br /> */}
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