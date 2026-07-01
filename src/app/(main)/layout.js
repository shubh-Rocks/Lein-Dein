import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="min-h-[70px]">
        <Navbar />
      </nav>
      <main> {children}</main>
    </>
  );
}
