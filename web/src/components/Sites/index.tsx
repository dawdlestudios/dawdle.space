import { navigate } from "astro:transitions/client";
import { FolderIcon, FolderPlusIcon } from "lucide-react";
import { api } from "../../api";
import { useQuery } from "../../utils/query";
import styles from "./sites.module.css";
import { Dialog } from "../ui/dialog";
import { useState } from "react";

export const UserSites = () => {
	const { data } = useQuery({
		queryKey: ["sites"],
		placeholderData: (prev) => prev,
		queryFn: () => api["/api/me/sites"].get().json(),
	});

	return (
		<main className={styles.main}>
			<ul>
				{data?.map((site) => {
					return (
						<li
							key={site.id}
							className={styles.site}
							style={
								{
									"--background-image": `url("/api/screenshot/${site.id}")`,
								} as React.CSSProperties
							}
						>
							<button
								type="button"
								onClick={() =>
									navigate(`/site/${site.customDomain || site.domain.replace(".dawdle.space", "")}`)
								}
							>
								<div>
									<h2>{site.domain.replace(".dawdle.space", "")}</h2>
									<a href={`https://${site.domain}`}>&#10697;{site.domain}</a>
									<p>{site.customDomain}</p>
								</div>
								<FolderIcon size={30} color="white" />
							</button>
						</li>
					);
				})}

				<Dialog
					title="Create a new site"
					trigger={
						<li className={`${styles.site} ${styles.create}`}>
							<button type="button">
								<h2>Create a new site</h2>
								<FolderPlusIcon color="white" size={30} />
							</button>
						</li>
					}
				>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className={styles.form}
					>
						<div>
							<p>
								Choose a name where your new site will be available from (letters, numbers, and dashes only)
							</p>
							<div>
								<input
									id="site-name"
									type="text"
									name="site-name"
									placeholder="your-cool-site"
									required
									pattern="[a-zA-Z0-9\-]+"
								/>
								<span>.dawdle.space</span>
							</div>
						</div>
						<button type="submit">Create</button>
					</form>
				</Dialog>
			</ul>
		</main>
	);
};
