import React from "react";
import { Skeleton } from "@mui/material";
import { Card, CardHeader, CardMedia } from "@mui/material";

const CardSkeleton = () => {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <>
              <Skeleton variant="circular" width={30} height={30} />
              <Skeleton variant="text" height={20} width={60} />
            </>
          }
        ></CardHeader>

        <CardMedia >
          <Skeleton
            variant="rectangular"
            width={150}
            height={60}
            animation="wave"
          />
        </CardMedia>
      </Card>
    </div>
  );
};
export default CardSkeleton;
