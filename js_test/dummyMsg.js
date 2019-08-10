let msg;

const dummy = str => {
  res = "";
  let i;
  for (i = 0; i < str.length; i++) {
    c = str[i];
    if (c == c.toUpperCase()) {
      res += c.toLowerCase();
    } else if (c == c.toLowerCase()){
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }
  console.log(res);
  return res;
};

dummy("msg");
