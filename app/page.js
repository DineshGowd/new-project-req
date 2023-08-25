import Banner from '@/components/Banner/Banner'
import styles from './page.module.css'
import Card from '@/components/card/Card'

const cardData = [
  {
    title: "We build website in modern way ",
    desc: "Your customers experience the blazing fast loading website. Zero downtime and Issue free seemless browsing website. ",
    img: "../assets/zero.png",
    logo: "svg",
    sideheading: false
  },
  {
    title: "Basic Website Contains ?",
    desc: "Navigation, Main Banner, Footer",
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/Homepage_Design.jpg",
    logo: "../assets/weblogo.png",
    sideheading: true
  },
  {
    title: "Daily article need to be published ?",
    desc: "Article Editor, Article Page, Article Search",
    img: "../assets/article-bg.png",
    logo: "../assets/article.png",
    sideheading: true
  },
  {
    title: "Your customers needs to engage with site ?",
    desc: "Contact Page",
    img: "../assets/contact-form.png",
    logo: "../assets/contact.png",
    sideheading: true
  },
  {
    title: "Not sure about Website Hosting and its maintainence ?",
    desc: "We provide end to end service on website from development to deployment. We expertise in deployment and build the scalable applications.",
    img: "../assets/deploy-bg.png",
    logo: "../assets/scalable-bg.png",
    sideheading: false
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      {cardData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </main>
  )
}
