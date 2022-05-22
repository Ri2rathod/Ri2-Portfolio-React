import React, { Component } from 'react'
import './../assets/css/vendor/button.min.css'

export default class button extends Component {
    render() {
        return (
            <a href="#" class="cta">
                <span>Click me</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        )
    }
}
