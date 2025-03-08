import { ColumnDef } from "@tanstack/react-table";

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export interface SimpleTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  title?: string;
  filterable?: boolean;
  exportable?: boolean;
  toolbarActions?: React.ReactNode;
  addItemModalHandler?: () => void;
}
