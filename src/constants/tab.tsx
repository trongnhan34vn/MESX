import { ProductStage } from "../types/ProductStage.type";
import { Tab } from "../types/Tab.type";

export const productStageTabs: Tab<ProductStage>[] = [
  {
    id: 1,
    name: "Tất cả",
    data: [
      {
        id: 1,
        stageCode: "A00310.003",
        name: "Làm rập",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 2,
        stageCode: "A00310.002",
        name: "Thiết kế rập",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 3,
        stageCode: "A00310.004",
        name: "Thiết kế áo sơ mi",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 4,
        stageCode: "A00310.006",
        name: "Hoàn tất và đóng gói",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
    ],
  },
  {
    id: 2,
    name: "Hoạt động",
    data: [
      {
        id: 1,
        stageCode: "A00310.003",
        name: "Làm rập",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 2,
        stageCode: "A00310.002",
        name: "Thiết kế rập",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 3,
        stageCode: "A00310.004",
        name: "Thiết kế áo sơ mi",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
      {
        id: 4,
        stageCode: "A00310.006",
        name: "Hoàn tất và đóng gói",
        costCenter: "A00310 - Thiết kế - Design and pattern",
        procedure: "Design and pattern – Shirt sewing process",
        status: true,
        type: "product-stage",
      },
    ],
  },
  {
    id: 3,
    name: "Tạm dừng",
    data: [],
  },
];
