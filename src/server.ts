import "reflect-metadata";

const path = require("node:path");

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(3000);

  console.log(`HTTP server running on ${url}`);
}

bootstrap();
