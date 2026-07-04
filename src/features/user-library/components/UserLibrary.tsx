import {
  ListHeartIcon,
  SquaresFourIcon,
  EyeIcon,
  CheckFatIcon,
  BookmarkIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router";
import {
  useLibraryByStatus,
  useFavorites,
  useRated,
} from "@/hooks/useAnimeLibrary";
import LibraryGrid from "./LibraryGrid";
import OverviewTab from "./OverviewTab";

const tabs = [
  { value: "overview", label: "Overview", icon: <SquaresFourIcon /> },
  { value: "favorite", label: "Favorites", icon: <ListHeartIcon /> },
  { value: "watchlist", label: "Watchlist", icon: <BookmarkIcon /> },
  { value: "watching", label: "Watching", icon: <EyeIcon /> },
  { value: "completed", label: "Completed", icon: <CheckFatIcon /> },
  { value: "rated", label: "Rated", icon: <StarIcon /> },
] as const;

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
        className="w-full no-scrollbar justify-start overflow-x-auto whitespace-nowrap shadow-[0_1px_0_0_var(--muted)]"
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="text-base">
            {tab.icon}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview"><OverviewTab /></TabsContent>
      <TabsContent value="favorite"><FavoritesTab /></TabsContent>
      <TabsContent value="watchlist"><WatchlistTab /></TabsContent>
      <TabsContent value="watching"><WatchingTab /></TabsContent>
      <TabsContent value="completed"><CompletedTab /></TabsContent>
      <TabsContent value="rated"><RatedTab /></TabsContent>
    </Tabs>
  );
}
