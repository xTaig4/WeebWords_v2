
const Search: React.FC = () => {
  return (
    <div
      className="flex items-center p-5"
      style={{ background: "var(--container-bg)" }}
    >
      <div className="flex w-full gap-3 shadow-lg">
        <label>Anime</label>
        <input
          type="text"
          placeholder="Search for a quote..."
          className="w-120 rounded-lg text-black"
          style={{ background: "var(--input-bg)" }}
        ></input>
        <label>Character</label>
        <input
          type="text"
          placeholder="Search for a character..."
          className="w-120 rounded-lg text-black"
          style={{ background: "var(--input-bg)" }}
        ></input>
      </div>
      
    </div>
  );
};
export default Search;
