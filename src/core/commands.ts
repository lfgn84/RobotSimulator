export type Command = "LEFT" | "RIGHT" | "FORWARD";
export type Language = "sv" | "en";

// Maps of characters to valid commands (uppercase)
const MAP_SV: Record<string, Command> = { V: "LEFT", H: "RIGHT", G: "FORWARD" };
const MAP_EN: Record<string, Command> = { L: "LEFT", R: "RIGHT", F: "FORWARD" };

/**
 * Converts an input string into a list of commands.
 * Unknown characters (non-whitespace) are ignored and returned in `ignored`.
 */
export function parseCommands(input: string, lang: Language) {
  const map = lang === "sv" ? MAP_SV : MAP_EN;
  const commands: Command[] = [];
  const ignored: string[] = [];

  for (const ch of input.toUpperCase()) {
    const cmd = map[ch];
    if (cmd) commands.push(cmd);
    else if (!/\s/.test(ch)) ignored.push(ch);
  }
  return { commands, ignored };
}
