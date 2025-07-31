import { codeToHtml } from "shiki";

export async function renderCode(code: string, language: string) {
  return codeToHtml(code, {
    lang: language,
    theme: "catppuccin-mocha",
  });
}
