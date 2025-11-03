import { v2 as cloudinary} from 'cloudinary';

export const handleUpload = async (file, folder) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    folder
  });
  return res;
}