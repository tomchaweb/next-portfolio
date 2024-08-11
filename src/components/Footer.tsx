export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()

  return (
    <footer className=" px-40 py-5 text-center border-muted border-t"><span className="text-muted-foreground">©Tom Chapman {currentYear}</span></footer>
  )
}
