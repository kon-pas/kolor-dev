import type { ApiResponse } from "@interfaces";

import { gradients } from "@database";

const gradientApiCAll = async (pid: string): Promise<ApiResponse> =>
  pid in gradients
    ? {
        status: 200,
        statusText: "OK",
        ok: true,
        body: JSON.stringify(gradients[pid]),
        async json() {
          return JSON.parse(JSON.stringify(gradients[pid]));
        },
      }
    : {
        status: 404,
        statusText: "Not Found",
        ok: false,
        body: null,
        async json() {
          return null;
        },
      };

export default gradientApiCAll;
