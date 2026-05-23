function isObject(val: any) {
  return val && typeof val === "object" && !Array.isArray(val);
}

export function flatten(obj: any, prefix = "") {
  let result: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];
    const path = prefix ? `${prefix}.${key}` : key;

    if (isObject(value)) {
      Object.assign(result, flatten(value, path));
    } else {
      result[path] = value;
    }
  }

  return result;
}
