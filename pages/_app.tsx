import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/compat/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// if (typeof window !== "undefined") {
//   // checks that we are client-side
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//     api_host:
//       process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
//     person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
//     },
//   });
// }

export default function MyApp({ Component, pageProps }): React.ReactElement {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "undefined", {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      // person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
      },
    });

    const router = useRouter();

    const handleRouteChange = () => posthog?.capture("$pageview");

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  );
}
