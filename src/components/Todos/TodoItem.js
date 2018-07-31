import React, { PureComponent } from 'react'

export default class TodoItem extends PureComponent {
    render() {
        console.log('TodoItem render called');
        return (<div>
            {this.props.done ? '✓' : '▢'} {this.props.title}
            ({this.props.notes.join(', ')})
            </div>);
    }
}