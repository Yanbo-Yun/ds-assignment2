#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { EDAAppStack } from "../lib/ds-assignment2-stack";


const app = new cdk.App();
new EDAAppStack(app, "EDAStack", {
  env: { region: "eu-west-1" },
});
