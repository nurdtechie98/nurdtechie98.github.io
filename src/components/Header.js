import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-bolt"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Chirag Shetty</h1>
                <h2 className='box'>nurdtechie98</h2>
                <p>Software Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>project</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>hobbies</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
