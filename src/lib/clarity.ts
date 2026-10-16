declare global {
  interface Window {
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Send a custom event to Microsoft Clarity (shows up under Filters → Custom
 * events and can be used as a funnel step). No-op when Clarity isn't loaded,
 * e.g. in dev or on Vercel deployment URLs.
 */
export function trackClarityEvent(name: string) {
  if (typeof window !== "undefined") window.clarity?.("event", name);
}
