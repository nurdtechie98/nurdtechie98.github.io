import React from 'react'
import PropTypes from 'prop-types'
import Pdf from '../images/Chirag_Shetty.pdf'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <p>I am a software engineer, currently working on App Automate product of <strong>Browserstack</strong> for the past couple of years. Building new products and exploring new tech is what I love doing .</p>
          <p>Back in my college days, I used to spend a lot of my time solving problems on <a href='https://www.codechef.com/users/nurdtechie98'>codechef</a> <a href='https://www.codechef.com/users/nurdtechie98'>codeforces</a> and other <strong>competitive programming</strong> websites. Building new products is something which charged back then as well and as a result I have been to multiple <strong>hackathons</strong></p>
          <p>At the same time I have also done my bit of <strong>Open Source</strong> contributions checkout my github profile.</p>
          <p>Feel like working with me. Heres my complete <a href={Pdf}>resume</a></p>
          <p>Have an amazing product idea ? Hit me up I would love connecting with you :)</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Assorted Projects</h2>
              <a href='https://github.com/nurdtechie98/drive-cli'>
                <div className="box">
                  <p><strong>Drive-CLI</strong></p>
                  <p>A command line interface for accessing google drive</p> 
                  <code>google-api-python-client</code> <code>click</code><code>oauth2client</code>
                </div>
              </a>
              <a href='https://github.com/nurdtechie98/drive-cli'>
                <div className="box">
                  <p><strong>Briefly</strong></p>
                  <p>Source based summarized news network over WebApp & Facebook Messenger</p> 
                  <code>django</code> <code>flask</code><code>dialogflow</code>
                </div>
              </a>
              <a href='https://github.com/nurdtechie98/drive-cli'>
                <div className="box">
                  <p><strong>HelpOff</strong></p>
                  <p>SMS based offline system where the user can get the required information in few basic steps by simple sending a message</p> 
                  <code>google-places-api</code> <code>flask</code> <code>dialogflow</code>
                </div>
              </a>
              <a href='https://github.com/nurdtechie98/drive-cli'>
                <div className="box">
                  <p><strong>HighOnBot</strong></p>
                  <p>“remote” command line utility via facebook messenger bot for the user to work on his/her machine from anywhere</p> 
                  <code>flask</code> <code>paramiko</code><code>pySFTP</code>
                </div>
              </a>
              <div class='align-center'>
                <h4>check my other work on <a href='https://github.com/nurdtechie98'>github</a></h4>
              </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work Experience</h2>
          <div className="box">
            <p><strong>BROWSERSTACK</strong> | SENIOR SOFTWARE ENGINEER</p>
            <pre>JULY 2020 – Present</pre>
            <p>Building the automated app testing platform <a href="https://www.browserstack.com/app-automate">App Automate</a>. Working with a bunch of awesome devs and product folks to deliver seamless experience and cutting edge features for app testers around the world.</p>
          </div>
          <div className="box">
            <p><strong>TIAA GBS</strong> | SOFTWARE DEVELOPER INTERN</p>
            <pre>JUNE 2019 – AUG 2019</pre>
            <p>Worked in the automation team to build an In-house automation framework. Added capabilities of sauceLabs, selenium grid to UI testing. Developed Utility using hibernate for Database Testing </p>
          </div>
          <div className="box">
            <p><strong>FRAPPE</strong> | STUDENT DEVELOPER</p>
            <pre>June 2018 – Aug 2018</pre>
            <p>One of the 20 students selected for ESOC program where we developed an erp system, It is completely open source project. Currently it is set for release beta release in 2019</p>
          </div>
          <div className="box">
            <p><strong>Codecell</strong> | COMMITTEE HEAD</p>
            <pre>June 2017 – June 2019</pre>
            <p>Lead the official coding council of the college heading a team of 15 members. The aim of the council is to promoting competitive coding and development culture across the college by arranging workshops, meetups, contests and hackathon</p>
          </div>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hobbies</h2>
          <h3>Other then programming I like to spend my time</h3>
          <ul>
            <li><strong>WATCHING MOVIES </strong>[christopher nolan is lit]</li>
            <li><strong>BINGE WATCHING TV SERIES </strong>[G.O.T.,Sherlock,B.B.T. ....]</li>
            <li><strong>FOLLOWING AND PLAYING SPORTS</strong></li>
            <li><strong>LISTENING TO MUSIC </strong>[my man zimmer]</li>
          </ul>
          <h4>Thats not it, I spend a lot of my time watching videos on youtube, reading intresting articles on internet and viewing memes on social media  </h4>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main