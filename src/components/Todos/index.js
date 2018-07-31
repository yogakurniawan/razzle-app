import React, { PureComponent } from 'react'
import TodoItem from './TodoItem'

export default class Todos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { title: 'take out the trash', done: false, notes: ['boring'] },
                { title: 'walk dog', done: true, notes: ['exercise'] },
                { title: 'read about React', done: false, notes: ['fun!'] },
            ]
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((oldState) => {
                oldState.todos[0].notes = [...oldState.todos[0].notes, 'smelly'];
                return { todos: [...oldState.todos] }
            });
        }, 1000);
    }

    render() {
        console.log('Todos render called');
        return (<div>
            {this.state.todos.map((todo, i) => {
                return (<TodoItem
                    key={i}
                    title={todo.title}
                    done={todo.done}
                    notes={todo.notes}
                />);
            })}
        </div>);
    }
}