import { useEffect, useState } from "react";
import { Observable } from "rxjs";

import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

export const useObservable = <T>(stream$: Observable<T>, defaultValue: T) => {
  const [value, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const sub = stream$.subscribe((s) => {
      setState(s);
    });

    return () => unsubscribe([sub]);
  }, [stream$]);

  return value;
};
