import oona from '../assets/styles/oona/oona.module.scss'
import cn from "classnames";

export default function Footer() {
  return (
    <footer className={oona['footer']}>
      <div className={cn('container', oona['container'])}>
        <div className={'row'}>
          <div className={cn('col s12 l3 margin-on-medium-and-down', oona['margin-on-medium-and-down'])}>
            <address className={oona['address']}>B R James, 30 W 47th St<br/>New York, NY 10036</address>
            <a href="https://www.google.com/maps?daddr=B+R+James+30+W%3D47th+St+NY+10036" target="_blank">Get directions
              <i className={cn('icon-arrows-slim-right', oona['new-window'])}></i>
            </a>
          </div>
          <div className={cn('col s12 l3 margin-on-medium-and-down', oona['margin-on-medium-and-down'])}>
            <a href="mailto:hello@oona.com">hello@oona.com</a>
            <br/>+1-917-643-4346
          </div>
          <div className={cn('col s12 l3 margin-on-medium-and-down', oona['margin-on-medium-and-down'])}>
            <a href="#">Follow @oona</a>
          </div>
          <div className={'col s12 l3'}>&copy; 2010—2016 Oona</div>
        </div>
      </div>
    </footer>
  )
}
