import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./style";
// import { faPaw } from 

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "39FF14",
				textAlign: "center",
				marginTop: "-50px"
			}}>
				Paws-N-Claws

			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>Customer Info</Heading>
						<Link to="/refund" href="/refund-cancellation"><FooterLink>Refunds/Cancellations</FooterLink></Link>
						<Link to="/contact" href="/contact"><FooterLink>Contact Us</FooterLink></Link>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						{/* As it stands now, I do not have any URL's for the owner of the business this site is being created for. Until I do, I have included a '#' so that the route still exists and can be updated
						as soon as I get a response, but without breaking the rest of the website. KWG  */}
						<a aria-disabled="true" href="#">
							<FooterLink>
								<i className="fab fa-facebook-f">
									<span style={{ marginLeft: "10px" }}>
										Facebook
									</span>
								</i>
							</FooterLink>
						</a>
						<a aria-disabled="true" href="#">
							<FooterLink>
								<i className="fab fa-instagram">
									<span style={{ marginLeft: "10px" }}>
										Instagram
									</span>
								</i>
							</FooterLink>
						</a>
						<a aria-disabled="true" href="#">
							<FooterLink>
								<i className="fab fa-twitter">
									<span style={{ marginLeft: "10px" }}>
										Twitter
									</span>
								</i>
							</FooterLink>
						</a>
					</Column>
					<hr className="mt-2 mb-5"></hr>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
