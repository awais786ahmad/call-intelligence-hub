import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/dashboard/page-shell";

export const Route = createFileRoute("/_dashboard/reports")({
  head: () => ({
    meta: [
      { title: "Reports & analytics — Quality Dial" },
      { name: "description", content: "Team, campaign and AI agent performance analytics." },
      { property: "og:title", content: "Reports & analytics — Quality Dial" },
      { property: "og:description", content: "Team, campaign and AI agent performance analytics." },
    ],
  }),
  component: Page,
});

function Page() {
  return <PageShell title="Reports & analytics" description="Team, campaign and AI agent performance analytics." entity="report" />;
}
