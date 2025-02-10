import { useEffect, useState } from "react";

export const getUser = () => {
	if (typeof window === "undefined") return "";
	const username = document.cookie
		.split("; ")
		.find((row) => row.startsWith("dawdle-user-client="))
		?.split("=")[1];

	return username;
};

export const useUser = () => {
	const [username, setUsername] = useState<string | undefined>(undefined);
	useEffect(() => setUsername(getUser()), []);

	return username;
};

export const getRole = () => {
	if (typeof window === "undefined") return "";
	const username = document.cookie
		.split("; ")
		.find((row) => row.startsWith("dawdle-role-client="))
		?.split("=")[1];

	return username;
};
