import url from "url";

const pattern = /(^\/)?_next\/[\w|\d|-]*\/page\/[a-zA-Z0-9_$-]+(\.js)?$/;

export default function isUrlNextJsPage(resourceUrl) {
  try {
    const { pathname: resourcePathname } = url.parse(resourceUrl);
    if (
      resourcePathname.startsWith("/_next") ||
      resourcePathname.startsWith("_next")
    ) {
      if (pattern.test(resourcePathname)) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}
