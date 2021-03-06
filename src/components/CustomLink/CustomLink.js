import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ borderBottom: match ? "1px solid" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
