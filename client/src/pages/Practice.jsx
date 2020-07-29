import React, { Component } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

class Practice extends Component {
	state = {
		practices: [],
	};

	componentDidMount() {
		axios
			.get(
				`${process.env.REACT_APP_WEBSITE_NAME}/api/tracks/${this.props.match.params.trackId}/`,
				{
					headers: {
						Authorization: `Token ${this.props.token}`,
					},
				}
			)
			.then((res) => {
				const practices = res.data;
				this.setState({ practices });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Practice</h2>
									</div>
									<div className="ui cards mt-1">
										{this.state.practices.map((practice) => (
											<div className="card w-100" key={nanoid()}>
												<Link
													to={this.props.match.url + "/" + practice.id}
													className="content"
												>
													<div className="header">{practice.title}</div>
													<div className="meta">Friend</div>
													<div className="description">
														lorem ipsum dolor sit amet.
													</div>
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Difficulty</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Easy</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Medium</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Hard</label>
										</div>
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Subdomains</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Template</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Style</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Script</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Server Side Programming</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>REST API</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Database</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Deployment</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>CI/CD</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(Practice);
