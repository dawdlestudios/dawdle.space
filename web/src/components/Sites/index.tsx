import { navigate } from "astro:transitions/client";
import { FolderIcon, FolderPlusIcon } from "lucide-react";
import { api } from "../../api";
import { useQuery } from "../../utils/query";
import styles from "./sites.module.css";

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
						<li key={site.id} className={styles.site}>
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

				<li className={`${styles.site} ${styles.create}`}>
					<a type="button" href="/site/create">
						<h2>Create a new site</h2>
						<FolderPlusIcon size={30} />
					</a>
				</li>
			</ul>
		</main>
	);
};
