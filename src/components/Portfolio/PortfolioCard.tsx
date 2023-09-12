export interface PortfolioCardProps {
  title: string;
  link: string;
  img: string;
  category: "Side Projects" | "Forage Virtual Work Experience"; // TODO: to constants
  tags: { name: string; bgColor: string }[];
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  img,
  category,
  tags,
}) => {
  return (
    <div className="single-item col-6 lg:col-4" data-category={category}>
      <div className="portfolio-wrapper">
        <img src={`/static/${img}`} alt="Item" className="portfolio-img" />
        <div className="item-content">
          <h6 className="content-title">{title}</h6>
          <a
            className="content-more"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      </div>
      <div className="item-tags">
        {tags?.length &&
          tags.map(({ name, bgColor }, idx) => (
            <span className={`tag ${bgColor}`} key={`${title}-${name}-${idx}`}>
              {name}
            </span>
          ))}
        {/* // <span className="tag">{category}</span> */}
      </div>
    </div>
  );
};
export default PortfolioCard;
