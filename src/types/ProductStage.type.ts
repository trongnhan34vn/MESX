export interface ProductStage {
  id: number;
  stageCode: string;
  name: string;
  costCenter: string;
  procedure: string;
  status: boolean;
  type: 'product-stage'
}