import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import deleteFile from "../../../../utils/File";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.userRepository.findByID(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UpdateAvatarUseCase };
