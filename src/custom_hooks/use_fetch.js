import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGet = (url) => {
    return useQuery({
        queryFn: async () => {
            const { data } = await axios.get(url);
            return data;
        },
        queryKey: ["data"],
    });
};

// export const usePost = (url, payload) => {
//     return useMutation({
//         mutationFn: async () => {
//             const { data } = axios.delete(url, {
//                 data:  ,
//             });
//             return data;
//         },
//     })
// }
