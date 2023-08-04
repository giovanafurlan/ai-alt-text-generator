import axios from "axios";

const getImage = async (imageUrl:any) => {
  return axios
    .get("/api/generate", {
      params: {
        imageUrl: imageUrl,
      },
    })
    .then((e:any) => {
      return e.data;
    })
    .catch((e:any) => {
      console.log(e);
      return;
    });
};

export { getImage };
