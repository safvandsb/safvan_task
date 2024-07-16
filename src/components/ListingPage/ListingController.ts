
import { fetchUniversities } from "../../services/ApiService";
import UniversityService from "./UniversityService";
// import University from "../../models/University";

class ListingController {
  static async fetchUniversities() {
    return await UniversityService.fetchAndCacheUniversities();
  }
}

export default ListingController;
