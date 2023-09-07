import { Subscription } from "rxjs";

export const unsubscribe = (subscriptions: Subscription[]): void => {
  subscriptions.map((subscription) => subscription.unsubscribe());
};
