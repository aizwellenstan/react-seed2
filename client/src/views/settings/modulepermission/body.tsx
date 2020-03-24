import React, { useState } from 'react'
class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    public inputDiv = []

    const  handleChange = (e:Event) =>{
        alert(e.target.id)
    }
    public  input =() => {
        for (let i = 0; i < 3; i++) {
            this.inputDiv.push(
                i
            )
        }
    }

    input();

    render() {
        return inputDiv;
    }
}
