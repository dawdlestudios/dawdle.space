import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { Edit, FileIcon, FolderIcon, Trash, Upload } from "lucide-react";
import React, { useId, useRef, useState, type ReactElement } from "react";
import type { DawdleFile } from ".";
import { Dialog, type DialogRef } from "../ui/dialog";
import styles from "./context-menu.module.css";

export const ContextMenu = (props: {
	items: {
		element: ReactElement;
		file: DawdleFile;
	}[];
	refresh: () => void;

	onUploadFile: () => void;
	onEdit: (file: DawdleFile) => void;
	onRemove: (file: DawdleFile) => void;
	onMove: (file: DawdleFile, newPath: string) => void;

	onCreateFile: (name: string) => void;
	onCreateFolder: (name: string) => void;
}) => {
	const [target, setTarget] = useState<DawdleFile | null>(null);

	const refCreateNewFolder = useRef<DialogRef>(null);
	const refCreateNewFile = useRef<DialogRef>(null);
	const refRename = useRef<DialogRef>(null);
	const refDelete = useRef<DialogRef>(null);

	return (
		<>
			{!target && (
				<>
					<Dialog title="Create New Folder" ref={refCreateNewFolder}>
						<InputDialog
							buttonText="Create Folder"
							label="Folder Name"
							onCreate={(folder) => {
								props.onCreateFolder(folder);
								refCreateNewFolder.current?.setOpen(false);
							}}
						/>
					</Dialog>
					<Dialog title="Create New File" ref={refCreateNewFile}>
						<InputDialog
							buttonText="Create File"
							label="File Name"
							defaultValue="untitled.txt"
							onCreate={(name) => {
								props.onCreateFile(name);
								refCreateNewFile.current?.setOpen(false);
							}}
						/>
					</Dialog>
				</>
			)}
			{target && (
				<>
					<Dialog title="Rename" ref={refRename}>
						<InputDialog
							buttonText="Rename"
							label="New Name"
							defaultValue={target.name}
							onCreate={(newName) => {
								const newPath = target.fullPath.replace(new RegExp(`${target.name}$`), newName);
								props.onMove(target, newPath);
								refRename.current?.setOpen(false);
							}}
						/>
					</Dialog>
					<Dialog
						title={`Delete ${target.type === "directory" ? "Folder" : "File"}`}
						ref={refDelete}
					>
						<DeleteDialog
							file={target}
							onDelete={() => {
								props.onRemove(target);
								refDelete.current?.setOpen(false);
							}}
							onCancel={() => {
								refDelete.current?.setOpen(false);
							}}
						/>
					</Dialog>
				</>
			)}

			<RadixContextMenu.Root modal={false}>
				<RadixContextMenu.Trigger
					className={styles.ContextMenuTrigger}
					onContextMenu={(e) => {
						if (!(e.target instanceof HTMLElement)) return setTarget(null);

						const file_idx = e.target?.getAttribute("data-file");
						if (file_idx && props.items.length > Number.parseInt(file_idx, 10)) {
							const file = props.items[Number.parseInt(file_idx, 10)].file;
							setTarget(file);
							return;
						}

						setTarget(null);
					}}
				>
					{props.items.map((child) => child.element)}
				</RadixContextMenu.Trigger>
				<RadixContextMenu.Portal>
					<RadixContextMenu.Content className={styles.ContextMenuContent}>
						{!target && (
							<>
								<RadixContextMenu.Item
									className={styles.ContextMenuItem}
									onSelect={() => refCreateNewFolder.current?.setOpen(true)}
								>
									Create New Folder
									<div className={styles.RightSlot}>
										<FolderIcon size={16} />
									</div>
								</RadixContextMenu.Item>
								<RadixContextMenu.Item
									className={styles.ContextMenuItem}
									onSelect={() => refCreateNewFile.current?.setOpen(true)}
								>
									Create New File
									<div className={styles.RightSlot}>
										<FileIcon size={16} />
									</div>
								</RadixContextMenu.Item>

								<RadixContextMenu.Item
									onSelect={() => {
										props.onUploadFile();
									}}
									className={styles.ContextMenuItem}
								>
									Upload Files
									<div className={styles.RightSlot}>
										<Upload size={16} />
									</div>
								</RadixContextMenu.Item>
							</>
						)}
						{target && (
							<>
								<RadixContextMenu.Item
									onSelect={() => refRename.current?.setOpen(true)}
									className={styles.ContextMenuItem}
								>
									Rename
									<div className={styles.RightSlot}>
										<Edit size={16} />
									</div>
								</RadixContextMenu.Item>
								<RadixContextMenu.Item
									onSelect={(_e) => refDelete.current?.setOpen(true)}
									className={styles.ContextMenuItem}
								>
									{target.type === "directory" ? "Delete Folder" : "Delete File"}
									<div className={styles.RightSlot}>
										<Trash size={16} />
									</div>
								</RadixContextMenu.Item>
							</>
						)}
						{target && target.type !== "directory" && (
							<>
								<RadixContextMenu.Item
									className={styles.ContextMenuItem}
									onSelect={() => {
										props.onEdit(target);
									}}
								>
									Edit
									<div className={styles.RightSlot}>
										<Edit size={16} />
									</div>
								</RadixContextMenu.Item>
								<RadixContextMenu.Item
									className={styles.ContextMenuItem}
									onSelect={() => {
										window.open(`/api/webdav/${target.fullPath}`, "_blank");
									}}
								>
									Download/Open
									<div className={styles.RightSlot}>
										<Edit size={16} />
									</div>
								</RadixContextMenu.Item>
							</>
						)}
					</RadixContextMenu.Content>
				</RadixContextMenu.Portal>
			</RadixContextMenu.Root>
		</>
	);
};

const DeleteDialog = (props: { onDelete: () => void; file: DawdleFile; onCancel: () => void }) => {
	return (
		<div className={styles.Form}>
			<p>
				Are you sure you want to delete this {props.file.type === "directory" ? "folder" : "file"}?
			</p>
			<div>
				<input disabled value={props.file.fullPath} />
			</div>{" "}
			<button type="button" onClick={props.onDelete}>
				Delete
			</button>
			<button data-secondary type="button" onClick={props.onCancel}>
				Cancel
			</button>
		</div>
	);
};

const InputDialog = (props: {
	label: string;
	description?: string;
	buttonText: string;
	defaultValue?: string;
	onCreate: (name: string) => void;
}) => {
	const [name, setName] = React.useState(props.defaultValue || "");
	const id = useId();

	return (
		<div className={styles.Form}>
			{props.description && <p>{props.description}</p>}
			<div>
				<label htmlFor={id}>{props.label}</label>
				<input id={id} value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<button type="submit" onClick={() => props.onCreate(name)}>
				{props.buttonText}
			</button>
		</div>
	);
};
