# MessagePack

## links

- [landing page](https://github.com/msgpack/msgpack-javascript)
- [handling map & set in js](https://github.com/msgpack/msgpack-javascript#extension-types)

### spec

- [extension types](https://github.com/msgpack/msgpack/blob/master/spec.md#extension-types)

## TLDR

```ts
import {
  Encoder,
  Decoder,
  encode,
  decode,
  ExtensionCodec,
} from "@msgpack/msgpack";

// Encoder && Decoder doesnt work with extensioncodec
const encoder = { encode }; //new Encoder();
const decoder = { decode }; //new Decoder();
const extensionCodec = new ExtensionCodec();

// Set<T>
const SET_EXT_TYPE = 0; // Any in 0-127
extensionCodec.register({
  type: SET_EXT_TYPE,
  encode: (object: unknown): Uint8Array | null => {
    if (object instanceof Set) {
      return encoder.encode([...object], { extensionCodec });
    } else {
      return null;
    }
  },
  decode: (data: Uint8Array) => {
    const array = decoder.decode(data, { extensionCodec }) as Array<unknown>;
    return new Set(array);
  },
});

// Map<T>
const MAP_EXT_TYPE = 1; // Any in 0-127
extensionCodec.register({
  type: MAP_EXT_TYPE,
  encode: (object: unknown): Uint8Array => {
    if (object instanceof Map) {
      return encoder.encode([...object], { extensionCodec });
    } else {
      return null;
    }
  },
  decode: (data: Uint8Array) => {
    const array = decoder.decode(data, { extensionCodec }) as Array<
      [unknown, unknown]
    >;
    return new Map(array);
  },
});
```
