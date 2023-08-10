import type { ProtocolManagerShape } from '@packages/types'

export class AppCaptureProtocol implements ProtocolManagerShape {
  constructor () {
    throw new Error()
  }

  protocolEnabled: boolean

  setupProtocol = (script, runId) => {
    return Promise.resolve()
  }
  connectToBrowser = (cdpClient) => {
    return Promise.resolve()
  }
  addRunnables = (runnables) => {}
  beforeSpec = (spec) => {}
  afterSpec = () => {
    return Promise.resolve()
  }
  beforeTest = (test) => {
    return Promise.resolve()
  }
  commandLogAdded = (log) => {}
  commandLogChanged = (log) => {}
  viewportChanged = (input) => {}
  urlChanged = (input) => {}
  pageLoading = (input) => {}
  resetTest (testId) {}
  sendErrors (errors) {
    return Promise.resolve()
  }
  uploadCaptureArtifact ({ uploadUrl }) {
    return Promise.resolve()
  }
  afterTest = (test) => {
    return Promise.resolve()
  }
}