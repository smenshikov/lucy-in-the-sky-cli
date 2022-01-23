import { Command, Flags } from "@oclif/core";
import { readFile } from "fs/promises"; // eslint-disable-line unicorn/prefer-node-protocol

interface File {
  entityName: string;
  entityFileName: string;
  entityComponentName: string;
}

export default class GenerateTable extends Command {
  static description = "Generate table for admin dashboard";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    file: Flags.string({
      char: "f",
      description: "Path to json file with description",
      required: true,
    }),
  };

  static args = [];

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateTable);

    const { file } = flags;
    const fileObject: File = JSON.parse(await readFile(file, "utf8"));

    console.log("-!-debug-!-", fileObject);
  }
}
