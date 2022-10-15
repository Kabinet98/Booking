import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/chart.png";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ClearAllOutlinedIcon from "@mui/icons-material/ClearAllOutlined";

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const ToggleMenu = (): boolean => {
		setToggle((toggle) => !toggle);
		console.log(toggle);
		return toggle;
	};
	return (
		<>
			<div className="navbar">
				<span className="navbar_logo">
					{" "}
					<img src={logo} className="logo" />
				</span>
				<div className={`${toggle ? "smallDevice" : "navbar_links"}`}>
					<a href="" className="link">
						Game Controllers
					</a>
					<a href="" className="link">
						VR Accessories
					</a>
					<a href="" className="link">
						Media Remotes
					</a>
				</div>
				<div className="navbar_cart">
					<span className="cart_items_number">0</span>
					<LocalMallOutlinedIcon />
				</div>
				<div className="navbar_hamburger">
					<ClearAllOutlinedIcon
						onClick={ToggleMenu}
						className="hamburger"
					/>
				</div>
			</div>
		</>
	);
};
export default Navbar;
