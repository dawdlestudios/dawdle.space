import {
	CellStyleModule,
	ClientSideRowModelModule,
	ColumnAutoSizeModule,
	LargeTextEditorModule,
	ModuleRegistry,
	TextEditorModule,
	ValidationModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([
	ClientSideRowModelModule,
	ValidationModule,
	ColumnAutoSizeModule,
	CellStyleModule,
	TextEditorModule,
	LargeTextEditorModule,
]);
