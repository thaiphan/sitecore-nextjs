import type { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [, data] = req.body.args;

    const previewData = JSON.parse(data);

    const response = await Axios.post(`${process.env.HOST}/preview`, {
      preview: true,
      previewData,
      previewToken: process.env.PREVIEW_TOKEN,
    });

    res.send({
      html: response.data,
    });
  } catch (error) {
    res.end(error);
  }
};
