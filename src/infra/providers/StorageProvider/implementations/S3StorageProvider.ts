import { S3 } from "aws-sdk";

import { IStorageProvider } from "../IStorageProvider";

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
    });
  }

  upload(file: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

export { S3StorageProvider };