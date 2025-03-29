import { api } from "../../api";
import { useQuery } from "../../utils/query";
import styles from "./explore.module.css";

export const Explore = () => {
	const { data } = useQuery({
		queryKey: ["explore"],
		queryFn: () =>
			api["/api/public/sites"]
				.get()
				.json()
				.then((res) => res.sites),
		placeholderData: (prev) => prev,
	});
	const sites = data ?? [];

	return (
		<main>
			<ul className={styles.sites}>
				{sites.map((site) => {
					return (
						<li key={site.id}>
							<a
								href={`https://${site.customDomain || site.domain}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={`/api/screenshot/${site.id}`} aria-label="site screenshot" />
								<div className={styles.info}>
									<h2>{site.customDomain || site.domain}</h2>
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</main>
	);
};
