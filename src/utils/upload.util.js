import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const uploadToPublic = async (file, folder = "") => {
  if (!file?.originalname || !file?.buffer) throw new Error("Invalid file");

  const ext = path.extname(file.originalname);
  const filename = `${uuidv4()}${ext}`;
  const publicDir = path.join(process.cwd(), "public", folder);
  const filePath = path.join(publicDir, filename);

  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(filePath, file.buffer);

  return {
    url: `/public/${path.posix.join(folder, filename)}`,
    filename,
    path: filePath,
  };
};
