import * as cdk from '@aws-cdk/core';

export interface FastServerlessServiceProps {
  // Define construct properties here
}

export class FastServerlessService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: FastServerlessServiceProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkFastServerlessQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
