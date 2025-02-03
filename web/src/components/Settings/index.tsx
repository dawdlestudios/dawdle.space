import { useState } from "react";
import styles from "./settings.module.css";

import { api } from "../../api";
import { getRole, useUser } from "../../utils/auth";
import { useQuery } from "../../utils/query";

export const SettingsHeader = () => {
	const username = useUser();

	return (
		<main id="settings" className={styles.header}>
			<h2>
				{(username && `Welcome ${username}!`) || <>&nbsp;</>}
				{username && <a href={`https://${username}.dawdle.space`}>&#10697; {username}.dawdle.space</a>}
			</h2>
			{/* <p>
				You can upload files to your account below. Alternatively, you can also connect via{" "}
				<a href="/wiki/guide/ssh">SSH</a> or using a folder on your computer with{" "}
				<a href="/wiki/guide/webdav">WebDAV</a>. If your new here, check out the{" "}
				<a href="/wiki">wiki</a> for more information.
			</p> */}
		</main>
	);
};

export const UserSettings = () => {
	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ["me"],
		queryFn: () => api["/api/me"].get().json(),
	});

	const [changePasswordNote, setChangePasswordNote] = useState<string | null>(null);
	const [changeMinecraftNote, setChangeMinecraftNote] = useState<string | null>(null);

	if (isLoading) {
		return (
			<div className={styles.error}>
				<p>Loading...</p>
			</div>
		);
	}

	if (error || !data) {
		return (
			<div className={styles.error}>
				<p>An error occurred.</p>
			</div>
		);
	}

	const onChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const [currentPassword, newPassword] = [
			data.get("currentPassword") as string,
			data.get("newPassword") as string,
		];

		api["/api/me/password"]
			.post({
				json: {
					newPassword,
					oldPassword: currentPassword,
				},
			})
			.then(() => {
				setChangePasswordNote("Password changed successfully.");
				form.reset();
			})
			.catch((e) => {
				console.error(e);
				setChangePasswordNote("An error occurred. Is your current password correct?");
			});
	};

	const onMinecraftUsernameChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const username = data.get("minecraftUsername") as string;

		api["/api/me/game/minecraft/username"]
			.post({
				json: {
					username,
				},
			})
			.then(() => {
				setChangeMinecraftNote("Minecraft username updated successfully.");
				refetch();
			})
			.catch((e) => {
				console.error(e);
				setChangeMinecraftNote("An error occurred.");
			});

		return false;
	};

	return (
		<div className={styles.settings}>
			{getRole() === "admin" && (
				<a href="/admin" className={styles.adminLink}>
					<h2>Open Admin Panel</h2>
				</a>
			)}

			<form className={styles.formInline} onSubmit={onChangePassword}>
				<h2>
					Security
					<input type="submit" value="Save" />
				</h2>
				<label htmlFor="userPassword">Current password</label>
				<input
					name="currentPassword"
					id="userPassword"
					required
					type="password"
					autoComplete="current-password"
				/>
				<label htmlFor="newUserPassword">New password</label>
				<input
					id="newUserPassword"
					name="newPassword"
					minLength={10}
					required
					type="password"
					autoComplete="new-password"
				/>
				<div>{changePasswordNote && <p>{changePasswordNote}</p>}</div>
			</form>

			<form className={styles.formInline} onSubmit={onMinecraftUsernameChange}>
				<h2>
					Game Servers
					<input type="submit" value="Save" />
				</h2>
				<label htmlFor="minecraftUsername">Minecraft Username</label>
				<input
					defaultValue={data.minecraftUsername || ""}
					id="minecraftUsername"
					type="text"
					name="minecraftUsername"
				/>
				<div>{changeMinecraftNote && <p>{changeMinecraftNote}</p>}</div>
			</form>
		</div>
	);
};
