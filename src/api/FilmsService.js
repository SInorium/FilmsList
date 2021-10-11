import axios from "axios";

export default class FilmsService {
  static async getAll(limit = 10, page = 1) {
    const resp = await axios("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit: limit,
        page: page,
        with_rt_ratings: true,
      },
    });
    return resp;
  }
  static async getComment(id = 10) {
    const resp = await axios("https://jsonplaceholder.typicode.com/comments", {
      params: {
        postId: id,
      },
    });
    return resp;
  }
}
