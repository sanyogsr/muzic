import { getServerSession } from "next-auth";
import LandingPage from "./components/LandingPage";
import Dashboard from "./dashboard/page";

export default async function Home() {
  const session = await getServerSession();
  if (!session?.user?.email) return <LandingPage />;
  else {
    return <Dashboard />;
  }
}
