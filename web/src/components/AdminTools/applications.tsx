import "./table";

import { AgGridReact, type CustomCellRendererProps } from "ag-grid-react";
import { EllipsisVerticalIcon } from "lucide-react";
import { api } from "../../api";
import { useQuery } from "../../utils/query";
import { Dropdown } from "../ui/dropdown";
import styles from "./style.module.css";

type Application = {
	about: string;
	approved: boolean;
	claim_token?: string;
	claimed: boolean;
	date: number;
	email: string;
	id: string;
	username: string;
};

export const AdminApplications = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["admin", "applications"],
		queryFn: () => api["/api/admin/applications"].get().json(),
	});

	if (isLoading)
		return (
			<div>
				<p>Loading...</p>
			</div>
		);

	return (
		<div className={`${styles.table}`} data-ag-theme-mode="dark">
			<AgGridReact
				gridOptions={{
					autoSizeStrategy: {
						type: "fitGridWidth",
					},
				}}
				rowData={data}
				columnDefs={[
					{
						headerName: "Date",
						field: "created_at",
						valueFormatter: (params) => Intl.DateTimeFormat("en-US").format(new Date(params.value)),
					},
					{
						headerName: "Username",
						editable: (c) => !c.data?.approved,
						onCellValueChanged: (e) => {
							api["/api/admin/application/{id}/username"]
								.post({
									json: {
										username: e.newValue,
									},
									params: { id: e.data.id },
								})
								.then(() => refetch())
								.catch((e) => console.error(e));
						},
						field: "username",
					},
					{
						headerName: "Email",
						maxWidth: 200,
						field: "email",
						editable: true,
					},
					{
						headerName: "About",
						field: "about",
						editable: true,
						maxWidth: 200,
						cellEditorPopup: true,
						cellEditor: "agLargeTextCellEditor",
					},
					{
						headerName: "Approved",
						field: "approved",
						cellRenderer: (ctx: CustomCellRendererProps) => (ctx.value ? "✅" : "❌"),
					},
					{
						headerName: "Claimed",
						field: "claimed",
						cellRenderer: (ctx: CustomCellRendererProps) => (ctx.value ? "✅" : "❌"),
					},
					{
						pinned: "right",
						lockPosition: true,
						sortable: false,
						resizable: false,
						width: 40,
						cellClass: styles.edit,
						cellRenderer: (ctx: CustomCellRendererProps) => {
							const application = ctx.data as Application;

							return (
								<Dropdown
									fields={[
										!application.approved && {
											label: "Approve",
											onClick: () => {
												// approveApplication(application.id)
												// 	.then(() => refetch())
												// 	.catch((e) => console.error(e))
												api["/api/admin/application/{id}/approve"]
													.post({
														params: { id: application.id },
													})
													.then(() => refetch())
													.catch((e) => console.error(e));
											},
										},
										application.approved &&
											!application.claimed && {
												label: "Unapprove",
												onClick: () => {
													api["/api/admin/application/{id}/unapprove"]
														.post({
															params: { id: application.id },
														})
														.then(() => refetch())
														.catch((e) => console.error(e));
												},
											},
										{
											label: "Delete",
											onClick: () => {
												api["/api/admin/application/{id}"]
													.delete({
														params: { id: application.id },
													})
													.then(() => refetch())
													.catch((e) => console.error(e));
											},
										},
										application.approved && {
											label: "Copy Claim Link",
											onClick: () => {
												navigator.clipboard.writeText(
													`https://dawdle.space/me/claim?token=${application.claim_token}&user=${application.username}`,
												);
											},
										},
									]}
								>
									<EllipsisVerticalIcon />
								</Dropdown>
							);
						},
					},
				]}
			/>
		</div>
	);
};
