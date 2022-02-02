import fs from "fs";

export default async function deleteFile(filename: string): Promise<any> {
    try {
        await fs.promises.stat(filename);
    } catch (error) {
        return;
    }

    await fs.promises.unlink(filename);
}
