import React, { Component, PropTypes } from 'react'
import LoginForm from './LoginForm'
import ContactForm from './ContactForm'

export default class ReduxForms extends Component {
    render() {
        return (
            <div>
                <LoginForm />
                <hr/>
                <ContactForm />
            </div>
        )
    }
}
