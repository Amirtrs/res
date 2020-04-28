import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Resume from './Components/Resume';

import Testimonials from './Components/Testimonials';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name":"Amir Trs",
          "occupation":"Iran-Mashhad",
          "description":"Programmer -Python-Matlab      Photographer  | Editor  |  Designer",
          "image":"profilepic.jpg",
          "bio":"",
          "contactmessage":"",
          "email": "amir_toranj21@gmail.com",
          "phone": "09014680746",
          "address":{
            "street":"(Your Street)",
            "city":"",
            "state":"(Your State)",
            "zip": "(Your Zip/Postal Code)"
          },
          "website": "",
          "resumedownload":"",
          "social":[
           
            {
              "name":"twitter",
              "url":"http://twitter.com/Amir_trs",
              "className":"fa fa-twitter"
            },
           
           
            {
              "name":"instagram",
              "url":"http://instagram.com/Amir_trs",
              "className":"fa fa-instagram"
            },
            {
              "name":"github",
              "url":"https://github.com/Amirtrs",
              "className":"fa fa-github"
            },
            {
              "name":"skype",
              "url":"http://skype.com/Amir_trs",
              "className":"fa fa-skype"
            }
          ]
        },
        "resume":{
          "skillmessage":"I have nearly 4 years of experience in programming in the field of artificial intelligence and image processing, as well as 5 years of experience in photography and editing in the field of portraiture, nature and freedom, as well as a year of experience in the field of Python neural network.",
          "education":[
           
          {}
          ],
          "work":[
            {
            },
            {
            }
          ],
          "skills":[
            {
              "name":"Matlab",
              "level":"100%"
            },
            {
              "name":"Illustrator",
              "level":"55%"
            },
            {
              "name":"ReactJs",
              "level":"40%"
            },
            {
              "name":"Photoshop",
              "level":"100%"
            },
            {
              "name":"Python",
              "level":"80%"
            },
            {
              "name":"Lightroom",
              "level":"100%"
            },
            {
              "name":"IBM SPSS",
              "level":"80%"
            }
          ]
        },
        "portfolio":{
          "projects": [
            {
              "title":"Canadian Wanderlust",
              "category":"My Travel Blog for my post-university travels",
              "image":"canadian-wanderlust.jpg",
              "url":"https://www.canadianwanderlust.com"
            },
            {
              "title":"Fury Fighting Gear",
              "category":"(offline now) A fighting gear company I started",
              "image":"fury-fighting-gear.jpg",
              "url":"http://www.timbakerdev.com"
            },
            {
              "title":"Original Thai Food",
              "category":"Website I built for a restaurant I like in Thailand",
              "image":"original-thai-food.jpg",
              "url":"http://www.timbakerdev.com/originalthaifood.github.io"
            },
            {
              "title":"Resume Website",
              "category":"A React based resume website template",
              "image":"resume-website.jpg",
              "url":"http://www.timbakerdev.com"
            },
            {
              "title":"Smirkspace",
              "category":"(MVP Only) A React and Meteor based chat University project.",
              "image":"smirkspace.jpg",
              "url":"http://www.smirkspace.com"
            }
          ]
        },
        "testimonials":{
          "testimonials":[
            {
              "text":"There are moments in life when you miss someone So much that you just want to pick them from Your dreams and hug them for rea",
              
             
              "user":""
            },
            {
              "text":"A clever person solves a problem But a Wise one prevents facing it",
              "user":"Albert Einstein"
            }
          ]
        }
      }
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }



 

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        
        <Resume data={this.state.resumeData.resume}/>
       
        <Testimonials data={this.state.resumeData.testimonials}/>
        
        <Footer data={this.state.resumeData.main}/>
        
      </div>
    );
  }
}

export default App;
