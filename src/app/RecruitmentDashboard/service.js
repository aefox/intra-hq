import { v4 } from 'uuid';

export const defaultCandidates = [
  { id: 1, name: 'Little Smith' },
  { id: 2, name: 'Crazy Joe' },
  { id: 3, name: 'Lucky Mi' },
  { id: 4, name: 'Lucky Yu' },
  { id: 5, name: 'Winnie The Pooh' },
  { id: 6, name: 'Lonely Guy' }
];

export const defaultDashboards = [
  {
    id: v4(),
    name: 'Developers',
    stages: [
      {
        id: v4(),
        name: 'Screening',
        candidates: [1]
      },
      {
        id: v4(),
        name: 'Interview',
        candidates: [2]
      },
      {
        id: v4(),
        name: 'Assessment',
        candidates: []
      },
      {
        id: v4(),
        name: 'Selection',
        candidates: [3, 4]
      },
      {
        id: v4(),
        name: 'Induction',
        candidates: [5]
      }
    ]
  },
  {
    id: v4(),
    name: 'HR dashboard',
    stages: [
      {
        id: v4(),
        name: 'stage 21',
        candidates: []
      },
      {
        id: v4(),
        name: 'stage 22',
        candidates: []
      }
    ]
  }
];

export const getDashboardById = id => {
  // this would be an ajax call to get the item
  const dashboards = JSON.parse(localStorage.getItem('dashboards'));
  const item = dashboards.find(dashboard => dashboard.id === id);
  return item;
};

export const getAllDashboards = () => {
  // this would be an ajax call to get the item
  const dashboards = JSON.parse(localStorage.getItem('dashboards'));
  if (!dashboards) {
    localStorage.setItem('dashboards', JSON.stringify(defaultDashboards));
    return defaultDashboards;
  }
  return dashboards;
};

export const addDashboard = dashboard => {
  // this would be an ajax call to add the item
  let dashboards = JSON.parse(localStorage.getItem('dashboards'));
  dashboards = dashboards.concat(dashboard);

  localStorage.setItem('dashboards', JSON.stringify(dashboards));
};

export const updateDashboard = dashboard => {
  // this would be an ajax call to update the item
  const allItems = getAllDashboards();
  const index = allItems.findIndex(obj => obj.id === dashboard.id);
  allItems[index] = dashboard;

  localStorage.setItem('dashboards', JSON.stringify(allItems));
};
