import React, { lazy, memo, Suspense } from "react";
import { Skeleton } from "antd";

/**
 * @description applet header's part lazy load
 */
export default memo(() => {
  // code splitting
  const Edit = lazy(() => import("../Edit"));

  return (
    <Suspense fallback={<Skeleton active loading={true} />}>
      <Edit />
    </Suspense>
  );
});
