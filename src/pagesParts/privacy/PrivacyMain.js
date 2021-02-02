import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import MainParagraph from "../../components/typography/MainParagraph"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 989px) {
    grid-template-columns: 1fr 5fr 1fr;
  }
  @media (max-width: 389px) {
    display: flex;
    padding: 20px;
  }
`
const StyledMainWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  @media (max-width: 619px) {
    padding: 60px 0;
  }
  @media (max-width: 429px) {
    padding: 40px 0;
  }
  @media (max-width: 359px) {
    padding: 20px 0;
  }
`
const StyledHeading = styled.h2`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.6;
`
const StyledPointWrapper = styled.div`
  padding-bottom: 40px;
  &:last-of-type {
    padding-bottom: 0;
  }
`

export default function PrivacyMain() {
  return (
    <Container>
      <StyledGrid>
        <StyledMainWrapper>
          <StyledPointWrapper>
            <StyledHeading>1. Your Agreement with Mondello.</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dolore, ipsam ipsum suscipit cupiditate nisi in sunt numquam quam
              aut, quis officiis ratione quo ex alias. Iure alias ipsum ex amet
              iste cum sint deserunt soluta officiis quasi corporis laudantium
              error saepe recusandae assumenda delectus nesciunt repudiandae
              unde quas dolores, tempora ab esse quis. Eius soluta placeat,
              aperiam iure quisquam rerum praesentium repudiandae accusamus?
              Amet quis voluptas voluptates alias explicabo illo, exercitationem
              non et eius pariatur iste at reiciendis molestias architecto!
              Dolorum, in odio tenetur facere minima dolorem earum quibusdam
              modi culpa hic unde rerum aperiam natus ducimus nesciunt
              reiciendis officiis quam, sequi dignissimos similique! Corporis,
              repellat. Sed facilis harum deserunt.
            </MainParagraph>
          </StyledPointWrapper>
          <StyledPointWrapper>
            <StyledHeading>2. Privacy.</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dolore, ipsam ipsum suscipit cupiditate nisi in sunt numquam quam
              aut, quis officiis ratione quo ex alias. Iure alias ipsum ex amet
              iste cum sint deserunt soluta officiis quasi corporis laudantium
              error saepe recusandae assumenda delectus nesciunt repudiandae
              unde quas dolores, tempora ab esse quis. Eius soluta placeat,
              aperiam iure quisquam rerum praesentium repudiandae accusamus?
              Amet quis voluptas voluptates alias explicabo illo, exercitationem
              non et eius pariatur iste at reiciendis molestias architecto!
              Dolorum, in odio tenetur facere minima dolorem earum quibusdam
              modi culpa hic unde rerum aperiam natus ducimus nesciunt
              reiciendis officiis quam, sequi dignissimos? Quia quisquam
              expedita placeat officiis consequuntur, eius nobis ullam veniam
              perferendis ab consequatur dolor veritatis assumenda a quam harum
              sequi. Corporis, repellat. Sed facilis harum deserunt.
            </MainParagraph>
          </StyledPointWrapper>
          <StyledPointWrapper>
            <StyledHeading>3. License.</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
              excepturi eveniet eligendi illo pariatur dolorum soluta minima
              tempore aliquid quas ab, ea incidunt sunt labore et ad. Totam
              autem dolor inventore, nisi tempora sunt reprehenderit ab ratione
              et reiciendis maxime atque! Deleniti, sequi ea in unde excepturi
              voluptatem. Rem modi corporis iusto? Quis maxime quaerat et unde
              accusantium in sed? Magni nobis fuga recusandae itaque, pariatur
              dolores quis neque quaerat perferendis vitae voluptatibus quas!
              Quis earum quaerat, consequuntur eveniet corporis veniam unde
              doloribus repellat animi delectus, eaque nisi, dolore inventore
              vitae dicta laboriosam ex. Amet, necessitatibus. Hic inventore
              mollitia nihil ea error, cupiditate obcaecati modi temporibus eos
              totam porro laborum fugit. Natus sint pariatur quisquam quod
              doloremque nobis vel.
            </MainParagraph>
          </StyledPointWrapper>
          <StyledPointWrapper>
            <StyledHeading>4. Termination.</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              iure eaque possimus hic debitis praesentium! Facere, asperiores
              ipsum culpa omnis numquam quas consequuntur quae libero dolorum
              error nesciunt sapiente corporis veritatis molestias id voluptate
              animi hic non similique praesentium nobis explicabo debitis fugiat
              tempore. Laboriosam iste quaerat, id vero libero provident,
              inventore qui, ut perferendis beatae ipsam voluptate repellendus
              harum maiores quos dolore saepe architecto facere quas alias cum!
              Explicabo ratione a amet reprehenderit, perspiciatis consequatur
              quidem modi facere quia.
            </MainParagraph>
          </StyledPointWrapper>
          <StyledPointWrapper>
            <StyledHeading>5. Cookies and forms.</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem qui
              dignissimos corrupti a iste exercitationem repudiandae omnis
              eveniet, praesentium asperiores odio voluptate expedita est
              nostrum amet in ratione maxime, veniam vero at dolorem provident
              sequi. Eos pariatur asperiores reprehenderit nesciunt voluptates
              tempore ut eaque! Commodi earum magnam quia eos eaque asperiores
              libero rem et odio! Debitis, incidunt! Esse doloribus ducimus
              tempore unde a, saepe, porro facilis fugiat, fuga beatae dolor.
            </MainParagraph>
          </StyledPointWrapper>
        </StyledMainWrapper>
      </StyledGrid>
    </Container>
  )
}
