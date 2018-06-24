import React, { Component } from "react";
import "./Portfolio.css";
import LeftMessage from '../LeftMessage';
import TransitionUp from '../TransitionUp';
import TransitionRight from '../TransitionRight';
import TransitionLeft from '../TransitionLeft';
import FadeIn from '../FadeIn';
import FollowingTag from '../FollowingTag';

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio w-100 p-0 b-0">
				<div className="divPortfolio w-25 h-100">
					<div className="divPortfolio w-100 h-50">
						<LeftMessage number="01" />
					</div>
					<div className="divPortfolio w-100 h-50">
						maybe a mouse follower anchor
					</div>
				</div>
				<div className="divPortfolio w-50 h-100">
					<div className="divPortfolio w-100 h-25 p-5">
						<h1>
							{/* This will hold the type of the project */}
							Using Watson Deeplearning AI API
						</h1>
					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						{/* "this will hold a brief description of the website." */}
						<TransitionUp message={
							<div>
								<h2>
									What The Fork!
								</h2>
								<p>
									How many times have you wondered what could you cook with that ingredient
									you saw at the super market? or what is the name of that fruit or food you saw? well
									don't worry, we have created "What the fork", just open the camera, take the picture of all
									the ingredients you have, and in matter of seconds the app will tell you all the meals you can cook. Easy!
								</p>
							</div>
						} />
					</div>
					<div className="divPortfolio w-50 h-25">
						{/* this will hold an image of the site. and link if clicked. */}
						<TransitionRight message={<img src="desktop.png" alt="Italian Trulli" className="displayInfoDiv w-100 h-100" />
						} />

					</div>
					<div className="divPortfolio w-50 h-25">
						{/* this will hold another picture. and link. maybe. */}

					</div>
					<div className="divPortfolio w-50 h-25 p-5">
						<TransitionUp message=
							{
								<div>
									<h2>
										Technologies Used in this project:
									</h2>
									<ul>
										<li>IBM Watson API: Visual Recognition</li>
										<li>Imgur API: Image Upload Service</li>
										<li>Yummly API: Recipe Finder Service</li>
										<li>Wikipedia API: Food Information</li>
										<li>JavaScript</li>
										<li>Firebase</li>
										<li>NodeJS</li>
										<li>HTML</li>
										<li>CSS</li>
									</ul>
								</div>
							}
						/>
					</div>
					<div className="divPortfolio w-100 h-25 p-5 m-5 b-5">
						{/* this will hold quote describing the project */}
						<h2><a href="https://buddyeorl.github.io/WhatTheFork/">Status: In progress, Live Demo. Click Here</a></h2>
					</div>
				</div>
				<div className="divPortfolio w-25 h-100">
					{/* big text in here or big picture or landing pages */}
					<FollowingTag message={"What The fork!"} />
				</div>
			</div >
		);
	}
}

export default Portfolio;
