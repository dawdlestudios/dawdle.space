import { api } from "../../api";
import { useQuery } from "../../utils/query";
import styles from "./sites.module.css";

export const UserSites = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["sites"],
		queryFn: () => api["/api/me/sites"].get().json(),
	});

	console.log(data);

	return <main className={styles.main}>xd</main>;
};
