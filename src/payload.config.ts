import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { ro } from "@payloadcms/translations/languages/ro";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Stories } from "./collections/Stories";
import { Comments } from "./collections/Comments";
import { Articles } from "./collections/Articles";
import { Organizations } from "./collections/Organizations";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "— Asociația Antidrog",
    },
  },
  i18n: {
    supportedLanguages: { ro },
    fallbackLanguage: "ro",
  },
  collections: [Users, Media, Stories, Comments, Articles, Organizations],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [],
});

