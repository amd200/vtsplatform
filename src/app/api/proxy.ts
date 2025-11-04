import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.body;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FILES_PATH}/api/platform/Content/StudentCourseDetails`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-App-Token": "UhqBUAP3T6Irguej2ogSdg==", "X-Student-Token": "jbcAY6s8MRkDVwsD" },
      body: JSON.stringify({ Id: id }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
}
