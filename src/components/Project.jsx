import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'


const Container = styled.div`
border: 1px solid lightgray
border-radius: 3px
margin: 8px`
const Title = styled.h3`
margin: 3px`
const TaskList = styled.div`
font-weight: 200`


export default class Project extends React.Component {
    state = {

    }
    render() {
        // console.log(this.props.tasks)
        const { tasks } = this.props
        return (

            <Droppable droppableId={this.props.project.droppable_id}>
                {(provided) => (
                    <Container>

                        <Title>{this.props.project.title}</Title>
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >

                            {tasks.map((task, index) => <Task key={task.task_id} task={task} index={index} tasks={tasks}/>)}
                            {provided.placeholder}
                        </TaskList>



                    </Container>
                )}
            </Droppable>
        )
    }
}