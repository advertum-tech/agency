import cn from "classnames";
import oona from "@/app/assets/styles/oona/oona.module.scss";

export default function Home() {
  return (
    <div className={cn(oona['container'], 'container')}>
      <div className="row">
        <div className="col s12 l6 offset-l6">
          <p className={cn(oona['intro-text'], 'flow-text intro-text')}>
            The finest selection of our projects. Over the years, Advertum has collaborated
            with clients like Martini, Neste, Coca-Cola, Paxful and many others.
          </p>
        </div>
      </div>

      <section className={cn(oona['section'], oona['projects'], 'projects')}>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/clip-finance" className={cn(oona['no-underline'])}>
              <img src="/images/work/clip/clip.webp" alt="Clip Finance" className="responsive-img"/>
            </a>
            <a href="#/work/clip-finance" className={cn(oona['flow-text'], 'flow-text')}>Clip Finance</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/advertum-cashback" className={cn(oona['no-underline'])}>
              <img src="/images/work/advertum/advertum.webp" alt="Advertum Cashback" className="responsive-img"/>
            </a>
            <a href="#/work/advertum-cashback" className={cn(oona['flow-text'], 'flow-text')}>Advertum Cashback</a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/paxful-wallet" className={cn(oona['no-underline'])}>
              <img src="/images/work/paxful-wallet.webp" alt="Paxful Bitcoin Wallet" className="responsive-img"/>
            </a>
            <a href="#/work/paxful-wallet" className={cn(oona['flow-text'], 'flow-text')}>Paxful Bitcoin Wallet</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/clip-yield-wars" className={cn(oona['no-underline'])}>
              <img src="/images/work/clip-yield-wars.webp" alt="Clip Yield Wars" className="responsive-img"/>
            </a>
            <a href="#/work/clip-yield-wars" className={cn(oona['flow-text'], 'flow-text')}>Clip Yield Wars</a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6 margin-on-medium-and-down">
            <a href="#/work/advertum-cashback-for-gamers" className={cn(oona['no-underline'])}>
              <img src="/images/work/advertum-cashback-for-gamers.webp" alt="Advertum Cashback for Gamers"
                   className="responsive-img"/>
            </a>
            <a href="#/work/advertum-cashback-for-gamers" className={cn(oona['flow-text'], 'flow-text')}>Advertum
              Cashback for Gamers</a>
          </div>
          <div className="col s12 l6">
            <a href="#/work/paxful-affiliate-program" className={cn(oona['no-underline'])}>
              <img src="/images/work/paxful-affiliate-program.webp" alt="Paxful Affiliate Program"
                   className="responsive-img"/>
            </a>
            <a href="#/work/paxful-affiliate-program" className={cn(oona['flow-text'], 'flow-text')}>Paxful Affiliate
              Program</a>
          </div>
        </div>
      </section>
    </div>
  )
}