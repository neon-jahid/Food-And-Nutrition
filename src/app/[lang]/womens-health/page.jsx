import View from "@/views/GenderHealthPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/womens-health", <View who="women" />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
