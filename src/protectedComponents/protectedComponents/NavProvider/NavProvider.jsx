import React, { useState } from 'react';

export const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('Dashboard');
	const [adminSlider, setAdminSlider] = useState(true)

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
		adminSlider,
		setAdminSlider
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};