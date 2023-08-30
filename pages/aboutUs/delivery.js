import Link from "next/link";
import { DivMain, DivLink, DivInfo, Section } from "../../styles/delivery";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t } = useTranslation();
  return (
    <DivMain>
      {/* <DivLink>
        <Link style={{ marginBottom: "10px" }} href="/aboutUs/partners">
          {t(`Partners`)}
        </Link>
        <Link style={{ marginBottom: "10px" }} href="/aboutUs/aboutUs">
          {t(`About us`)}
        </Link>
        <Link href="/aboutUs/delivery">{t(`Delivery and payment`)}</Link>
      </DivLink> */}
      <DivInfo>
        <Section>
          <h3>Оформлення замовлення</h3>
          <p>
            Ми приймаємо ваші замовлення за телефоном та консультуємо з 9.30 до
            20.00 з понеділка по п’ятницю. Оформити замовлення через сайт можна
            цілодобово. Для узгодження та уточнення деталей замовлення, способу
            доставки та оплати ми з вами зв’яжемося протягом декількох годин з
            моменту розміщення замовлення (в робочий час) і протягом наступного
            робочого дня, якщо замовлення зроблене в неробочий час.
          </p>
        </Section>
        <Section>
          <h3>Доставка</h3>
          <p>
            Доставку здійснюється кур’єрськими службами (Нова Пошта, Укрпошта)
            по всій території України.
          </p>
        </Section>
        <Section>
          <h3>Способи оплати замовлення</h3>
          <ul>
            <li>
              Картка Приватбанку Після оформлення замовлення ми зв’яжемося з
              вами для уточнення деталей і відправимо реквізити картки. Оплату
              можна зробити:
              <ul>
                <li>у терміналі Приватбанку</li>
                <li>Приват24</li>
                <li>через касу відділення Приватбанку</li>
              </ul>
            </li>
            <li>
              Накладенний платіж у відділенні кур’єрської служби при отриманні
              замовлення (згідно тарифам кур’єрської служби).
            </li>
          </ul>
        </Section>
      </DivInfo>
    </DivMain>
  );
};

export default Delivery;
