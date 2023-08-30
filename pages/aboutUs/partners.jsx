import {DivContact, PInvite,DivFlex,Section,H2,DivInvitation ,POther,PPreTitle,Ul,Li} from "../../styles/partners.styled";


const Partners = () => {
  return (
    <Section>
      <H2>Співпраця</H2>
      <PPreTitle>
        Ми раді запропонувати Вам партнерство з нашим магазином одягу та лежанок
        для тварин.
      </PPreTitle>
      <DivFlex>
          <DivInvitation>
          <PInvite>Запрошуємо до співпраці: </PInvite>
          <Ul>
            <Li>Онлайн та офлайн магазини</Li>
            <Li>Ветклініки та ветаптеки</Li>
            <Li>Готелі та школи для собак</Li>
            <Li>Грумінг салони</Li>
            <Li>Грумінг салони</Li>
            <Li>Розплідники собак</Li>
            <Li>Є опт та дроп</Li>
          </Ul>
        </DivInvitation>
        <POther>
          Для партнерів пропонуємо взаємовигідні умови співпраці, з доступом до
          особового кабінету на нашому сайті для перегляду Ваших цін та зручного
          оформлення замовлення. Якщо ви бажаєте стати нашим партнером або у вас
          є пропозиції, які б могли нас зацікавити, будь-ласка зв’яжіться з нами
          будь-яким зручним для Вас способом!
        </POther>

      </DivFlex>
       
      <DivContact>

      <h3 style={{marginTop:"0px"}}>Контакти</h3>
      <ul>
        <li>
          <a href="tel: +380995097424">+38 (099) 509 74 24</a>
        </li>
        <li>
          <a href="mailto:petshopua123@gmail.com">petshopua123@gmail.com</a>
        </li>
        <li></li>
          </ul>

        </DivContact>

    </Section>
  );
};

export default Partners;
