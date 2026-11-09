import View from "@/views/NutrientsPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/nutrition/minerals", <View kind="minerals" />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
