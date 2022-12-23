export const splitSlotArgs = (argsIn :Record<string, any>, slotArgKeys: string | string[]) => {
  const keys = Object.keys(argsIn);
  const slotArgs : Record<string, any> ={};
  const args : Record<string, any> ={};
  keys.forEach(key => {
    if (slotArgKeys.includes(key)) {
      slotArgs[key] = argsIn[key];
    } else {
      args[key] = argsIn[key];
    }
  });

  return { args, slotArgs };
};
