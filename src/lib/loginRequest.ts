// src/lib/loginRequest.ts
export async function loginRequest(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.Message || "Login failed");
  }

  // return data?.data || data;
  return {
    id: data?.Data?.UserId,
    StudentName: data?.Data?.StudentName,
    StudentToken: data?.Data?.StudentToken,
    StudentImage: data?.Data?.StudentImage,
    Role: Number(data?.Data?.Role),
  };
}
