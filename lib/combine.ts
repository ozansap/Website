const combine = (...ss: Array<string | Array<boolean | string>>) => {
  let res = "";
  ss.forEach(s => {
    if (typeof s == "string") {
      res += ` ${s}`;
    } else {
      if (s[0]) {
        res += ` ${s[1]}`;
      }
    }
  })

  return res;
}

export default combine;