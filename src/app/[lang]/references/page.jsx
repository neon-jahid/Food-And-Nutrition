import View from "@/views/ReferencesPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/references", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
