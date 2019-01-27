import React from 'react'
import { Link } from 'gatsby'
import pic02 from '../images/kwoc.png'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
      <h1>NLT-GITHUB: KWOC 2018 End Report</h1>
      <span className="image main"><img src={pic02} alt="" /></span>
      <h3>About kwoc:</h3>
      <p>
        Kharagpur Winter of Code is a month long online programme for the students, to get into the world of open source. <br/>
        The programme not only helps students to get over their fear of open source contribution, but also preps them for many open source summer programmes, Google Summer of Code being one of them. 
      </p>
      <h3>Choosing the Project:</h3>
      <p>
      By the time I came across the projects many people had already selected several projetcs and has started contributing to it. Most of the issues had been assigned, but then suddenly a new project was added to the list, whose tech stack was based on python and I was sure that I wanted to contribute to it. The project was in itself also very much attractive as I had always wanted to build a CLI tool, but never had done one.
      <br/> My project was <strong><Link to='https://github.com/dibyasonu/nlt-github'>NLT-Github</Link></strong> a CLI interface to access github.
      <br/>My mentor for the project was <strong><a href="https://github.com/dibyasonu">Dibya Ranjan Jena</a></strong>
      </p>
      <h3>Contribution:</h3>
      <p>
        In a span of 20 odd  days that I worked this project for I was able to raise 6 pull requests and 5 of which are merged as of now and 1 still open.
        In these pull requests I managed to work on 8 issues of which 5 have been closed and with the last pr two more may get closed. 
      </p>
      <div className="table">
        <table>
          <tr>
            <th>
              No.
            </th>
            <th>
              Pull Request
            </th>
            <th>
              Description
            </th>
          </tr>
          <tr>
            <td>
              1
            </td>
            <td>
              delete user bug fix and allow read function for Mac Os
            </td>
            <td>
              As a part of first pr I managed to fix the delete user functionality of config. 
              <br/>Also the file path where specific to linux and windows which I then modified to accomadate Mac0S 
            </td>
          </tr>
          <tr>
            <td>
              2
            </td>
            <td>
              encrypt json data before writing to .nlt
            </td>
            <td>
              Uses cryptography fernet module to encrypt the json data to stored so that the file passwords can't be seen directly. 
            </td>
          </tr>
          <tr>
            <td>
              3
            </td>
            <td>
            List Repository in paginated fashion and basic view profile
            </td>
            <td>
              Two functionalities were added:<br/>
              <code>list_repos</code> which list repos belonging to a person<br/>
              <code>view_profile</code> which shows basic information about user
            </td>
          </tr>
          <tr>
            <td>
              4
            </td>
            <td>
              Add pull request options
            </td>
            <td>
              functionality to view, checkout , merge and comment on pull request of particular repository was added
            </td>
          </tr>
          <tr>
            <td>
              5
            </td>
            <td>
              add smart gitignore
            </td>
            <td>
              partially smart gitignore list was made which got rearranged in prefrence based of the file extemsions used
            </td>
          </tr>
          <tr>
            <td>
              6
            </td>
            <td>
              add readme
            </td>
            <td>
              attempt to create an awesome readme, with badges, gifs, usecases etc was made.
            </td>
          </tr>
        </table>
      </div>
      <h3>Conclusion:</h3>
      <p>
        I always wanted to get into a opensource project and give some contributions and I needed a project or something to keep me busy during winter vaccations. 
        So without a second thought I had made up my mind to get into KWOC and I can say it has been a great journey.
        Not only was this project in itself a great learning experience but it also prooved to be an inspiration to work on an independent side project <a href="">Drive-CLI</a>.<br/>
        I would recommend more and more people to start contributing to such events which can be very usefull starting point for beginners.
      </p>
      <h3>Update:</h3>
      <ul>
       <li>The last standing pull request was merged to Dev branch on 17th of January and will be hopefully merged to master as well soon.</li>
      </ul>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
