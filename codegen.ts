import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
   overwrite: true,
   schema: "https://goudenkwast.laupwing.site/graphql",
   //   documents: "src/**/*.tsx",
   generates: {
      "src/generated": {
         preset: "client",
         plugins: [],
      },
   },
}

export default config
