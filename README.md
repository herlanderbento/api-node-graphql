# API GraphQL com Node.js

Duas versões da mesma aplicação, uma no modo easy e outra no modo hard. Com tecnologias diferentes, mas sempre usando o GraphQL, experimentando as possibilidades e níveis de complexidade desse universo.

## Primeira aplicação

``` json
    const server = new ApolloServer({
        typeDefs,
            resolvers: {
                Query: {
                    users: () => {
                        return users;
                    },
                },

                Mutation: {
                    createUser: (_, args) => {
                        const user: User = {
                            id: randomUUID(),
                            name: args.name,
                        };

                        users.push(user);

                        return user;
                    },
                },
        },
    });


```

 ## Segunda aplicação
```json
     @Mutation(() => Appointment)
        async createAppointment(@Arg("data") data: CreateAppointInput) {
            const appointment = {
                startsAt: data.startsAt,
                endsAt: data.endsAt,
            };
            
            return appointment;
        }
```
