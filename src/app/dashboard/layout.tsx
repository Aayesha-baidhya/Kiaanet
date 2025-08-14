import Navbar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex flex-col flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </section>
  );
}
