import { Category } from "../../../../data/model";

export interface UseListCategoriesResult {
   isLoading: boolean,
   categories: Category[],
}