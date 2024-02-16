interface ShoesLayoutProps {
  children: React.ReactNode;
}

export default function Shoes({ children }: ShoesLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
