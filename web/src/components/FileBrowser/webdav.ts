import { useEffect, useState } from "react";
import { AuthType, createClient, type WebDAVClient } from "webdav";

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
