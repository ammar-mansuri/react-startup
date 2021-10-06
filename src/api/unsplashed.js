import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com/',
      headers: {
        Authorization: "Client-ID 9dLmG1QH4HxQhpq71mu-32FanKtdtAL_MXhR9OO3O4Y",
      }
})