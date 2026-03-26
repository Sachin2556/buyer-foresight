const SortControls = ({ setSortField, setSortOrder }) => {
  return (
    <div>
      <select onChange={(e) => setSortField(e.target.value)}>
        <option value="name">Name</option>
        <option value="company">Company</option>
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortControls;