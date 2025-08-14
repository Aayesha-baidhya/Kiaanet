import Navbar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex h-screen max-w-screen">
        <div>
          <SideBar />
        </div>
        <div className="flex-1 overflow-x-auto">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
