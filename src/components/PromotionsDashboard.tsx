
import { DashboardHeader } from "./DashboardHeader";
import { PromotionsTable } from "./PromotionsTable";
import { Footer } from "./Footer";

export function PromotionsDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DashboardHeader />
          <div className="mt-8">
            <PromotionsTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
