import Banner from '@/components/Banner/Banner'
import styles from './page.module.css'
import Card from '@/components/card/Card'

const cardData = [
  {
    title: "We build website in modern way ",
    desc: "Your customers experience the blazing fast loading website. Zero downtime and Issue free seemless browsing website. ",
    img: "../assets/zero.png",
    logo: "svg"
  },
  {
    title: "Basic Website Contains ?",
    desc: "Navigation, Main Banner, Footer",
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/Homepage_Design.jpg",
    logo: "../assets/weblogo.png"
  },
  {
    title: "Daily article need to be published ?",
    desc: "Article Editor, Article Page, Article Search",
    img: "../assets/article-bg.png",
    logo: "../assets/article.png"
  },
  {
    title: "Your customers needs to engage with site ?",
    desc: "Contact Page",
    img: "../assets/contact-form.png",
    logo: "../assets/contact.png"
  },

]

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Card data={cardData} />
    </main>
  )
}
