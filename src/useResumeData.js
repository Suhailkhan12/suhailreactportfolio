import { useQuery } from "@tanstack/react-query";
import { getDataAndDocuments } from "./services/firebase/firebase.utils";

function useResumeData() {
  const {
    isLoading,
    data: Resume,
    errors,
  } = useQuery({
    queryKey: ["ResumeDataSuhail"],
    queryFn: getDataAndDocuments,
  });

  return { isLoading, Resume, errors };
}

export default useResumeData;
