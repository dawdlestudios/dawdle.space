import { getUser } from "../utils/auth";
const username = getUser();

export const LoginLink = () => {
	if (username) {
		return <a href="/me">{username}</a>;
	}

	return <a href="/login">login</a>;
};

export const Username = () => {
	return <span>{username}</span>;
};
