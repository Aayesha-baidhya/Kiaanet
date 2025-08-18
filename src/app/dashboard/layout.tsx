import Navbar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen flex max-w-screen">
      {/* Sidebar (fixed on the left) */}
      <div>
        <SideBar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-x-hidden">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar />
        </div>
        {/* Scrollable children */}
        <div className="overflow-auto p-4">{children}</div>
      </div>
    </section>
  );
}
