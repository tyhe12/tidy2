#!/bin/bash
if [ "$NODE_ENV" = "production" ]
then
echo "Production Mode"
BUCKET=cleaningwithcooley.com
else
echo "Non-Production Mode"
BUCKET=dev.cleaningwithcooley.com
fi

echo "Emptying the bucket: [$BUCKET]..."
aws s3 rm s3://$BUCKET --recursive --quiet

# echo "Running Deployment..."
# if [ "$NODE_ENV" = "production" ]
# then
# echo "oops"
# else
# yarn deploy
# fi


# echo "Uploading objects to bucket..."
# aws s3 sync ${ASSET_PATH} s3://${BUCKET_NAME} --acl public-read --exclude "*.js" --exclude "*.css" --exclude "*.html" --quiet --metadata-directive REPLACE

# echo "Gzipping following files..."
# aws s3 sync ${ASSET_PATH} s3://${BUCKET_NAME} --acl public-read --exclude "*" --include "*.js" --include "*.css" --include "*.html" --content-encoding gzip --cache-control max-age=86400 --quiet --metadata-directive REPLACE

echo "Done!"