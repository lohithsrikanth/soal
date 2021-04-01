export const cohorts = [
  { _id: 1, name: "Apex" },
  { _id: 2, name: "Pinnacle" },
  { _id: 3, name: "Zenith" },
  { _id: 4, name: "Summit" },
];

export function getCohorts() {
  return cohorts.filter((g) => g);
}
