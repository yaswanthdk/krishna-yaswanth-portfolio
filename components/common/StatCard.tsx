import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
}

export function StatCard({
  value,
  label,
  className,
  valueClassName,
}: StatCardProps) {
  return (
    <Card className={cn("h-full transition-all hover:-translate-y-1 hover:shadow-lg duration-300", className)}>
      <CardContent className="flex h-full flex-col justify-center p-6">
        <p
          className={cn(
            "text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
            valueClassName,
          )}
        >
          {value}
        </p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
