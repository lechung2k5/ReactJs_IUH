import { useCallback, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const API_URL = "list.json";

  const fetchData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);


  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  const handlePost = () => {
    const newData = {
      id: Date.now(),
      title: "OOP",
      category: "backend",
    };

    setData((prev) => [...prev, newData]);
  };

  const handleGet = () => {
    fetchData();
  };

  const handleDelete = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <h2>Search + Category Filter</h2>
      <input
        type="text"
        placeholder="Search post..."
        onChange={handleSearch}
        value={searchTerm}
      />

     
      <select onChange={handleCategory} value={category}>
        <option value="All">All</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="database">Database</option>
      </select>


      {filteredData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
        </div>
      ))}

      <hr />

      <button onClick={handlePost}>Post</button>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default App;