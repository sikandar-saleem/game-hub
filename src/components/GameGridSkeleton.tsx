import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameGridSkeleton() {
  return (
    <Card
      width={{
        sm: "100px",
        md: "200px",
        lg: "300px",
        xl: "400px",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}
