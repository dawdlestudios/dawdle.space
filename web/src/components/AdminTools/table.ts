import {
	CellStyleModule,
	ClientSideRowModelModule,
	ColumnAutoSizeModule,
	ModuleRegistry,
	ValidationModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([
	ClientSideRowModelModule,
	ValidationModule,
	ColumnAutoSizeModule,
	CellStyleModule,
]);
