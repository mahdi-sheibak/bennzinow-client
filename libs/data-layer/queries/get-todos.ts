import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/libs/api-client/api-client";
import { TodosSchema } from "@/libs/domain/todos";

const todosKey = ["todos"];

const getTodos = () => apiClient.get("todos").json().then(TodosSchema.parse);

export const useGetTodos = () =>
  useQuery({
    queryKey: todosKey,
    queryFn: getTodos,
  });
