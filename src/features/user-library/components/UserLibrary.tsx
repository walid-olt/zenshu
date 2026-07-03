import {
  ListHeartIcon,
  SquaresFourIcon,
  EyeIcon,
  CheckFatIcon,
  BookmarkIcon,
  StarIcon,
  BookOpenIcon,
  HeartStraightIcon,
} from "@phosphor-icons/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "react-router";
import {
  useAllLibrary,
  useLibraryByStatus,
  useFavorites,
  useRated,
} from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";

const tabs = [
  { value: "overview", label: "Overview", icon: <SquaresFourIcon /> },
  { value: "favorite", label: "Favorites", icon: <ListHeartIcon /> },
  { value: "watchlist", label: "Watchlist", icon: <BookmarkIcon /> },
  { value: "watching", label: "Watching", icon: <EyeIcon /> },
  { value: "completed", label: "Completed", icon: <CheckFatIcon /> },
  { value: "rated", label: "Rated", icon: <StarIcon /> },
] as const;

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  count: number;
};

function StatCard({ icon, label, count }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-semibold leading-none">{count}</p>
        <p className="mt-1 text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

function OverviewTab() {
  const all = useAllLibrary();
  const favorites = useFavorites();
  const watching = useLibraryByStatus("watching");
  const watchlist = useLibraryByStatus("to-watch");
  const completed = useLibraryByStatus("completed");
  const rated = useRated();

  const stats = [
    { icon: <BookOpenIcon size={18} />, label: "Total", count: all?.length ?? 0 },
    { icon: <HeartStraightIcon size={18} />, label: "Favorites", count: favorites?.length ?? 0 },
    { icon: <EyeIcon size={18} />, label: "Watching", count: watching?.length ?? 0 },
    { icon: <BookmarkIcon size={18} />, label: "Watchlist", count: watchlist?.length ?? 0 },
    { icon: <CheckFatIcon size={18} />, label: "Completed", count: completed?.length ?? 0 },
    { icon: <StarIcon size={18} />, label: "Rated", count: rated?.length ?? 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">Recently Added</h3>
        <LibraryGrid
          items={all?.slice().reverse().slice(0, 6)}
          emptyTitle="Your library is empty"
          emptyDescription="Start adding anime from the catalog or search"
        />
      </section>
    </div>
  );
}

function FavoritesTab() {
  const items = useFavorites();
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No favorites yet"
      emptyDescription="Heart anime you love to add them here"
    />
  );
}

function WatchlistTab() {
  const items = useLibraryByStatus("to-watch");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="Watchlist is empty"
      emptyDescription="Save anime as 'To Watch' to build your list"
    />
  );
}

function WatchingTab() {
  const items = useLibraryByStatus("watching");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="Nothing being watched"
      emptyDescription="Mark anime as 'Watching' to track progress"
    />
  );
}

function CompletedTab() {
  const items = useLibraryByStatus("completed");
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No completed anime"
      emptyDescription="Finished an anime? Mark it as completed"
    />
  );
}

function RatedTab() {
  const items = useRated();
  return (
    <LibraryGrid
      items={items}
      emptyTitle="No rated anime"
      emptyDescription="Rate anime you've watched to see them here"
    />
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
      <TabsContent value="overview"><OverviewTab /></TabsContent>
      <TabsContent value="favorite"><FavoritesTab /></TabsContent>
      <TabsContent value="watchlist"><WatchlistTab /></TabsContent>
      <TabsContent value="watching"><WatchingTab /></TabsContent>
      <TabsContent value="completed"><CompletedTab /></TabsContent>
      <TabsContent value="rated"><RatedTab /></TabsContent>
    </Tabs>
  );
}
