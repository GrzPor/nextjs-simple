export default function ToursLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="py-2 w-1/2 bg-slate-500 rounded mb-4">
        <h1 className="text-white text-2xl font-bold">Nested Layout</h1>
      </header>
      {children}
    </div>
  );
}
