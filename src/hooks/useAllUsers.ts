import axios from "axios";
import { useState } from "react";
import { User } from "../types/User";
//全ユーザーを取得するカスタムフック
export const useAllUsers = () => {
  const target_url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState<Array<User>>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setError(false);
    setLoading(true);
    axios
      .get(target_url)
      .then((result) => {
        setUsers(result.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { getUsers, users, loading, error };
};
