import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import YearRangeFilter from "./YearRangeFilter";
import StatusFilter from "./StatusFilter";
import TypeFilter from "./TypeFilter";
import GenresFilter from "./GenresFilter";
export function Filters() {
  return (
    <Accordion type="multiple">
      <Filter label="Year">
        <YearRangeFilter />
      </Filter>
      <Filter label="Status">
        <StatusFilter />
      </Filter>
      <Filter label="Type">
        <TypeFilter />
      </Filter>
      <Filter label="Genres">
        <GenresFilter />
      </Filter>
    </Accordion>
  );
}
type FilterProps = {
  label: string;
  children: React.ReactNode;
};
export function Filter({ label, children }: FilterProps) {
  return (
    <AccordionItem value={label}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent className="p-1">{children}</AccordionContent>
    </AccordionItem>
  );
}
