import { Tab } from '../types/Tab.type';

export const generateStageTab = <T,> (list: T[], activeList: T[], inactiveList: T[]) => {
  let deviceStageTab: Tab<T>[] = [
    {
      id: 1,
      name: 'Tất cả',
      data: list,
    },
    {
      id: 2,
      name: 'Hoạt động',
      data: activeList
    },
    {
      id: 3,
      name: 'Tạm dừng',
      data: inactiveList,
    },
  ];
  return deviceStageTab;
};