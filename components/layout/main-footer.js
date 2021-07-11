import classes from './main-footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p>Acme Web Design, Copyright &copy; {currentYear}</p>
    </footer>
  );
}
