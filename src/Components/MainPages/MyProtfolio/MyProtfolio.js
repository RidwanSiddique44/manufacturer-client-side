import React from 'react';
import mypic from '../../Images/Image/mypic.jpg';

const MyProtfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={mypic} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">I am Ridwan Siddique</h1>
                        <h1 class="text-xl font-bold">My Email Address is: srsiddique118@gmail.com</h1>
                        <p class="py-6">I am currently studying at University of Chittagong. I am Studying Marine Scienses at University of Chittagong. My subject is not related to programming but I am very fond of programing. Thats why I am learnig programing at programing-hero course. By this course I have aquire lots of skill, such as:</p>
                        <ol type="i">
                            <li>I am skilled at Html , Css , JavaScript.</li>
                            <li>I have  Knowledge of React , React router.</li>
                            <li>I have also Knowledge of node.js, backend, server etc. </li>
                        </ol>
                        <h1 class="text-xl font-bold">Some link of my project are given bellow:</h1>
                        <div className="border-solid border-2 border-blue-600 mt-2 font-bold"><a href=" https://stock-house-c16ef.web.app">project-1</a></div>
                        <div className="border-solid border-2 border-red-600 mt-2 font-bold"><a href=" https://shiny-sfogliatella-063205.netlify.app/">project-2</a></div>
                        <div className="border-solid border-2 border-green-600 mt-2 font-bold"><a href=" https://silly-bohr-7f2cee.netlify.app/">project-3</a></div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;