import React, { Component } from "react";
import { Link } from "react-router-dom";
import steve from "../../assets/img/steve.jpg";
import { connect } from "react-redux";

class DashNav extends Component {
	render() {
		return (
			<div
				className="ui sticky inverted menu rounded-0 mb-0"
				style={{ height: "50px" }}
			>
				<div className="container">
					<Link to="/dashboard" className="header item">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/2/24/H-Store-logo.png"
							alt=""
						/>
					</Link>
					<Link to="/challenges" className="item">
						Challenges
					</Link>
					<Link to="/tracks" className="item">
						Practice
					</Link>
					<Link to="/jobs" className="item">
						Jobs
					</Link>

					<div className="right menu align-items-center">
						<div className="item">
							<div className="ui transparent inverted icon input">
								<i className="search icon"></i>
								<input type="text" placeholder="Search" />
							</div>
						</div>
						<Link
							to="/notification"
							className="item"
							style={{ height: "100%" }}
						>
							<i className="bell icon m-0"></i>
						</Link>
						<div className="ui simple dropdown item">
							<img class="ui avatar image" style={{objectFit: "cover"}} src={process.env.REACT_APP_WEBSITE_NAME+this.props.profilePicture} alt="" />
							<i className="dropdown icon"></i>
							<div className="menu">
								<Link className="item" to="/profile">
									Profile
								</Link>
								<Link className="item" to="/settings">
									Settings
								</Link>
								<Link className="item" to="/logout">
									Logout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProp = (state) => {
	return {
		profilePicture: state.profileReducer.image,
	}
}

export default connect(mapStateToProp)(DashNav)