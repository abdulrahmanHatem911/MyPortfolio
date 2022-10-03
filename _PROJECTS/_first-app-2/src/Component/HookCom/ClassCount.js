import React, { Component } from 'react'

export default class ClassCount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = ` click  ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            console.log("decoment updated ");
            document.title = ` click ${this.state.count} times `
            

        }
    }

    render() {
        return (
            <div>

                <input type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value });
                    }} />



                <button onClick={() => this.setState({ count: this.state.count + 1 })} >

                    count {this.state.count} times
                </button>
            </div>
        )
    }
}