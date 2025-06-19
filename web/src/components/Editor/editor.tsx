import { type Ref, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

import { Editor as EditorMonaco, type OnMount } from "@monaco-editor/react";
import { ArrowLeft, Loader, Save } from "lucide-react";

import { disabledFileTypes } from "./disabled-files";
import styles from "./editor.module.css";

import type { editor } from "monaco-editor";
import type { FileStat, WebDAVClient } from "webdav";
import { useSite } from "../../utils/hooks";
import { queryClient, useQuery } from "../../utils/query";
import { useSiteProps, useWebDav } from "../../utils/webdav";

const zshFiles = [".zshrc", ".zshenv", ".zprofile", ".zlogin", ".zlogout", ".zsh", ".zsh-theme"];
const dawdleTheme: editor.IStandaloneThemeData = {
	base: "vs-dark",
	inherit: true,
	rules: [],
	colors: { "editor.background": "#080f14" },
};

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
	const { path, siteDomain } = useSiteProps();
	const { site, isLoading } = useSite(siteDomain);
	const webdav = useWebDav(site?.id);
	const editorRef = useRef<EditorInnerRef>(null);
	const [isSaving, setIsSaving] = useState(false);

	const {
		data,
		isLoading: fileIsLoading,
		error,
	} = useQuery({
		enabled: !!webdav && !!path && !isLoading,
		queryKey: ["webdav", path, site?.id],
		queryFn: () => webdav && loadFile(path as string, webdav),
	});

	const saveData = useCallback(
		(newData: string) => {
			if (!webdav || !path || !newData) return;

			setIsSaving(true);
			const now = new Date();
			saveFile(path, newData, webdav).then(() => {
				queryClient.invalidateQueries({ queryKey: ["webdav", path, site?.id] });
				setTimeout(() => setIsSaving(false), Math.max(0, 200 - (Date.now() - now.getTime())));
			});
		},
		[webdav, path, site],
	);

	let loadingMessage = null;
	if (disabledFileTypes.includes(path?.split(".").pop() || ""))
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
				<button
					type="button"
					onClick={() => editorRef.current?.triggerSave()}
					data-is-saving={isSaving && "true"}
					className={styles.save}
				>
					<div className={styles.loader}>
						<Loader size={17} />
					</div>
					<Save size={17} />
					Save
				</button>
			</nav>
			<div>
				{loadingMessage && loadingMessage}
				{error && !loadingMessage && <div className={styles.error}>{error.message}</div>}
				{webdav &&
					data !== undefined &&
					!isLoading &&
					!fileIsLoading &&
					!error &&
					!loadingMessage && (
						<EditorInner
							initialData={data ?? ""}
							path={path}
							ref={editorRef}
							webdav={webdav}
							saveData={(data) => saveData(data)}
						/>
					)}
			</div>
		</div>
	);
};

type EditorInnerRef = {
	triggerSave: () => void;
};

export const EditorInner = ({
	webdav,
	initialData,
	path,
	ref,
	saveData,
}: {
	webdav: WebDAVClient;
	initialData: string;
	path: string;
	ref: Ref<EditorInnerRef>;
	saveData: (data: string) => void;
}) => {
	const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);

	const onSave = useCallback(() => {
		const value = editorRef.current?.getValue();
		saveData(value || "");
	}, [saveData]);

	useImperativeHandle(
		ref,
		() => ({
			triggerSave: onSave,
		}),
		[onSave],
	);

	useEffect(() => {
		return () => {
			editorRef.current?.dispose();
		};
	}, []);

	const onMount: OnMount = (editor, monaco) => {
		if (!path || !webdav) return;

		for (const model of monaco.editor.getModels()) {
			model.dispose();
		}

		editor.setModel(null);
		let lang: string | undefined;
		if (zshFiles.includes(path.split("/").pop() as string)) lang = "shell";

		editor.setModel(monaco.editor.createModel(initialData || "", lang, monaco.Uri.file(path)));

		editorRef.current = editor;
		monaco.editor.defineTheme("dawdle", dawdleTheme);
		monaco.editor.setTheme("dawdle");
		monaco.editor.addCommand({ id: "save", run: onSave });

		monaco.editor.addKeybindingRule({
			keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
			command: "save",
		});
	};

	return (
		<EditorMonaco
			onMount={onMount}
			options={{
				fontFamily: "monospace",
				padding: { top: 20 },
				model: null,
			}}
		/>
	);
};
