import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from '../UseOnScreen/UseOnScreen';
import { NavContext } from '../NavProvider/NavProvider';

export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};