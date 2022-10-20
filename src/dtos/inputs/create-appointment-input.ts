import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointInput {
  @Field()
  customerId: string

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
