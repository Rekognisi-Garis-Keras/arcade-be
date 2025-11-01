import { v2 as cloudinary} from 'cloudinary';

export const handleUpload = async (file) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
  });
  return res;
}