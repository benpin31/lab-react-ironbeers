import React, { Component } from 'react'
import './../styles/newBeer.css'

const axios = require('axios');

export default class NewBeer extends Component {

    state={
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    handleCreateBeer = async event => {
        event.preventDefault() ;

        try {
            const res = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            console.log(res)
            this.props.history.push("/")
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state ;
        return (
            <div className="NewBeer__container">
                <form action="" className="NewBeer__form" onSubmit={this.handleCreateBeer}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={name}/>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" id="tagline" name="tagline" onChange={this.handleChange} value={tagline}/>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" onChange={this.handleChange} value={description}/>
                    <label htmlFor="first_brewed">First brewed</label>
                    <input type="text" id="first_brewed" name="first_brewed" onChange={this.handleChange} value={first_brewed}/>
                    <label htmlFor="brewers_tips">Brewers tips</label>
                    <input type="text" id="brewers_tips" name="brewers_tips" onChange={this.handleChange} value={brewers_tips}/>
                    <label htmlFor="attenuation_level">Attenuation level</label>
                    <input type="Number" id="attenuation_level" name="attenuation_level" onChange={this.handleChange} value={attenuation_level}/>
                    <label htmlFor="contributed_by">Contributed by</label>
                    <input type="text" id="contributed_by" name="contributed_by" onChange={this.handleChange} value={contributed_by}/>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

