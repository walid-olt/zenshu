import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RangeFilter from "./RangeFilter";
export function Filters() {
  return (
    <Accordion type="multiple">
      <Filter label="Year">
        <RangeFilter />
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
