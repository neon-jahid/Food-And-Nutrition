import View from "@/views/BlogPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/blog", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
