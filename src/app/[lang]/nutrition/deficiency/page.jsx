import View from "@/views/DeficiencyPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/nutrition/deficiency", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
