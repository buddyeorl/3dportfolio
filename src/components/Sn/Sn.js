import React, { Component } from "react";
import "./Sn.css";
import DockBottom from '../DockBottom';
import LeftMessage from '../LeftMessage';
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
						<div className="sw-100 h-25">

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
