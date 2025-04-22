import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  customItems?: {
    label: string;
    path: string;
  }[];
}

const Breadcrumbs = ({ customItems }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getPageTitle = (path: string) => {
    switch (path) {
      case "menu":
        return "Menu";
      case "about":
        return "Tentang Kami";
      case "contact":
        return "Kontak";
      case "detail":
        return "Detail";
      default:
        return path
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    }
  };

  // Gunakan customItems jika disediakan, jika tidak, gunakan pathnames
  const breadcrumbItems = customItems
    ? customItems
    : pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return {
          label: getPageTitle(name),
          path: routeTo,
          isLast,
        };
      });

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav className="container mx-auto px-4 py-3 text-sm">
      <ol
        className="flex flex-wrap items-center gap-2"
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
      >
        <li property="itemListElement" typeof="ListItem">
          <Link
            to="/"
            className="text-amber-600 hover:text-amber-800 transition-colors"
            property="item"
            typeof="WebPage"
          >
            <span property="name">Beranda</span>
          </Link>
          <meta property="position" content="1" />
          {breadcrumbItems.length > 0 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </li>

        {breadcrumbItems.map((item, index) => {
          const position = index + 2; // +2 karena Beranda adalah item pertama
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={item.path}
              property="itemListElement"
              typeof="ListItem"
              className={isLast ? "font-medium" : ""}
            >
              {isLast ? (
                <span property="name">{item.label}</span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                    property="item"
                    typeof="WebPage"
                  >
                    <span property="name">{item.label}</span>
                  </Link>
                  <meta property="position" content={position.toString()} />
                </>
              )}
              {!isLast && <span className="mx-2 text-gray-500">/</span>}
              {isLast && (
                <meta property="position" content={position.toString()} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
