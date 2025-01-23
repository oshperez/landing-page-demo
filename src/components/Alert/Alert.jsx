import StyledContainer from './Container.styled'
import Typography from 'components/Typography/Typography.styled'
import StyledXMarkIcon from './XMarkIcon.styled'
import StyledErrorIcon from './ErrorIcon.styled'
import StyledSuccessIcon from './SuccessIcon.styled'


const successMessage = "Thanks for your message!";
const errorMessage = "Something went wrong";

function Alert({error, setAlert}) {
  
  const onClose = () => {
    setAlert(() => ({isVisible: false, isError: false}))
  }
  return (
    <StyledContainer p="md" error={error}>
      {error ? <StyledErrorIcon/> : <StyledSuccessIcon/>}
      <Typography>{error ? errorMessage : successMessage}</Typography>
      <StyledXMarkIcon onClick={onClose}/>
    </StyledContainer>
  )

}
export default Alert;