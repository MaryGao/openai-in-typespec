// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { OpenAIContext } from "../rest/index.js";
import { KeyCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";

export interface OpenAIClientOptions extends ClientOptions {}

export { OpenAIContext } from "../rest/index.js";

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(
  credential: KeyCredential,
  options: OpenAIClientOptions = {}
): OpenAIContext {
  options.credentials = {
    ...options.credentials,
    apiKeyHeaderName: "Authorization",
  };
  const clientContext = getClient(credential, options);
  return clientContext;
}
