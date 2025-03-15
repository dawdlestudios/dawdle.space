import { useRef, useState } from "react";

import { navigate } from "astro:transitions/client";
import type { FileStat, WebDAVClient } from "webdav";

import styles from "./styles.module.css";

import { useQuery } from "../../utils/query";
import { stripPrefix, useSite, useWebDav } from "../../utils/webdav";
import { ContextMenu } from "./context-menu";
import { type FileType, icons } from "./icons";
import { formatSize, sortFiles } from "./util";

export type DawdleFile = {
	name: string;
	fullPath: string;
	type: FileType;
	size: number;
	lastModified: number;
};

const toFile = (file: FileStat): DawdleFile => ({
	name: file.basename,
	fullPath: file.filename,
	type: file.type,
	size: file.size,
	lastModified: +new Date(file.lastmod),
});

export const FileBrowser = () => {
	const { path: dir, setPath: setDir, siteId } = useSite();
	const webdav = useWebDav(siteId);
	const uploadRef = useRef<HTMLInputElement>(null);

	const {
		data: files,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["webdav", "dir", dir],
		queryFn: async () => {
			const files = (await webdav.getDirectoryContents(dir)) as FileStat[];
			return sortFiles(files.map(toFile));
		},
	});

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const promises = Array.from(e.target.files)
			.filter((file) => file)
			.map(async (file) => webdav.putFileContents(`${dir}/${file.name}`, await file.arrayBuffer()));

		e.target.value = "";
		Promise.all(promises).then(() => refetch());
	};

	return (
		<div className={styles.root}>
			<div>
				<BreadCrumbs goto={setDir} path={dir} />
			</div>
			{/* allow multiple files */}
			<input
				type="file"
				ref={uploadRef}
				onChange={handleUpload}
				style={{ display: "none" }}
				multiple
			/>
			<Directory
				webdav={webdav}
				canGoBack={dir !== ""}
				goBack={() => {
					const newDir = dir.split("/").slice(0, -1).join("/");
					setDir(newDir);
				}}
				loading={isLoading}
				files={files || []}
				path={dir}
				refresh={refetch}
				onUploadFile={() => uploadRef.current?.click()}
				onClickFile={(file) => {
					if (file.type === "directory") return setDir(file.fullPath);
					navigate(`/edit/${siteId}/${stripPrefix(file.fullPath)}`);
				}}
			/>
		</div>
	);
};

const DOT_DOT_FILE: DawdleFile = {
	name: "..",
	fullPath: "..",
	type: "directory",
	size: 0,
	lastModified: 0,
};

const Directory = (props: {
	loading: boolean;
	files: DawdleFile[];
	onClickFile: (file: DawdleFile) => void;
	onUploadFile: () => void;
	canGoBack: boolean;
	path: string;
	goBack: () => void;
	refresh: () => void;
	webdav: WebDAVClient;
}) => {
	if (props.loading) {
		return (
			<div className={styles.items}>
				<div className={styles.loading} />
			</div>
		);
	}

	return (
		<div className={styles.items}>
			{props.canGoBack && (
				<FileBrowserItem fileIndex={-1} key=".." file={DOT_DOT_FILE} onClick={props.goBack} />
			)}

			<ContextMenu
				onUploadFile={props.onUploadFile}
				refresh={props.refresh}
				onEdit={(file) => {
					navigate(`/user/edit#${file.fullPath}`);
				}}
				onRemove={(file) => {
					props.webdav.deleteFile(file.fullPath);
					props.refresh();
				}}
				onMove={(file, newPath) => {
					props.webdav.moveFile(file.fullPath, newPath);
					props.refresh();
				}}
				onCreateFile={(name) => {
					props.webdav.putFileContents(`${props.path}/${name}`, "");
					props.refresh();
				}}
				onCreateFolder={(name) => {
					props.webdav.createDirectory(`${props.path}/${name}`);
					props.refresh();
				}}
				items={props.files.map((file, i) => ({
					file,
					element: (
						<FileBrowserItem
							fileIndex={i}
							key={file.name}
							file={file}
							onClick={() => props.onClickFile(file)}
						/>
					),
				}))}
			/>
		</div>
	);
};

const BreadCrumbs = ({ path }: { path: string; goto: (path: string) => void }) => {
	const crumbs = path.split("/").filter((crumb) => crumb !== "");

	return (
		<div className={styles.breadcrumbs}>
			<button type="button" className={styles.crumb}>
				<span className={styles.slash}>{"/"}</span>
			</button>

			{crumbs.map((crumb) => (
				<button type="button" key={crumb} className={styles.crumb}>
					{crumb}
					<span className={styles.slash}>{"/"}</span>
				</button>
			))}
		</div>
	);
};

const FileBrowserItem = ({
	file,
	fileIndex,
	onClick,
}: { file: DawdleFile; fileIndex: number; onClick: () => void }) => {
	return (
		<button type="button" className={styles.item} onClick={onClick} data-file={fileIndex}>
			{file.name === ".." ? (
				<FileIcon type=".." className={styles.icon} />
			) : (
				<FileIcon type={file.type} className={styles.icon} />
			)}
			<h1 className={styles.name}>
				{file.name}
				{file.type !== "directory" && <span>({formatSize(file.size)})</span>}
			</h1>
			<h3 className={styles.date}>
				{!!file.lastModified &&
					Intl.DateTimeFormat("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					}).format(file.lastModified)}
			</h3>
		</button>
	);
};

const FileIcon = ({ type, className }: { className: string; type: keyof typeof icons }) => {
	const File = icons[type];
	return <File className={className} />;
};
