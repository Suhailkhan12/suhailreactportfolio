import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
import { createFormData } from "../../services/apiforms";
import { toast } from "react-hot-toast";

function useCreateForm() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createForm } = useMutation({
    mutationFn: (newform) => createFormData(newform),
    onSuccess: () => {
      toast.success("Succesfully Send");
      queryClient.invalidateQueries({
        queryKey: ["formdata"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isCreating, createForm };
}

export default useCreateForm;
