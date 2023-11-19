# MessagePack

## links

- [landing page](https://github.com/msgpack/msgpack-javascript)
- [handling map & set in js](https://github.com/msgpack/msgpack-javascript#extension-types)

### spec

- [extension types](https://github.com/msgpack/msgpack/blob/master/spec.md#extension-types)

## TLDR

### typescript example

```ts
import {
  Encoder,
  Decoder,
  encode,
  decode,
  ExtensionCodec,
} from "@msgpack/msgpack";

// Encoder && Decoder doesnt work with extensioncodec
// @see https://github.com/msgpack/msgpack-javascript/issues/236
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

### web example

```html
<!DOCTYPE html>
<head>
  <script crossorigin src="https://unpkg.com/@msgpack/msgpack"></script>
</head>
<body>
  <script>
    (async function () {
      const response = await fetch("http://localhost:3000/v1/players");
      console.info("\n\n wtf is response", response);

      const decoder = {
        decode: MessagePack.decode,
        decodeAsync: MessagePack.decodeAsync,
      };
      const extensionCodec = new MessagePack.ExtensionCodec();

      // Map<T>
      const MAP_EXT_TYPE = 1; // Any in 0-127
      extensionCodec.register({
        type: MAP_EXT_TYPE,
        encode: (object) => {
          if (object instanceof Map) {
            return encoder.encode([...object], { extensionCodec });
          } else {
            return null;
          }
        },
        decode: (data) => {
          const array = decoder.decode(data, { extensionCodec });
          return new Map(array);
        },
        decodeAsync: async (data) => {
          const array = await decoder.decodeAsync(data, { extensionCodec });
          return new Map(array);
        },
      });

      function selfIterator(arr) {
        // @ts-ignore
        return arr.reduce((acc, [key, value]) => {
          if (
            value?.type === MAP_EXT_TYPE &&
            value?.data instanceof Uint8Array
          ) {
            // @ts-ignore
            acc[key] = selfIterator(decoder.decode(value.data));
          } else {
            // @ts-ignore
            acc[key] = value;
          }

          return acc;
        }, {});
      }

      console.info("\n\n response body", response.body);
      const decoded = await decoder.decodeAsync(response.body);

      const data = selfIterator(decoder.decode(decoded.data));
      console.info("decodedddd", decoded, data);
    })();
  </script>
</body>
```
