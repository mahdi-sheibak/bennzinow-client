import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useGetTodos } from "@/libs/data-layer/queries/get-todos";

export default function Index() {
  const { data: todos, isLoading } = useGetTodos();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {todos?.map((todo) => {
            return <Text key={todo.id.toString()}>{todo.title}</Text>;
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
