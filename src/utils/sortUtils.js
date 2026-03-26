export const sortUsers = (users, field, order) => {
  return [...users].sort((a, b) => {
    const valA = field === "company" ? a.company.name : a[field];
    const valB = field === "company" ? b.company.name : b[field];

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });
};