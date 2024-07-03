import { ReactNode } from "react";

export type ColumnDefinition<T, K extends keyof T> = {
  name: string;
  key: K | null;
  render?: (data: T) => ReactNode
};

export type TableProps<T, K extends keyof T> ={
  columns: ColumnDefinition<T, K>[];
  data: T[];
}
