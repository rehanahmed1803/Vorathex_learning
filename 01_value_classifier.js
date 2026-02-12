function classifyForVorathex(val) {
  if(val === null || val === undefined) {
    return 'NULLISH';
  }else if(typeof val === 'boolean') {
    return 'BOOLEAN';
  }else if(typeof val === 'number') {
    if(!Number.isFinite(val) || val <= 0) {
      return 'UNSAFE_NUMBER';
    }
    return 'SAFE_NUMBER';
  }else if(typeof val === 'string') {
    if(Boolean(val) === false) {
      return 'UNSAFE_STRING';
    }
    return 'SAFE_STRING';
  }else {
    return 'UNSUPPORTED';
  }
}

//Test cases
console.log(classifyForVorathex(99.5));        // "SAFE_NUMBER"
console.log(classifyForVorathex(-10));          // "UNSAFE_NUMBER"
console.log(classifyForVorathex(NaN));          // "UNSAFE_NUMBER"
console.log(classifyForVorathex(Infinity));     // "UNSAFE_NUMBER"
console.log(classifyForVorathex("ORD-001"));    // "SAFE_STRING"
console.log(classifyForVorathex(""));           // "EMPTY_STRING"
console.log(classifyForVorathex(true));         // "BOOLEAN"
console.log(classifyForVorathex(null));         // "NULLISH"
console.log(classifyForVorathex(undefined));    // "NULLISH"
console.log(classifyForVorathex(Symbol("x")));  // "UNSUPPORTED"
console.log(classifyForVorathex({}));           // "UNSUPPORTED"
console.log(classifyForVorathex([]));           // "UNSUPPORTED"
