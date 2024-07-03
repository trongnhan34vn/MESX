import React from "react";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

const TableActionItem = () => {
  return (
    <div className="flex gap-4 py-2">
      <button>
        <FaEye />
      </button>
      <button>
        <FaPenAlt />
      </button>
      <button>
        <FaTrashAlt />
      </button>
      <button>
        <IoMdLock />
      </button>
    </div>
  );
};

export default TableActionItem;
