import UserInfo from "@/types/UserInfo";
import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo: UserInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo: UserInfo, image: string) => {
  try {
    //    This is for seding the request with files
    const formData = new FormData();
    for (const key in userInfo)
      formData.append(key, userInfo[key as keyof UserInfo]);

    formData.append("image", {
      name: "image.jpg",
      type: "image/jpeg",
      uri: image,
    } as any);
    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
