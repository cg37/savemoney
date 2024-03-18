import { WatchCallback, WatchOptions } from "@vue/runtime-core";
import { watch } from 'vue'

export default function debounceWatch<
  T extends object,
  Immediate extends Readonly<boolean> = false
> (
    source: T,
    WatchCallback:WatchCallback<T, Immediate extends true ? T | undefined : T>,
    WatchOptions: WatchOptions<Immediate> & {delayTime?: number}
  ) {
    const defaultDelayTime = 300;
    watch(
      source,
      (value, oldValue, onCleanup) => {
        const timer = setTimeout(()=> {
          WatchCallback(value, oldValue, onCleanup);
        }, WatchOptions.delayTime || defaultDelayTime);

        onCleanup(()=>{
          clearTimeout(timer);
        });
      },
      WatchOptions
    );
  }
