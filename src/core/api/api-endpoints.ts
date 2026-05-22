import { environment } from "../../environments/environment.prod"

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user: {
    LogIn: `${BASE_URL}/auth/login`
  },

  task: {
    getAllTasks: `${BASE_URL}/tasks`
  }

}
