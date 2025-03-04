import PropTypes from 'prop-types'
import { Anchor, Box, Button, CheckBox, Grid, Text, FormField, TextInput } from 'grommet'
import styled from 'styled-components'
import FieldLabel from '../../../../shared/components/FieldLabel'
import { withCustomFormik } from '@zooniverse/react-components'
import { useTranslation } from 'next-i18next'

export const userNameFieldId = 'RegisterForm_username'
export const passwordFieldId = 'RegisterForm_password'
export const passwordConfirmFieldId = 'RegisterForm_password_confirm'
export const emailFieldId = 'RegisterForm_email'
export const emailConfirmFieldId = 'RegisterForm_email_confirm'
export const realNameFieldId = 'RegisterForm_real_name'
export const privacyAgreementFieldId = 'RegisterForm_privacy_agreement'
export const emailListSignUpFieldId = 'RegisterForm_email_list_sign_up'
export const betaListSignUpFieldId = 'RegisterForm_beta_list_sign_up'
export const underageWithParentFieldId = 'RegisterForm_underage_with_parent'

const CheckBoxFormField = styled(FormField)`
  > div {
    border-color: transparent;
  }
`

function Form ({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, values }) {
  const { t } = useTranslation('components')

  const PrivacyPolicyLink = () => (
    <Anchor href='/privacy' size='small'>{t('RegisterForm.privacyLink')}</Anchor>
  )

  const userNameFieldHelp = (values.underageWithParent)
    ? t('RegisterForm.underageNotRealName')
    : t('RegisterForm.usernameHelp')
  const privacyAgreementLabel = (values.underageWithParent)
    ? <Text>{t('RegisterForm.underageConsent')}{' '}(<PrivacyPolicyLink />)</Text>
    : <Text>{t('RegisterForm.privacyAgreement')}{' '}(<PrivacyPolicyLink />)</Text>
  const emailListSignUpLabel = (values.underageWithParent)
    ? <Text>{t('RegisterForm.underageEmailSignUp')}</Text>
    : <Text>{t('RegisterForm.emailListSignUp')}</Text>
  const emailInputLabel = (values.underageWithParent)
    ? <FieldLabel>{t('RegisterForm.underageEmail')}</FieldLabel>
    : <FieldLabel>{t('RegisterForm.email')}</FieldLabel>

  return (
    <Box as='form' onSubmit={handleSubmit} margin={{ top: 'small' }}>
      <Box>
        <CheckBoxFormField
          htmlFor={underageWithParentFieldId}
        >
          <CheckBox
            checked={values.underageWithParent}
            disabled={isSubmitting}
            id={underageWithParentFieldId}
            label={<Text>{t('RegisterForm.underageWithParent')}</Text>}
            name='underageWithParent'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </CheckBoxFormField>
      </Box>
      <Grid columns={['1fr', '1fr']} gap='medium'>
        <Box>
          <FormField
            error={errors.username}
            help={userNameFieldHelp}
            htmlFor={userNameFieldId}
            label={<FieldLabel>{t('RegisterForm.username')}</FieldLabel>}
            required
          >
            <TextInput
              autoFocus
              disabled={isSubmitting}
              id={userNameFieldId}
              name='username'
              onBlur={handleBlur}
              onChange={handleChange}
              pattern='[a-zA-Z0-9_\-.]+'
              placeholder={t('RegisterForm.usernamePlaceholder')}
              required
              title={t('RegisterForm.usernamePatternHelp')}
              type='text'
              value={values.username}
            />
          </FormField>

          <FormField
            htmlFor={passwordFieldId}
            label={<FieldLabel>{t('RegisterForm.password')}</FieldLabel>}
            required
          >
            <TextInput
              disabled={isSubmitting}
              id={passwordFieldId}
              minLength={8}
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              required
              type='password'
              value={values.password}
            />
          </FormField>

          <FormField
            error={errors.passwordConfirm}
            htmlFor={passwordConfirmFieldId}
            label={<FieldLabel>{t('RegisterForm.passwordConfirm')}</FieldLabel>}
            required
          >
            <TextInput
              disabled={isSubmitting}
              id={passwordConfirmFieldId}
              minLength={8}
              name='passwordConfirm'
              onChange={handleChange}
              onBlur={handleBlur}
              required
              type='password'
              value={values.passwordConfirm}
            />
          </FormField>
        </Box>

        <Box>
          <FormField
            error={errors.email}
            htmlFor={emailFieldId}
            label={emailInputLabel}
            required
          >
            <TextInput
              disabled={isSubmitting}
              id={emailFieldId}
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('RegisterForm.emailPlaceholder')}
              required
              type='email'
              value={values.email}
            />
          </FormField>

          <FormField
            error={errors.emailConfirm}
            htmlFor={emailConfirmFieldId}
            label={<FieldLabel>{t('RegisterForm.emailConfirm')}</FieldLabel>}
            required
          >
            <TextInput
              disabled={isSubmitting}
              id={emailConfirmFieldId}
              name='emailConfirm'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('RegisterForm.emailPlaceholder')}
              required
              type='email'
              value={values.emailConfirm}
            />
          </FormField>

          <FormField
            help={t('RegisterForm.realNameHelp')}
            htmlFor={realNameFieldId}
            label={<FieldLabel>{t('RegisterForm.realName')}</FieldLabel>}
          >
            <TextInput
              disabled={isSubmitting}
              id={realNameFieldId}
              name='realName'
              onChange={handleChange}
              onBlur={handleBlur}
              pattern='[^@]+'
              placeholder={t('RegisterForm.realNamePlaceholder')}
              title={t('RegisterForm.realNamePatternHelp')}
              type='text'
              value={values.realName}
            />
          </FormField>
        </Box>
      </Grid>

      <Box margin={{ top: 'xsmall' }}>
        <CheckBoxFormField
          error={errors.privacyAgreement}
          htmlFor={privacyAgreementFieldId}
          required
        >
          <CheckBox
            checked={values.privacyAgreement}
            disabled={isSubmitting}
            id={privacyAgreementFieldId}
            label={privacyAgreementLabel}
            name='privacyAgreement'
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </CheckBoxFormField>

        <CheckBoxFormField
          htmlFor={emailListSignUpFieldId}
        >
          <CheckBox
            checked={values.emailListSignUp}
            disabled={isSubmitting}
            id={emailListSignUpFieldId}
            label={emailListSignUpLabel}
            name='emailListSignUp'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </CheckBoxFormField>

        <CheckBoxFormField
          htmlFor={betaListSignUpFieldId}
        >
          <CheckBox
            checked={values.betaListSignUp}
            disabled={isSubmitting}
            id={betaListSignUpFieldId}
            label={<Text>{t('RegisterForm.betaListSignUp')}</Text>}
            name='betaListSignUp'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </CheckBoxFormField>
      </Box>

      <Button
        disabled={isSubmitting}
        label={(isSubmitting) ? t('RegisterForm.registering') : t('RegisterForm.register')}
        primary
        type='submit'
      />
    </Box>
  )
}

Form.defaultProps = {
  errors: {},
  handleBlur: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
  isSubmitting: false,
  values: {
    betaListSignUp: false,
    email: '',
    emailConfirm: '',
    emailListSignUp: false,
    password: '',
    passwordConfirm: '',
    privacyAgreement: false,
    realName: '',
    username: '',
    underageWithParent: false
  }
}

Form.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  values: PropTypes.object
}

export default withCustomFormik(Form)
export { Form }
