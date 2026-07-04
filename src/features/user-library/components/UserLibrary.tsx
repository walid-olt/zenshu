import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BookmarkIcon,
    CheckFatIcon,
    EyeIcon,
    ListHeartIcon,
    SquaresFourIcon,
    StarIcon,
} from "@phosphor-icons/react";
import { useSearchParams } from "react-router";
import CompletedTab from "./CompletedTab.tsx";
import FavoritesTab from "./FavoritesTab.tsx";
import OverviewTab from "./OverviewTab";
import RatedTab from "./RatedTab.tsx";
import  WatchlistTab from "./WatchlistTab.tsx";
import WatchingTab from "./WatchingTab.tsx";

const tabs = [
  { value: "overview", label: "Overview", icon: <SquaresFourIcon /> },
  { value: "favorite", label: "Favorites", icon: <ListHeartIcon /> },
  { value: "watchlist", label: "Watchlist", icon: <BookmarkIcon /> },
  { value: "watching", label: "Watching", icon: <EyeIcon /> },
  { value: "completed", label: "Completed", icon: <CheckFatIcon /> },
  { value: "rated", label: "Rated", icon: <StarIcon /> },
] ;

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
