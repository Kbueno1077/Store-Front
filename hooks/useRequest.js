import useSwr from "swr";

const baseUrl = "/api/hello";

export default function useRequest() {
  const url = baseUrl;
  const { data, error } = useSwr(url);

  return { data, error };
}
