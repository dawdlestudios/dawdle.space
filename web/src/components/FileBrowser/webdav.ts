import { useEffect, useState, useTransition } from "react";
import { AuthType, createClient, type WebDAVClient } from "webdav";

export const createWebDavClient = (siteId: string): WebDAVClient =>
	createClient(`/api/webdav/${siteId}/`, {
		authType: AuthType.None,
	});

export const useWebDav = (siteId: string) => {
	const [webdav, setWebdav] = useState(() => createWebDavClient(siteId));
	const [directory, setDirectory] = useState("");

	useEffect(() => {
		setWebdav(createWebDavClient(siteId));
		setDirectory("");
	}, [siteId]);

	const changeDirectory = (dir: string) => {
		setDirectory(dir);
	};

	return {
		webdav,
		directory,
		changeDirectory,
	};
};
