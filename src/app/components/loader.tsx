import { FC } from "react";
import { FallingLines, FallingLinesProps } from "react-loader-spinner";

export const Loader: FC<FallingLinesProps> = ({ width = "40" }) => {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <FallingLines
        color="#ff14bd"
        width={width}
        visible={true}
        aria-label="falling-circles-loading"
      />
    </div>
  );
};
