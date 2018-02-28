import url from "url";

export default function isUrlNextJsPage(resourceUrl) {
  try {
    const { pathname: resourcePathname } = url.parse(resourceUrl);
    if (
      resourcePathname.startsWith("/_next") ||
      resourcePathname.startsWith("_next")
    ) {
      if (resourcePathname.includes("/page")) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}
