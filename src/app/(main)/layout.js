import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main> {children}</main>
    </>
  );
}
