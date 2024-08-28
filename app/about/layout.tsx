import Link from '@/node_modules/next/link';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>aboout</h1>
      {children}
    </div>
  );
}
