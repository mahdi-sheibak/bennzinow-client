import { Stack } from "expo-router";
import { QueryProvider } from "@/libs/api-client/query-provider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </QueryProvider>
  );
}
