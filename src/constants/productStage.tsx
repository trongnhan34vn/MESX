import { ProductStage } from "../types/ProductStage.type";

export const productStages: ProductStage[] = [
  {
    id: 1,
    stageCode: "A00310.003",
    name: "Làm rập",
    costCenter: "A00310 - Thiết kế - Design and pattern",
    procedure: "Design and pattern – Shirt sewing process",
    status: true,
    type: 'product-stage'
  },
  {
    id: 2,
    stageCode: "A00310.002",
    name: "Thiết kế rập",
    costCenter: "A00310 - Thiết kế - Design and pattern",
    procedure: "Design and pattern – Shirt sewing process",
    status: true,
    type: 'product-stage'
  },
  {
    id: 3,
    stageCode: "A00310.001",
    name: "Thiết kế mẫu áo sơ mi",
    costCenter: "A00310 - Thiết kế - Design and pattern",
    procedure: "Design and pattern – Shirt sewing process",
    status: true,
    type: 'product-stage'
  },
  {
    id: 4,
    stageCode: "A00300-005",
    name: "Hoàn tất và đóng gói",
    costCenter: "A00300 - Shirt sewing",
    procedure: "Shirt sewing process",
    status: true,
    type: 'product-stage'
  },
  {
    id: 5,
    stageCode: "A00300-004",
    name: "May chi tiết áo",
    costCenter: "A00300 - Shirt sewing",
    procedure: "Shirt sewing process",
    status: true,
    type: 'product-stage'
  },
]