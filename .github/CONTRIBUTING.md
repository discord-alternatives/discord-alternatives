# Contributing

Thanks for helping improve this dataset.

This project tracks Discord alternatives using a strict structured schema.

## What you can contribute

- Add new platforms
- Fix incorrect feature data
- Improve descriptions or links
- Improve validation or tooling

## Data rules

All entries must follow the schema in:
`/data/platforms.schema.json`

Before submitting a PR:

- Run validation locally
- Ensure no duplicate entries
- Keep entries alphabetically sorted
- Discord must remain the first entry
- DO NOT FILL OUT RATING.

## Validation

Run locally:

```bash
npm install
node scripts/validate.mjs
```

Your PR will also be automatically validated in CI.

## Adding a new platform

1. Add a new object to /data/platforms.json
2. Follow the schema exactly
3. Include:
   - name
   - website
   - feature matrix
   - platform support flags

## What NOT to do

- Don’t remove or rename existing categories
- Don’t break schema structure
- Don’t randomize ordering
- Don’t mix formatting styles
- Don't include the rating field.
- Don't write notes, these are for reviewers.

## Pull Requests

All PRs should:

- Be focused (one platform or one platform fix per PR)
- Pass validation checks
- Keep dataset ordering intact
