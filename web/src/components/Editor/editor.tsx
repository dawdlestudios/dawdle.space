import { useEffect, useRef, useState } from "react";

import { Editor as EditorMonaco, type OnMount } from "@monaco-editor/react";
import { ArrowLeft, Save } from "lucide-react";

import { getUser } from "../../utils/auth";
import { disabledFileTypes } from "./disabled-files";
import styles from "./editor.module.css";

import type { editor } from "monaco-editor";
import type { FileStat, WebDAVClient } from "webdav";
import { useQuery } from "../../utils/query";
import { useSite, useWebDav } from "../../utils/webdav";

const zshFiles = [".zshrc", ".zshenv", ".zprofile", ".zlogin", ".zlogout", ".zsh", ".zsh-theme"];
const dawdleTheme: editor.IStandaloneThemeData = {
	base: "vs-dark",
	inherit: true,
	rules: [],
	colors: { "editor.background": "#080f14" },
};

const user = getUser();

const loadFile = async (path: string, webdav: WebDAVClient) => {
	const size = (await webdav.stat(path)) as FileStat;

	// 1MB
	if (size.size > 1000000) {
		return null;
	}

	const content = await webdav.getFileContents(path, {
		format: "text",
	});
	return content as string;
};

const saveFile = async (path: string, content: string, webdav: WebDAVClient) => {
	await webdav.putFileContents(path, content, {
		overwrite: true,
	});
};

export const Editor = () => {
	const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
	const { siteId, path } = useSite();
	const webdav = useWebDav(siteId);

	const [active, setActive] = useState(false);

	const { data, isLoading, error } = useQuery({
		queryKey: ["webdav", path],
		queryFn: () => loadFile(path as string, webdav),
	});

	useEffect(() => {
		setActive(true);
		editorRef.current?.render();
		return () => editorRef.current?.dispose();
	}, []);

	const onSave = () => {
		const value = editorRef.current?.getValue();
		if (value && path) saveFile(path, value, webdav);
	};

	const onMount: OnMount = (editor, monaco) => {
		if (!path) return;

		for (const model of monaco.editor.getModels()) {
			model.dispose();
		}

		editor.setModel(null);

		let lang = undefined;
		if (zshFiles.includes(path.split("/").pop() as string)) lang = "shell";

		editor.setModel(monaco.editor.createModel(data || "", lang, monaco.Uri.file(path)));

		editorRef.current = editor;
		monaco.editor.defineTheme("dawdle", dawdleTheme);
		monaco.editor.setTheme("dawdle");
		monaco.editor.addCommand({ id: "save", run: onSave });

		monaco.editor.addKeybindingRule({
			keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
			command: "save",
		});
	};

	let loadingMessage = null;

	if (active && !path) loadingMessage = <div className={styles.error}>Missing file path.</div>;

	if (active && disabledFileTypes.includes(path?.split(".").pop() || ""))
		loadingMessage = <div className={styles.error}>File type not supported.</div>;

	return (
		<div className={styles.root}>
			<nav>
				<button type="button" onClick={() => window.history.back()}>
					<ArrowLeft size={17} />
					back
				</button>
				<h2>
					{path.split("/").map((part, i) => [
						<span key={`${part}-${i}-a`} className={styles.slash}>
							/
						</span>,
						<span key={`${part}-${i}-b`} className={styles.path}>
							{part}
						</span>,
					])}
				</h2>
				<button type="button" onClick={() => editorRef.current?.trigger(undefined, "save", undefined)}>
					<Save size={17} />
					Save
				</button>
			</nav>
			<div>
				{loadingMessage && loadingMessage}
				{error && !loadingMessage && <div className={styles.error}>{error.message}</div>}
				{!isLoading && !error && !loadingMessage && (
					<EditorMonaco
						onMount={onMount}
						options={{
							fontFamily: "Victor Mono Variable",
							padding: { top: 20 },
							model: null,
						}}
					/>
				)}
			</div>
		</div>
	);
};
