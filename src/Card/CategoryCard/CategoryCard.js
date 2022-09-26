import "./Category.css";

function CategoryCard({ title, description, ...rest }) {
  return (
    <div className="category" {...rest}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default CategoryCard;
