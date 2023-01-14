// @@@ NOTE: Imitating external API.
// Cannot fetch data with SSG from internet API.

// import type { ApiResponse } from "@interfaces";

// import { gradients } from "@database";

// const gradientsApiCall = async (): Promise<ApiResponse> => ({
//   status: 200,
//   statusText: "OK",
//   ok: true,
//   body: JSON.stringify(gradients),
//   async json() {
//     return JSON.parse(JSON.stringify(gradients));
//   },
// });

// export default gradientsApiCall;

// @@@ DEPRECATED: Moved to MongoDB & Prisma.
export {};
