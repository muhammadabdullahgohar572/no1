import {z} from "zod"

export const signInSchema = z.object({
   identifies:z.string(),
   password:z.string(),

})    