import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFormData } from "../../services/supabase/apiforms";
import { toast } from "react-hot-toast";

function useCreateForm() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createForm } = useMutation({
    mutationFn: (newform) => createFormData(newform),
    onSuccess: () => {
      toast.success("Succesfully Send");
      queryClient.invalidateQueries({
        queryKey: ["formdatas"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isCreating, createForm };
}

export default useCreateForm;
