import { deleteAsync } from "del";

export default function clearDist() {
  return {
    name: "clear-dist",
    async generateBundle(_options, _bundle, isWrite) {
      if (isWrite) {
        await deleteAsync("dist/**");
      }
    },
  };
}
