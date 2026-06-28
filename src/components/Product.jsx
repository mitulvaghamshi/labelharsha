import "../styles/Product.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const ProductBadge = ({ badge }) => {
  const isOutOfStock = String(badge).toLowerCase().includes("out");
  return (
    <span
      className={`product-card-badge ${
        isOutOfStock ? "product-card-badge-oos" : ""
      }`}
    >
      {badge}
    </span>
  );
};

const PriceDisplay = ({ price, discount }) => {
  const originalPrice = price * (1 + (Number(discount) > 0 ? discount / 100 : 0));
  return (
    <div className="price-container">
      <span className="price-current">{currencyFormatter.format(price)}/-</span>
      {Number(discount) > 0 && (
        <>
          <span className="price-original">
            {currencyFormatter.format(originalPrice)}
          </span>
          <span className="price-discount">{discount} OFF</span>
        </>
      )}
    </div>
  );
};

const WhatsAppButton = ({ product, tag }) => {
  const message = encodeURIComponent(
    `Hi Label Harsha, I am interested in inquiring about the '${product} (${tag})'. Could you please share more details.`,
  );
  return (
    <a
      href={`https://wa.me/919033310101?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp"
    >
      <img
        src="icons/whatsapp.svg"
        width={"24px"}
        height={"24px"}
        alt="WhatsApp"
      />&nbsp;WhatsApp
    </a>
  );
};

// const ShareLinkButton = ({ tag }) => {
//     const shareUrl = `https://mitulvaghamshi.github.io/labelharsha/#/${encodeURIComponent(tag)}`;
//     const [copied, setCopied] = useState(false);

//     const handleCopy = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         navigator.clipboard.writeText(shareUrl).then(() => {
//             setCopied(true);
//             setTimeout(() => setCopied(false), 2000);
//         });
//     };

//     return (
//         <button className="btn-share" onClick={handleCopy}>
//             {copied ? 'Copied!' : 'Copy link'}
//         </button>
//     );
// };

export const ProductInfo = ({ item, onClick }) => {
  return (
    <div className="product-card-details">
      <ProductBadge badge={item.badge} />
      <span className="product-card-id">{item.tag}</span>
      <h3 className="product-card-title">{item.product}</h3>
      <span className="product-card-material">{item.material}</span>
      <p className="product-card-desc">{item.description}</p>
      <PriceDisplay price={item.price} discount={item.discount} />
      <WhatsAppButton product={item.product} tag={item.tag} />
    </div>
  );
};

export function Product({ item, isCarousel, onPrev, onNext, onOpen }) {
  // const navigate = useNavigate();

  // const handleNav = () => {
  //     navigate(`/#/${encodeURIComponent(item.tag)}`);
  // };

  const handleSlide = (action) => {
    const handler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      action();
    };
    return handler;
  };

  return (
    <div className="product-card" data-category={item.category}>
      <div className="product-card-img">
        <img
          src={`items-thumb/${item.image}`}
          alt={`${item.product} (${item.tag})`}
          onClick={() => onOpen(item)}
          loading="lazy"
        />
        {isCarousel && (
          <div className="slides-nav">
            {onPrev && (
              <button
                className="prev"
                aria-label="Previous Slide"
                onClick={handleSlide(onPrev)}
              >
                ❮
              </button>
            )}

            {onNext && (
              <button
                className="next"
                aria-label="Next Slide"
                onClick={handleSlide(onNext)}
              >
                ❯
              </button>
            )}
          </div>
        )}
      </div>
      <ProductInfo item={item} />
    </div>
  );
}
