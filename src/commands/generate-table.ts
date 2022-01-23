import { Command, Flags } from "@oclif/core";

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
    this.log(`json file path: ${file}`);
  }
}
