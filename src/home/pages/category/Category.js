import { useState, useEffect } from "react";
import CategoryCard from "../../../Card/CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5852/api/category/categories")
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      });
  }, []);

  const renderData = category?.map(({ title, description, id }) => (
    <CategoryCard
      key={id}
      title={title}
      description={description}
      onClick={() => navigate(`quiz/${id}`)}
    />
  ));
  return <div>{renderData}</div>;
}
export default Category;
