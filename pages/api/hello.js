// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({ myVar: process.env.MY_VAR, common: process.env.COMMON });
};
