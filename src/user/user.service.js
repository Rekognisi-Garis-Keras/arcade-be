import bcrypt from 'bcrypt';
import { JwtUtil } from '../utils/jwt.util.js';
import { UserResponseDto } from './dto/user-response.dto.js';

export class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async register(data) {
    // validate
    const isExist = await this.userRepo.findByEmail(data.email);
    if (isExist) {
      throw new Error("user already exist");
    }

    // create process
    const hashed = await bcrypt.hash(data.password, 10);
    const newUser = { ...data, password: hashed }
    const user = await this.userRepo.create(newUser);
    return new UserResponseDto(user);
  }

  async login(email, password) {
    // validate
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    // sign jwt
    const token = JwtUtil.sign({ 
      id: user.id,
      name: user.name, 
      email: user.email, 
      role: user.role, 
    });
    const userDto = new UserResponseDto(user);
    return { user: userDto, token };
  }

  async loginWithGoogle(user) {
    if (!user || !user.id) {
      throw new Error("Invalid user object provided for Google login.");
    }
    const token = JwtUtil.sign({ 
      id: user.id,
      name: user.name, 
      email: user.email, 
      role: user.role, 
    });
    const userDto = new UserResponseDto(user);
    return { user: userDto, token }; 
  }

  async getUserById(id) {
    const user = await this.userRepo.findById(id);
    if (!user) {
      return null;
    }
    return new UserResponseDto(user);
  }

  async getUserByEmail(email) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      return null;
    }
    return new UserResponseDto(user);
  }

  async updateProfile(id, data) {
    const updateData = {};
    if (typeof data.name !== "undefined") updateData.name = data.name;
    if (typeof data.bio !== "undefined") updateData.bio = data.bio;

    if (Object.keys(updateData).length === 0) {
      throw new Error("No valid fields to update (name, bio)");
    }

    const updatedUser = await this.userRepo.update(id, updateData);
    if (!updatedUser) {
      throw new Error("User not found or update failed");
    }
    return new UserResponseDto(updatedUser);
  }

  async updateAvatar(id, fileUrl) {
    if (!fileUrl) {
      throw new Error("No avatar file URL provided");
    }
    const updatedUser = await this.userRepo.update(id, { avatar: fileUrl });
    if (!updatedUser) {
      throw new Error("User not found or update failed");
    }
    return new UserResponseDto(updatedUser);
  }
}