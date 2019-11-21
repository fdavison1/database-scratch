import React from 'react'
import styled from 'styled-components'
import Task from './Task'


const Container = styled.div`
border: 1px solid lightgray
border-radius: 3px
margin: 8px`
const Title = styled.h3`
margin: 3px`
const TaskList = styled.div`
font-weight: 200`


export default class Project extends React.Component{
    state = {

    }
    render(){
        console.log(this.props.tasks)
        const {tasks} =this.props
        return (
        
        
        <Container>

            <Title>{this.props.project.title}</Title>
            <TaskList>

            {tasks.map(task => <Task key={task.task_id} task={task} />)}

            </TaskList>
        
            

        </Container>
        )
    }
}