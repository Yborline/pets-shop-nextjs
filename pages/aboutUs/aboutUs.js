import { useWindowWidth } from "@react-hook/window-size";
import image1 from "../../public/photo/aboutus1.png";
import image2 from "../../public/photo/aboutus2.png";

import {
  Container,
  Section1,
  DivInfo,
  Ul,
  H2,
  P,
  Li,
  Img1,
  Img2,
  DivFlex,
  DivFlexImg,
} from "../../styles/aboutUs.styled";

const AboutUs = () => {
  const width = useWindowWidth();
  return (
    <Container>
      <H2>Ласкаво просимо до нашого інтернет-магазину для тварин!</H2>
      <Section1>
        <DivFlex>
          <Img1
            style={{ borderRadius: "80px" }}
            priority
            src={image1}
            alt="small dog"
          ></Img1>
          {width < 768 && <h3>Хто ми?</h3>}

          <DivInfo>
            {width > 768 && <h3 style={{ textAlign: "center" }}>Хто ми?</h3>}
            <P>
              Ua.Petshop - це сімейний бізнес, який був заснований з любові до
              тварин та бажанням створити щось особливе для інших тваринолюбів.
            </P>
            <P>
              Ми працюємо наполегливо та з великою енергією, щоб забезпечити
              наших клієнтів продуктами найвищої якості.
            </P>
            <P>
              Наша мета - зробити “Ua.Petshop” місцем, де ви можете знайти все
              необхідне від лежанки до зимового комбінезону для Вашого
              улюбленця, зробити покупки простими, приємними та забезпечити
              повну задоволеність від нашої продукції та послуг.
            </P>
            <P>
              Ми за індивідуальний підхід до кожного клієнта і його господаря,
              тому Ви можете не тільки вибрати готовий одяг на свій смак, але і
              замовити за індивідуальними розмірами собачки чи з
              персоналізацією.
            </P>
          </DivInfo>
        </DivFlex>
      </Section1>
      <Section1>
        <DivFlex>
          <DivInfo>
            <h3 style={{ textAlign: "center" }}>Наші перваги: </h3>
            <Ul>
              <Li>Індивідуальний підхід до кожного клієнта.</Li>
              <Li>
                Широкий вибір моделей та дизайнів для будь-якої породи та
                розміру тварини.
              </Li>
              <Li>{`Співпрацюємо з офіційними дистриб'юторами кормів.`}</Li>
              <Li>
                Можливість замовити індивідуальний пошив за індивідуальними
                параметрами вашої тварини.
              </Li>
              <Li>
                Гнучкість у виборі дизайну та матеріалу за вашим бажанням та
                вподобанням.
              </Li>
              <Li>
                Професійна підтримка клієнтів та готовність допомогти з вибором
                та створенням ідеального образу вашої тварини.
              </Li>
            </Ul>
          </DivInfo>
          <Img2 width={400} height={400} src={image2} alt="small dog"></Img2>
        </DivFlex>
      </Section1>
    </Container>
  );
};

export default AboutUs;
