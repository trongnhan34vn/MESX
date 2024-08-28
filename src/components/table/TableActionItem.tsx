import React from 'react';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { IoMdLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type TableActionItemProps = {
  id: number,
  type: string
}

const TableActionItem = ({id, type}: TableActionItemProps) => {
  const navigate = useNavigate();

  const handleNavigate = (action: string, id: number, type: string) => {
    let path = `/app/${type}/${action}/${id}`;
    navigate(path);
  }

  return (
    <div className="flex gap-4 py-2">
      <button onClick={() => handleNavigate('detail', id, type)}>
        <FaEye />
      </button>
      <button onClick={() => handleNavigate('edit', id, type)}>
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
