import { navigate } from "astro:transitions/client";
import { FolderIcon, FolderPlusIcon } from "lucide-react";
import { api } from "../../api";
import { useQuery } from "../../utils/query";
import { Dialog } from "../ui/dialog";
import styles from "./sites.module.css";

export const UserSites = () => {
	const { data } = useQuery({
		queryKey: ["sites"],
		placeholderData: (prev) => prev,
		queryFn: () => api["/api/me/sites"].get().json(),
	});

	const createSite = (formData: FormData) => {
		const siteName = formData.get("site-name") as string;
		const makePublic = formData.get("make-public") === "on";

		api["/api/me/site"]
			.post({
				json: {
					name: `${siteName}.dawdle.space`,
					hidden: !makePublic,
				},
			})
			.json()
			.then((_site) => {
				navigate(`/site/${siteName}`);
			})
			.catch(() => {
				const siteNameInput = document.getElementById("site-name") as HTMLInputElement;
				siteNameInput.setCustomValidity("This site name is already taken");
				siteNameInput.reportValidity();
				siteNameInput.setCustomValidity("");
			});
	};

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
							const formData = new FormData(e.currentTarget);
							createSite(formData);
						}}
						className={styles.form}
					>
						<div>
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
							<p>
								Choose a name where your new site will be available from (letters, numbers, and
								dashes only).
								{/* You can also use a custom domain later. */}
							</p>

							<div>
								<input id="make-public" type="checkbox" name="make-public" defaultChecked />
								<label htmlFor="make-public">Show this site on dawdle.space</label>
							</div>
						</div>
						<button type="submit">Create your new site</button>
					</form>
				</Dialog>
			</ul>
		</main>
	);
};
