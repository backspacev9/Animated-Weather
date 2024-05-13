export const ConvertFromUnix = (code: number) => {
  let dt = new Date(code * 1000).toLocaleString().split(",");
  return {date: dt[0], time: dt[1]};
};
