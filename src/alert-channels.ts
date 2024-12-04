import { EmailAlertChannel } from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  // sendRecovery: true,
  // sendDegraded: false,
  // sslExpiry: true,
  // sslExpiryThreshold: 30
}

// Change the email address here to your desired email address
export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'alerts@acme.com',
  ...sendDefaults
})