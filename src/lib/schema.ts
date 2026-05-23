import schema from "../../data/platforms.schema.json";

export type Column = {
  key: string;
  label: string;
};

function capitalize(str: string) {
  return str
    .replace(/\./g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function labelize(path: string) {
  return path.split(".").pop()!.replace(/_/g, " ");
}

function walk(obj: any, prefix = ""): string[] {
  let keys: string[] = [];

  for (const key in obj) {
    const value = obj[key];
    const path = prefix ? `${prefix}.${key}` : key;

    if (value?.properties) {
      keys.push(...walk(value.properties, path));
    } else {
      keys.push(path);
    }
  }

  return keys;
}

export function getColumns(): Column[] {
  const featureKeys = walk(schema.properties.features.properties, "features");

  return [
    { key: "name", label: "Name" },
    { key: "website", label: "Website" },
    { key: "license", label: "License" },
    ...featureKeys.map((k) => ({
      key: k,
      label: capitalize(labelize(k)),
    })),
  ];
}
