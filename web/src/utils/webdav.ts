import { useEffect, useState } from "react";
import { AuthType, type WebDAVClient, createClient } from "webdav";

export const createWebDavClient = (siteId: string): WebDAVClient =>
	createClient(`/api/webdav/${siteId}/`, {
		authType: AuthType.None,
	});

export const useWebDav = (siteId: string) => {
	const [webdav, setWebdav] = useState(() => createWebDavClient(siteId));

	useEffect(() => {
		setWebdav(createWebDavClient(siteId));
	}, [siteId]);

	return webdav;
};

export const useSite = () => {
	const siteId = window.location.pathname.split("/")[2];
	const [path, setPathInner] = useState(() => {
		const dir = window.location.pathname.split("/").slice(3).join("/");
		return dir;
	});

	const setPath = (dir: string) => {
		setPathInner(stripPrefix(dir));
		window.history.pushState({}, "", `/site/${siteId}/${stripPrefix(dir)}`);
	};

	return {
		siteId,
		path,
		setPath,
	};
};

export const stripPrefix = (path: string) => {
	if (path.startsWith("/")) return path.slice(1);
	return path;
};
