import bcrypt from 'bcrypt';
import { JwtUtil } from '../utils/jwt.util.js';
import { UserResponseDto } from './dto/user-response.dto.js';

export class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async register(data) {
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
}