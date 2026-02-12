function describeValue(val) {
  return {
    "type" : typeof val,
    "isNullish" : (val === null) || (val === undefined),
    "isFalsy" : !Boolean(val),
    "value" : val
  };
}
