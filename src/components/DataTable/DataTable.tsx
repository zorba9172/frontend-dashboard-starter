import React, { useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, type ColDef, type GridOptions, type GridReadyEvent, type GridApi, type RowClickedEvent, type SelectionChangedEvent, type CellClickedEvent } from 'ag-grid-community';
import { Box, Typography, TextField, InputAdornment, Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { palette, semantic } from '../../theme';

// Register all community modules once
ModuleRegistry.registerModules([AllCommunityModule]);

// ── Types ──
export interface DataTableProps<TData = any> {
  /** Column definitions — AG Grid ColDef[] */
  columnDefs: ColDef<TData>[];
  /** Row data array */
  rowData: TData[];
  /** Optional title shown above the table */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Show/hide the built-in search bar (default: true) */
  searchable?: boolean;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Show/hide CSV export button (default: false) */
  exportable?: boolean;
  /** Custom toolbar to the right of search */
  toolbar?: React.ReactNode;
  /** Table height — number (px) or string (default: 500) */
  height?: number | string;
  /** Enable row selection: 'single' | 'multiple' | false (default: false) */
  selection?: 'single' | 'multiple' | false;
  /** Callback when selection changes */
  onSelectionChanged?: (rows: TData[]) => void;
  /** Callback when a row is clicked */
  onRowClicked?: (data: TData) => void;
  /** Callback when a cell is clicked */
  onCellClicked?: (event: CellClickedEvent<TData>) => void;
  /** Callback when the grid is ready — exposes API */
  onGridReady?: (api: GridApi<TData>) => void;
  /** Override any AG Grid option */
  gridOptions?: Omit<GridOptions<TData>, 'columnDefs' | 'rowData'>;
  /** Loading state */
  loading?: boolean;
  /** Message when no rows */
  noRowsMessage?: string;
  /** Enable pagination (default: true) */
  pagination?: boolean;
  /** Page size (default: 10) */
  pageSize?: number;
  /** Animate rows on sort/filter (default: true) */
  animateRows?: boolean;
}

function DataTable<TData = any>({
  columnDefs,
  rowData,
  title,
  subtitle,
  searchable = true,
  searchPlaceholder = 'Search...',
  exportable = false,
  toolbar,
  height = 500,
  selection = false,
  onSelectionChanged,
  onRowClicked,
  onCellClicked,
  onGridReady,
  gridOptions,
  loading = false,
  noRowsMessage = 'No data to display',
  pagination = true,
  pageSize = 10,
  animateRows = true,
}: DataTableProps<TData>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const gridRef = useRef<AgGridReact<TData>>(null);

  // ── Theme-aware AG Grid CSS variables ──
  const themeOverrides = useMemo(() => ({
    '--ag-background-color': theme.palette.background.paper,
    '--ag-foreground-color': theme.palette.text.primary,
    '--ag-header-background-color': isDark ? '#1a1a1a' : '#fafafa',
    '--ag-header-foreground-color': theme.palette.text.primary,
    '--ag-row-hover-color': isDark ? 'rgba(136,108,192,0.08)' : 'rgba(136,108,192,0.04)',
    '--ag-selected-row-background-color': isDark ? 'rgba(136,108,192,0.15)' : 'rgba(136,108,192,0.08)',
    '--ag-border-color': theme.palette.divider,
    '--ag-secondary-border-color': theme.palette.divider,
    '--ag-odd-row-background-color': isDark ? '#1c1c1c' : '#fcfcfd',
    '--ag-font-family': theme.typography.fontFamily,
    '--ag-font-size': '14px',
    '--ag-grid-size': '6px',
    '--ag-row-height': '48px',
    '--ag-header-height': '44px',
    '--ag-cell-horizontal-padding': '16px',
    '--ag-active-color': palette.primary.main,
    '--ag-range-selection-border-color': palette.primary.main,
    '--ag-checkbox-checked-color': palette.primary.main,
    '--ag-input-focus-border-color': palette.primary.main,
    '--ag-alpine-active-color': palette.primary.main,
    '--ag-row-border-style': 'solid',
    '--ag-row-border-width': '1px',
    '--ag-row-border-color': theme.palette.divider,
    '--ag-header-column-separator-display': 'none',
    '--ag-wrapper-border-radius': '0',
    '--ag-border-radius': '0',
  } as React.CSSProperties), [isDark, theme]);

  // ── Default column settings ──
  const defaultColDef = useMemo<ColDef<TData>>(() => ({
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
    ...gridOptions?.defaultColDef,
  }), [gridOptions?.defaultColDef]);

  // ── Quick search ──
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    gridRef.current?.api?.setGridOption('quickFilterText', e.target.value);
  }, []);

  // ── Export CSV ──
  const handleExport = useCallback(() => {
    gridRef.current?.api?.exportDataAsCsv();
  }, []);

  // ── Grid ready ──
  const handleGridReady = useCallback((event: GridReadyEvent<TData>) => {
    event.api.sizeColumnsToFit();
    onGridReady?.(event.api);
  }, [onGridReady]);

  // ── Selection ──
  const handleSelectionChanged = useCallback((event: SelectionChangedEvent<TData>) => {
    if (onSelectionChanged) {
      const selectedRows = event.api.getSelectedRows();
      onSelectionChanged(selectedRows);
    }
  }, [onSelectionChanged]);

  // ── Row click ──
  const handleRowClicked = useCallback((event: RowClickedEvent<TData>) => {
    if (onRowClicked && event.data) {
      onRowClicked(event.data);
    }
  }, [onRowClicked]);

  return (
    <Box>
      {/* ── Header ── */}
      {(title || subtitle || searchable || exportable || toolbar) && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2,
          }}
        >
          {/* Title */}
          <Box>
            {title && (
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
                {subtitle}
              </Typography>
            )}
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {searchable && (
              <TextField
                size="small"
                placeholder={searchPlaceholder}
                onChange={handleSearch}
                sx={{
                  width: { xs: '100%', sm: 240 },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '1.75rem',
                    bgcolor: isDark
                      ? `rgba(255,255,255,0.04)`
                      : semantic.searchBgLight,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {exportable && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={handleExport}
                sx={{
                  borderColor: theme.palette.divider,
                  color: 'text.secondary',
                  borderRadius: '1.75rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: palette.primary.main,
                    color: palette.primary.main,
                  },
                }}
              >
                Export
              </Button>
            )}
            {toolbar}
          </Box>
        </Box>
      )}

      {/* ── Grid ── */}
      <Box
        className={isDark ? 'ag-theme-quartz-dark' : 'ag-theme-quartz'}
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: '100%',
          borderRadius: '0.625rem',
          overflow: 'hidden',
          border: `1px solid ${theme.palette.divider}`,
          ...themeOverrides,
        }}
      >
        <AgGridReact<TData>
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          animateRows={animateRows}
          pagination={pagination}
          paginationPageSize={pageSize}
          paginationPageSizeSelector={[10, 25, 50, 100]}
          rowSelection={selection ? { mode: selection === 'single' ? 'singleRow' : 'multiRow' } : undefined}
          onGridReady={handleGridReady}
          onSelectionChanged={selection ? handleSelectionChanged : undefined}
          onRowClicked={onRowClicked ? handleRowClicked : undefined}
          onCellClicked={onCellClicked}
          overlayLoadingTemplate={`<span style="color:${palette.primary.main}">Loading...</span>`}
          overlayNoRowsTemplate={`<span style="color:${theme.palette.text.secondary}">${noRowsMessage}</span>`}
          loading={loading}
          suppressCellFocus={true}
          enableCellTextSelection={true}
          {...gridOptions}
        />
      </Box>
    </Box>
  );
}

export default React.memo(DataTable) as typeof DataTable;
