import { EmailAlertChannel } from 'checkly/constructs'

const sendDefaults = { sendFailure: true }

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  // Change the email address here to your desired email address
  address: 'alerts@acme.com',
  ...sendDefaults
})