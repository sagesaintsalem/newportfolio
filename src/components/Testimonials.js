import Card from "./Card";
import styled from 'styled-components';

const QuoteName = styled.p`
    font-weight: 800;
`;

const TestiDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`

const Testimonials = () => {

    return (
       <TestiDiv>
        <Card>
            <p>Rita is a dedicated employee. She is able to focus completely on a project she is working on, and sees it through to completion. I worked with her on a project supporting Neurodiversities, and she was a tireless presenter and advocate. Rita would be an asset to any organization.</p>
            <QuoteName>- Merilee Morales</QuoteName>
        </Card>

        <Card>
            <p>Rita's drive and passion was clear for all to see while working on and presenting projects to team members. Her technical and soft skills were a great benefit to all the teams she worked with. Rita is a big advocate and helped promote diversity within the work place and outside of it. Rita will be a huge asset for any team she joins.</p>
            <QuoteName>- John Donald</QuoteName>
        </Card>

        <Card>
            <p>Rita is an asset to any workforce looking to diversify. She brings the out of the box thinking that births trailblazing ideas. She is tenacious and takes any challenges in her stride. Rita is a pleasure to work with and is very mindful of the needs of those she works with.</p>
            <QuoteName>- S.G.</QuoteName>
        </Card>

       </TestiDiv>

    )
}

export default Testimonials;