import Multer from "multer";

export const storage = new Multer.memoryStorage();
export const upload = Multer({
  storage,
});
