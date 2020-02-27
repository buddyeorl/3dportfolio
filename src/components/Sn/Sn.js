import React, { Component } from "react";
import "./Sn.css";
import DockBottom from '../DockBottom';
import TransitionLeft from '../TransitionLeft';
import TransitionRight from '../TransitionRight';
import TransitionUp from '../TransitionUp';

class Sn extends Component {
	render() {
		return (
			<section className="snContainer w-100 m-0 p-0 b-0">
				<div className="snHolder w-75 h-100">
					<div className="snHolder w-100 h-25">
					</div>
					<div className="snHolder w-50 h-50 p-5">
						<TransitionLeft message=
							{<h1>Ok so now it's time to contact me!!</h1>}
						/>
					</div>
					<div className="snHolder w-50 h-50 p-5">
						<TransitionRight message=
							{<DockBottom />}
						/>
					</div>
					<div className="snHolder w-75 h-25">
						<div className="sw-100 h-25 p-5">
							<TransitionRight message=
								{<h6 className="p-5">Did you like this portfolio??, I've created this portfolio to share it, so please take a look at my
									open source repo <a href="https://github.com/buddyeorl/3dportfolio" target="_blank" rel="noopener noreferrer">(Github Repo.
									Click Here)</a>, if you like it, please star it, clone it, and share it.</h6>}
							/>
						</div>
						<div className="sw-100 h-25">
						</div>
					</div>
				</div>

				<div className="snHolder w-25 h-100"  >
					<TransitionUp message=
						{
							<div className="bigContact">
								Contact
							</div>
						}
					/>

				</div>





			</section >
		);
	}
}

export default Sn;
