
export type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  count: number;
};
export default function StatCard({ icon, label, count }: StatCardProps) {
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

