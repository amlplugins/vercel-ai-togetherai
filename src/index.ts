/**
 * @amlplugins/vercel-ai-togetherai
 *
 * Thin namespaced re-export of the native @ai-sdk/togetherai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK Together AI provider — 200+ open-source LLMs and embedding models via Together inference.
 */

import * as _sdk from "@ai-sdk/togetherai";
export * from "@ai-sdk/togetherai";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
