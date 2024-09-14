// import clsx from "clsx";
// import { GeistSans } from "geist/font/sans";
// import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
// import Navbar from "../navbar";
// import { ThemeProvider } from "../theme-provider";

// const Layout = ({
//   children,
//   session,
// }: {
//   children: React.ReactNode;
//   session: Session | null;
// }) => {
//   return (
//     <>
//       <SessionProvider session={session}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <main
//             className={clsx(
//               GeistSans.className,
//               "container flex min-h-screen flex-col",
//             )}
//           >
//             <Navbar />
//             {children}
//           </main>
//         </ThemeProvider>
//       </SessionProvider>
//     </>
//   );
// };

// export default Layout;
