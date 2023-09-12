import { useContext } from "react";
import { LightBoxContext } from "../../context";

interface PortfolioFilterProps {
  items?: string[];
}
const PortfolioFilter: React.FC<PortfolioFilterProps> = ({ items }) => {
  const { portfolioFilter, setPortfolioFilter } = useContext(LightBoxContext);
  return (
    <ul className="list-inline filter-control">
      {items?.length &&
        items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className={`list-inline-item ${
              portfolioFilter === item ? "tab-active" : ""
            }`}
            onClick={() => setPortfolioFilter(item)}
          >
            {item}
          </li>
        ))}
    </ul>
  );
};
export default PortfolioFilter;
