import Music from "@/components/pageContent/MusicPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type MusicItem from "@/types/MusicItem";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const musicItems = await getMusicItems();

  return <Music musicList={musicItems} />;
}

async function getMusicItems(): Promise<{
  data: Array<MusicItem>;
}> {
  const musicList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_MUSIC_DATA_URL
  );

  return musicList;
}
