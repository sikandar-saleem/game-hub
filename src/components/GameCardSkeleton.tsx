import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}
