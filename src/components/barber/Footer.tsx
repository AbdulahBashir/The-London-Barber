export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-sm border border-accent/60 flex items-center justify-center font-display text-accent">
            L
          </div>
          <div>
            <div className="font-display text-lg leading-none">London Barber</div>
            <div className="font-mono-luxe text-[9px] text-muted-foreground mt-1">
              EDGWARE RD · W2 1BS
            </div>
          </div>
        </div>
        <div className="font-mono-luxe text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} London Barber · Crafted in London
        </div>
      </div>
    </footer>
  );
};
