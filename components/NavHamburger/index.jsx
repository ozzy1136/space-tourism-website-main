import styles from "./index.module.css";

import { useRef } from "react";
import { A11yDialog } from "react-a11y-dialog";
import NavMenu from "../shared/NavMenu";
import IconHamburger from "./icon-hamburger.svg";
import IconClose from "./icon-close.svg";

export default function NavBar() {
	const dialog = useRef();

	return (
		<div className={`${styles.wrapper}`}>
			<button
				className={`l-center-children ${styles.hamburgerToggle} ${styles.hamburgerToggleOpen}`}
				type="button"
				onClick={() => dialog.current.show()}
			>
				<IconHamburger />
			</button>
			<A11yDialog
				classNames={{
					container: styles.hamburgerWrapper,
					overlay: styles.hamburgerOverlay,
					dialog: styles.hamburgerDialog,
					title: styles.hamburgerTitle,
					closeButton: `l-center-children ${styles.hamburgerToggle} ${styles.hamburgerToggleClose}`,
				}}
				id="site-navigation"
				title="Site Navigation"
				dialogRef={(instance) => (dialog.current = instance)}
				closeButtonContent={<IconClose />}
			>
				<NavMenu
					classNames={{
						navList: `${styles.navList}`,
						navListItem: `${styles.navListItem}`,
						navLink: `${styles.navLink}`,
					}}
					dialogRef={dialog}
				/>
			</A11yDialog>
		</div>
	);
}