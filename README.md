# parcel-resolver-jison

Sample config file
```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{ts,tsx}": ["@parcel/transformer-typescript-tsc"],
    "*.jison": ["@szczepano/parcel-transformer-jison", "..."]
  },
  "resolvers": ["...", "@szczepano/parcel-resolver-jison"]
}
```
