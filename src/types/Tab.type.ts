import { ProductStage } from "./ProductStage.type";

export interface Tab<T> {
  id: number;
  name: string;
  data: T[];
}
