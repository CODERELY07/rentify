import { TabProvider } from "@/context/tab-context";
import Provider from "../Provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <TabProvider>
       <Provider>{children}</Provider>
    </TabProvider>
 
  );
}
