export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // Need to start with capital letter/ the prop received could start with Capital letter but it against the padronization
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
