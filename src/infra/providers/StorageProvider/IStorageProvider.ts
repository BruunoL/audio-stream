interface IStorageProvider {
  upload(file: string): Promise<string>;
}

export { IStorageProvider };