/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'Js',
        text: 'Message',
        isCheck: false,
        selected: 'React',
    };

    handleInput = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isCheck: e.target.checked,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                selected: e.target.value,
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { title, text, isCheck, selected } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="enter title"
                        value={title}
                        onChange={this.handleInput}
                    />
                    <br />
                    <br />
                    <textarea value={text} onChange={this.handleInput} />
                    <br />
                    <br />
                    <input type="checkbox" value={isCheck} onChange={this.handleInput} />
                    <br />
                    <br />
                    <select value={selected} onChange={this.handleInput}>
                        <option value="React">React</option>
                        <option value="Angu">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}
