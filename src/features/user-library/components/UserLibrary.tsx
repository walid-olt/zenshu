import {
  ListHeartIcon,
  SquaresFourIcon,
  EyeIcon,
  CheckFatIcon,
  BookmarkIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "react-router";

const tabs = [
  {
    value: "overview",
    label: "Overview",
    icon: <SquaresFourIcon />,
    title: "Library overview",
    description: "Summary cards and quick activity will appear here.",
  },
  {
    value: "favorite",
    label: "Favorites",
    icon: <ListHeartIcon />,
    title: "Favorites",
    description: "Your liked anime list will live in this tab.",
  },
  {
    value: "watchlist",
    label: "Watchlist",
    icon: <BookmarkIcon />,
    title: "Watchlist",
    description: "Anime you plan to watch next will show here.",
  },
  {
    value: "watching",
    label: "Watching",
    icon: <EyeIcon />,
    title: "Watching now",
    description: "Track currently watched shows and episode progress.",
  },
  {
    value: "completed",
    label: "Completed",
    icon: <CheckFatIcon />,
    title: "Completed",
    description: "Finished anime history will appear in this section.",
  },
  {
    value: "rated",
    label: "Rated",
    icon: <StarIcon />,
    title: "Rated titles",
    description: "Your rated anime and scoring breakdown will show here.",
  },
] as const;

type PlaceholderProps = {
  title: string;
  description: string;
};

function LibraryTabPlaceholder({ title, description }: PlaceholderProps) {
  return (
    <div className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            key={index}
            className="rounded-lg border border-dashed border-border bg-background p-4"
          >
            <div className="h-4 w-2/3 rounded-full bg-muted" />
            <div className="mt-2 h-3 w-5/6 rounded-full bg-muted" />
            <div className="mt-1 h-3 w-3/5 rounded-full bg-muted" />
          </article>
        ))}
      </div>
    </div>
  );
}

export default function UserLibrary() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab");
  const active = tabs.find((t) => t.value === tab)?.value || "overview";
  return (
    <Tabs
      defaultValue={active}
      value={active}
      onValueChange={(v) => setParams({ tab: v })}
    >
      <TabsList
        variant="line"
        className="w-full justify-start overflow-x-auto whitespace-nowrap"
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="text-base">
            {tab.icon}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator className="my-4" />
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <LibraryTabPlaceholder
            title={tab.title}
            description={tab.description}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
