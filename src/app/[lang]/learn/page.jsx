import View from "@/views/LearnPage.jsx";
import { staticRoute } from "@/routeKit.jsx";

const route = staticRoute("/learn", <View />);

export const generateMetadata = route.generateMetadata;
export default route.Page;
