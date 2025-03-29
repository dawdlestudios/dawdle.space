import { useEffect, useState } from "react";
import { AuthType, type WebDAVClient, createClient } from "webdav";

export const createWebDavClient = (siteId: string): WebDAVClient =>
	createClient(`/api/webdav/${siteId}/`, {
		authType: AuthType.None,
	});

export const useWebDav = (siteId?: string) => {
	const [webdav, setWebdav] = useState<WebDAVClient>();

	useEffect(() => {
		if (siteId) setWebdav(createWebDavClient(siteId));
	}, [siteId]);

	return webdav;
};

export const useSiteProps = () => {
	const siteDomain = window.location.pathname.split("/")[2];
	const [path, setPathInner] = useState(() => {
		const dir = window.location.pathname.split("/").slice(3).join("/");
		return dir;
	});

	const setPath = (dir: string) => {
		setPathInner(stripPrefix(dir));
		window.history.pushState({}, "", `/site/${siteDomain}/${stripPrefix(dir)}`);
	};

	return {
		siteDomain,
		path,
		setPath,
	};
};

export const stripPrefix = (path: string) => {
	if (path.startsWith("/")) return path.slice(1);
	return path;
};
