import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./style";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "39FF14",
				textAlign: "center",
				marginTop: "-50px" }}>
		Paws-N-Claws
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Customer Info</Heading>
			<FooterLink href="/">Refunds/Cancellations</FooterLink>
			<FooterLink href="/ContactForm.jsx">Contact Us</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		<hr className="mt-2 mb-5"></hr>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
