import View from "@/views/ToolsPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/tools", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
