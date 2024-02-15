// export default function Auth() {
//   return (
//     <div className="flex h-screen w-full items-center justify-center">
//       <div className="h-96 w-96 rounded-md border p-5">
//         <h1>Create an account</h1>
//       </div>
//     </div>
//   );
// }

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthLayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
