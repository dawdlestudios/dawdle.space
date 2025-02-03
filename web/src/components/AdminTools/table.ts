import {
	ModuleRegistry,
	ClientSideRowModelModule,
	ValidationModule,
	ColumnAutoSizeModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, ColumnAutoSizeModule]);
